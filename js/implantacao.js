/* ---------------- IMPLANTAÇÃO — FONTE ÚNICA ----------------
   O polígono do lote, a via perimetral e a posição de cada volume vivem
   aqui, e não dentro de cada cena. A maquete embebida no index.html e a
   cena navegável do maquete.html leem os mesmos números: se a implantação
   mudar, muda num sítio só.

   Unidades: metros. Eixos: +x para nascente, -z para norte, y para cima.
   O polígono foi traçado sobre o print do Google Earth e escalado para dar
   exatamente 17.500 m². Mexer nele obriga a refazer a escala e a revalidar
   os recuos de 7 m e a deteção de colisão entre volumes. */
(function(){
  var LOTE = [[-30.6,-89.7],[13.1,-103.2],[28.7,-94.8],[104.2,2.7],[64.8,31.1],
              [22.4,59.1],[-63.7,132.9],[-73.8,108.7],[-44.2,40.0],[-9.4,-32.4],[-11.5,-54.5]];

  /* Via perimetral: anel de 8 m entre os recuos de 4 m e 12 m ao limite,
     calculado por bissetriz para acompanhar o contorno do lote. */
  var VIA_EXT = [[-24.8,-87.3],[12.7,-98.9],[26.1,-91.7],[98.5,1.9],[62.5,27.8],
                 [20.0,55.9],[-62.1,126.3],[-69.5,108.7],[-40.6,41.7],[-5.3,-31.7],[-7.6,-55.7]];
  var VIA_INT = [[-13.1,-82.6],[11.8,-90.3],[20.8,-85.4],[87.1,0.2],[58.0,21.2],
                 [15.2,49.5],[-59.0,113.1],[-60.8,108.8],[-33.3,45.0],[2.9,-30.2],[0.2,-58.1]];

  /* 10 moradias alinhadas com o limite nascente, espaçadas 11 m.
     Cada volume tem 8 m ao longo da fila e 12 m de profundidade virada ao
     interior — destacadas, com 3 m entre si, como no render de referência.
     A fila está recuada 1 m em relação ao traçado inicial: com os volumes
     nesta orientação, a última moradia ficava a 6,88 m do limite e o recuo
     mínimo assumido é de 7 m. Recuada, fica a 7,88 m. */
  var CASAS = [[23.2,-79.1],[29.9,-70.4],[36.6,-61.7],[43.4,-53.0],[50.1,-44.3],
               [56.8,-35.6],[63.6,-26.9],[70.3,-18.2],[77.0,-9.5],[83.8,-0.8]];

  window.IMPLANTACAO = {
    AREA_M2: 17500,
    LOTE: LOTE,
    VIA_EXT: VIA_EXT,
    VIA_INT: VIA_INT,
    CASAS: CASAS,
    CASA_ROT: 37.8,      // graus — direção da fila, paralela ao limite nascente
    CASA_ROT_VOL: -52.2, // graus — rotação de cada volume (CASA_ROT menos 90)
    CASA_W: 8.0,         // ao longo da fila
    CASA_D: 12.0,        // profundidade, virada ao interior do lote
    CASA_PISOS: 2,
    CASA_H_PISO: 3.4,
    H_PISO: 4.0,         // pé-direito dos edifícios de 3 pisos

    /* Volumes: centro (x,z), dimensões em planta, rotação em graus.
       Todos validados por deteção de colisão e recuo de 7 m aos limites —
       mexer num obriga a revalidar os outros. */
    HOTEL_A:  {x:-40.0, z: 96.0, w:56, d:16, pisos:3, rot:-42},  // ala principal
    HOTEL_B:  {x:-37.9, z: 68.5, w:16, d:22, pisos:3, rot:-42},  // braço do L
    APART:    {x:  2.0, z:-69.5, w:52, d:14, pisos:3, rot:  8},  // apartamentos, a norte
    DECK:     {x: 10.0, z:-38.0, w:34, d:24, rot:0},
    PISCINA:  {x: 10.0, z:-38.0, w:20, d:10, rot:0},             // 200 m²
    BAR:      {x: 10.0, z:-55.0, w: 9, d: 7, rot:0},
    RELVADO:  {x:-23.0, z: 43.0, w:28, d:20, rot:-30}            // relvado de eventos
  };
})();
