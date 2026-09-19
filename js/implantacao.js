/* ---------------- IMPLANTAÇÃO — FONTE ÚNICA ----------------
   O polígono do lote e a posição de cada volume vivem aqui, e não dentro de
   cada cena. A maquete embebida no index.html (Modelo 1) e a cena navegável
   do maquete.html leem os mesmos números: se a implantação mudar, muda num
   sítio só.

   Unidades: metros. Eixos: +x para nascente, -z para norte, y para cima.

   O LOTE é o polígono REAL, extraído da fotografia aérea do Google Earth que
   o utilizador mediu (16/10/2025): 16 287,82 m² e 616,77 m de perímetro. Foi
   traçado por deteção da linha de medição na imagem, simplificado e escalado
   para dar exatamente a área medida — 0,5823 m por pixel. A origem é o centro
   desse polígono.

   ATENÇÃO: o site escreve 17.500 m² (hero, menu, contas). Esse número vem de
   outra fonte e NÃO foi alterado. A maquete usa o polígono medido, que dá
   16.288 m². São 1.212 m² de diferença, 7% — está por decidir qual prevalece.

   Os volumes foram reencaixados neste polígono por um solver de colisão e
   recuo (o guião está no histórico da sessão). Nenhum canto de nenhum volume
   sai do lote: o recuo mínimo é 7 m nos edifícios e 5 m no deck e no relvado.
   Mexer num volume obriga a revalidar os outros. */
(function(){
  /* Limite real do lote — 21 vértices, 16 287 m², perímetro 637 m. */
  var LOTE = [
                [11.8,-129.5],[29.7,-124.1],[31.9,-116.9],[114.1,-39.3],
                [46.1,17.8],[16.6,55.0],[15.5,63.4],[3.1,73.1],
                [-6.8,91.5],[-15.7,93.9],[-17.3,105.1],[-28.6,101.5],
                [-30.3,93.7],[-43.0,83.9],[-43.0,63.5],[-38.0,60.2],
                [1.4,-56.7],[-5.3,-80.8],[-29.1,-110.7],[-8.5,-118.8],
                [-4.5,-125.7]];

  /* 10 moradias ao longo do limite nascente, que tem 113 m a direito.
     Espaçadas 11,2 m: 8 m de volume e 3,2 m entre vizinhas. */
  var CASAS = [
                [22.2,-108.2],[30.4,-100.5],[38.5,-92.8],[46.7,-85.1],[54.8,-77.4],
                [63.0,-69.7],[71.1,-62.0],[79.2,-54.3],[87.4,-46.6],[95.5,-39.0]];

  window.IMPLANTACAO = {
    AREA_M2: 16288,          /* medida no Google Earth; o site diz 17.500 */
    PERIMETRO_M: 637,
    LOTE: LOTE,
    CASAS: CASAS,
    CASA_ROT: 43.4,          /* graus — direção da fila, paralela ao limite nascente */
    CASA_ROT_VOL: 223.4,      /* rotação de cada volume: 8 m ao longo da fila,
                                12 m de profundidade, terraço virado ao interior */
    CASA_W: 8.0,
    CASA_D: 12.0,
    CASA_PISOS: 2,
    CASA_H_PISO: 3.4,
    H_PISO: 4.0,             /* pé-direito dos edifícios de 3 pisos */

    /* Centro (x,z), dimensões em planta, rotação em graus.
       Hotel e relvado alinhados com o limite poente (123 m a direito);
       apartamentos, moradias, deck e bar alinhados com o limite nascente. */
    HOTEL_A: {x:-2.4, z:14.0, w:56, d:16, pisos:3, rot:-71.4},
    HOTEL_B: {x:22.0, z:1.2, w:16, d:22, pisos:3, rot:-71.4},
    APART:   {x:11.2, z:-88.4, w:52, d:14, pisos:3, rot:43.4},
    DECK:    {x:40.0, z:-43.2, w:34, d:24, rot:43.4},
    PISCINA: {x:40.0, z:-43.2, w:20, d:10, rot:43.4},   /* 200 m² */
    BAR:     {x:27.0, z:-29.4, w:9,  d:7,  rot:43.4},
    RELVADO: {x:-22.5, z:61.1, w:28, d:20, rot:-71.4},

    /* Portão: no limite sudeste, que é onde a estrada pública passa
       encostada ao lote na fotografia aérea. */
    ACESSO: {x:80.1, z:-10.7},

    afastar: afastar,
    viaDeAcesso: viaDeAcesso
  };

  /* Afasta um polígono d metros para fora, por bissetriz. Serve para a via
     perimetral e para desenhar recuos a partir do limite. */
  function afastar(pol, d){
    var horario = areaCom(pol) < 0, n = pol.length, out = [];
    for(var i=0;i<n;i++){
      var a = pol[(i-1+n)%n], b = pol[i], c = pol[(i+1)%n];
      var n1 = normal(a,b,horario), n2 = normal(b,c,horario);
      var bx = n1[0]+n2[0], bz = n1[1]+n2[1], L = Math.hypot(bx,bz) || 1;
      bx/=L; bz/=L;
      var t = Math.min(d/Math.max(bx*n1[0]+bz*n1[1], 0.3), d*3);
      out.push([b[0]+bx*t, b[1]+bz*t]);
    }
    return out;
  }
  function areaCom(pol){
    var a=0;
    for(var i=0,n=pol.length;i<n;i++){ var p=pol[i], q=pol[(i+1)%n]; a += p[0]*q[1]-q[0]*p[1]; }
    return a/2;
  }
  function normal(a,b,horario){
    var dx=b[0]-a[0], dz=b[1]-a[1], L=Math.hypot(dx,dz)||1;
    return horario ? [-dz/L, dx/L] : [dz/L, -dx/L];
  }

  /* Via de acesso: um anel a `dist` do limite que se desvia para dentro
     onde encontra construção, em vez de lhe passar por baixo. `pegadas` é
     uma lista de {x,z,w,d,r} em radianos. */
  function viaDeAcesso(pol, pegadas, dist, margem){
    var base = afastar(pol, dist), pts = [], i, k;
    for(i=0;i<base.length;i++){
      var a = base[i], b = base[(i+1)%base.length];
      var L = Math.hypot(b[0]-a[0], b[1]-a[1]), n = Math.max(1, Math.round(L/6));
      for(k=0;k<n;k++) pts.push([a[0]+(b[0]-a[0])*k/n, a[1]+(b[1]-a[1])*k/n]);
    }
    var cx=0, cz=0;
    for(i=0;i<pol.length;i++){ cx+=pol[i][0]; cz+=pol[i][1]; }
    cx/=pol.length; cz/=pol.length;
    pts = pts.map(function(p){
      var x=p[0], z=p[1];
      for(var t=0;t<70;t++){
        var bate = pegadas.some(function(f){
          var dx=x-f.x, dz=z-f.z, c=Math.cos(-f.r), s=Math.sin(-f.r);
          var lx=dx*c-dz*s, lz=dx*s+dz*c;
          return Math.abs(lx) < f.w/2+margem && Math.abs(lz) < f.d/2+margem;
        });
        if(!bate) break;
        var vx=cx-x, vz=cz-z, L=Math.hypot(vx,vz)||1;
        x += vx/L*1.4; z += vz/L*1.4;
      }
      return [x,z];
    });
    for(var s=0;s<4;s++){
      pts = pts.map(function(p,i){
        var a=pts[(i-1+pts.length)%pts.length], b=pts[(i+1)%pts.length];
        return [(a[0]+p[0]*2+b[0])/4, (a[1]+p[1]*2+b[1])/4];
      });
    }
    pts.push(pts[0].slice());
    return pts;
  }
})();
