# O Terreno — Projeto Hoteleiro

Site one-page (`index.html`, autocontido — sem build, sem dependências locais)
para um projeto de hotel num terreno em Montemor-o-Novo. Serve para documentar o
projeto e o processo urbanístico à medida que avança.

## Estado atual

- Branch de trabalho: `claude/site-assistance-pk5n2b` → PR #6 em
  `davicriaofc-cmd/Site-Terreno` (ver com `git log` se precisares do estado
  mais recente). O `claude/mano-slfa79` / PR #2 é histórico antigo.
- Todo o site vive num único `index.html`. Sem framework, sem npm — editar
  diretamente o ficheiro.

## Dados reais do projeto (não inventar/alterar sem confirmação do utilizador)

- **Localização:** Montemor-o-Novo (distrito de Évora), junto ao Centro
  Hípico D. Duarte e ao complexo desportivo. Coordenadas ~38°38'36"N
  8°12'05"W. **Não é na cidade de Évora** — Évora aparece no site só como
  argumento de mercado (o novo hospital) e como referência de tipologia
  (Hotel Ibis). Não voltar a escrever que o terreno é em Évora.
- **Área do terreno:** 17.500 m² (não é 1.700 — esse número apareceu numa
  versão inicial e estava errado). Uma medição do utilizador no Google
  Earth deu 16.152 m² / 615 m de perímetro, mas o polígono era traçado à
  mão; o utilizador confirmou que o valor a usar é 17.500 m².
- **Forma do lote:** polígono irregular, tipo cunha, com o eixo maior a
  correr NNO–SSE; lado mais largo a norte, a estreitar para sul. Estrada
  ao longo do limite nascente/sudeste. Terreno praticamente plano
  (225–233 m de cota). Ver o print do Google Earth no histórico da sessão.
- **Classificação atual:** Equipamento (não permite hotel).
- **Classificação prevista:** Serviços e Turismo — já incluída pelo Município
  no novo PDM, precisamente para permitir o hotel.
- **PDM (Plano Diretor Municipal):** em revisão. Devia ter terminado no ano
  anterior; atrasou por mudança de executivo. Enquanto não é publicado,
  nenhum projeto é aprovado, mas é possível pedir alterações a índices,
  cotas e classificação.
- **Índice de construção atual:** 40% → 7.000 m² de implantação.
- **Pisos acima do solo:** 3 → 21.000 m² de área bruta de construção.
- **Subsolo:** sem limite de pisos (não conta para o índice).
- **Fachada:** até 12 m.
- **Explanada no topo:** permitida.
- **Piscinas:** não contam para a área de construção/índice.
- **Cenário em avaliação (NÃO confirmado):** pedido de aumento de índice
  até 60% + tipologia mista (hotel + casas de apoio, ex. 30%/30%, à
  semelhança do Hotel Ibis em Évora). Motivo: procura de alojamento ligada
  ao novo hospital de Évora. Interlocutora: Vereadora do Turismo Paula
  Martins (já mostrou abertura). Pedido feito ao Gabinete de Ordenamento
  do Território.
- **Postes (MT elétrica + madeira telecomunicações):** remoção a cargo do
  proprietário, pedida assim que houver projeto aprovado.
- **Roteiro (secção "Próximos passos" do site):** 1) pedido de aumento de
  índice, 2) pedido de tipologia mista, 3) topografia + desenhos conceituais
  com arquiteto (em paralelo), 4) aprovação prioritária (apoio já manifestado
  por Urbanismo + Turismo).

Regra importante ao editar conteúdo: distinguir sempre o que está **confirmado**
(índice 40%, 3 pisos, etc.) do que está **em avaliação/pendente** (índice 60%,
tipologia mista). Não apresentar o cenário pendente como decidido.

## Estrutura do site (ordem das secções)

Confirmar sempre com `grep -n '<section id=' index.html` — esta lista já
esteve desatualizada.

1. Loader + menu hambúrguer (fixo, liga a todas as secções por âncora)
2. Hero com scroll-lock — 5 painéis (`#scrollTrack` / `.hero-panel`)
3. `#estado` — estado do processo urbanístico
4. `#pisos` — o hotel a abrir-se camada a camada (imagens em `images/pisos/`)
5. `#corte` — corte esquemático em SVG (3 pisos, 12 m, cave, explanada)
6. `#plot` — índice de ocupação atual (40% hotel / 60% livre)
7. `#expansao` — cenário em avaliação (índice alargado + tipologia mista)
8. `#modelos` — 5 estudos volumétricos; o Modelo 1 abre a maquete 3D
9. `#porque-agora` — os três argumentos (PDM aberto, hospital, Câmara)
10. `#proximos-passos` — roteiro
11. `#concept` — parâmetros confirmados (subsolo, explanada/piscinas, postes)
12. `footer`

**Já não existem:** `#evolucao` (crossfade das 6 fases de construção) e
`#tour` (visita 360º em Three.js). Foram removidas do `index.html` numa
sessão anterior, e as pastas `images/evolucao/` e `images/tour/` também já
não existem. Os dois blocos abaixo descrevem-nas para memória futura, caso
se queiram recuperar — mas **não estão no site**.

## Evolução da construção (`#evolucao`) — REMOVIDA do site

Crossfade entre 6 imagens ligado ao **scroll normal** (sem prender o rato —
ao contrário do hero, aqui não há `preventDefault`, é só opacidade a mudar
com a posição de scroll, com pontos clicáveis para saltar direto a uma
fase). Script: `/* EVOLUÇÃO DA CONSTRUÇÃO (crossfade ligado ao scroll) */`.

As imagens atuais em `images/evolucao/` (`00-terreno-ilustrativo.svg` até
`05-100pc.svg`) são **placeholders ilustrativos** (diagramas gerados,
estilo arquitetónico simples) — quando o utilizador mandar fotos reais de
cada fase, basta substituir os ficheiros com o mesmo nome (ou atualizar os
`src=` no HTML se os nomes/formatos forem diferentes). Não regenerar os
SVGs a partir de código sem pedir — foram feitos à mão para este efeito.

## Visita 360º (`#tour`) — REMOVIDA do site

O array `scenes` no script do tour aceita um campo opcional `img` (caminho
para uma foto/render equirretangular 2:1). Se presente, carrega essa
textura via `THREE.TextureLoader` em vez de gerar a cena processual em
canvas. Basta acrescentar `img:'images/tour/nome.jpg'` a uma cena quando
houver material real — não é preciso mexer no resto do código.

## Maquete 3D do Modelo 1 (`#modelos` → vista de modelo)

O Modelo 1 abre com uma maquete 3D navegável (arrastar para rodar, roda para
aproximar) que **cresce ao abrir**: o lote espalha-se, a via desenha-se, os
edifícios sobem do chão, a piscina enche e o pomar nasce — cerca de 3 s no
total. O botão "Ver crescer outra vez" repete. Script:
`/* MODELO 1 — MAQUETE 3D (cresce ao abrir) */` no fim do `index.html`.

- **Biblioteca:** `vendor/three.min.js` (three r160, build UMD), servida do
  próprio repositório — o site continua sem depender de CDNs. Não trocar por
  um CDN sem pedir.
- **Só arranca quando o Modelo 1 é aberto** (nada de WebGL no carregamento da
  página) e o `requestAnimationFrame` pára ao fechar. Sem WebGL, a maquete
  fica escondida e mostra-se só o render — ver `MODELO_RENDERS['1'].maquete3d`.
- **Lote:** polígono `LOTE`, traçado sobre o print do Google Earth e escalado
  para dar exatamente 17.500 m². Não mexer sem refazer a escala.
- **Implantação** (constantes no script, todas validadas por deteção de
  colisão e recuo de 7 m aos limites — se mudares uma, revalida as outras):
  hotel em L a sul (ala de 56×16 m + braço de 16×22 m, 3 pisos, fotovoltaico);
  apartamentos a norte (52×14 m, 3 pisos, fotovoltaico); 10 moradias em banda
  a nascente (8×12 m, 2 pisos, jacuzzi no rooftop); piscina de 200 m² com deck
  e bar ao centro; relvado de eventos a sul; pomar em grelha; via perimetral
  de 8 m entre `VIA_EXT` e `VIA_INT`.
- **Câmara:** `enquadrar()` afasta-se sozinha até o construído caber, seja qual
  for a proporção do canvas; `anguloDePartida()` escolhe a vista larga
  (canvas ao baixo) ou a vista compacta (canvas em retrato).
- `images/modelos/modelo1.png` passou a ser a **implantação de referência**,
  mostrada mais pequena por baixo da maquete.

## Modelos 3D reais (pendente)

O utilizador vai mandar fotos reais em fases (terreno ilustrativo, terreno
limpo, 25/50/75/100% construído) para alimentar a secção `#evolucao`, e
mais tarde fotos/renders 360º reais do interior (hotel, casas, piscina)
para o `#tour`. "Andar por dentro" em 3D navegável só é possível com um
ficheiro 3D real (`.glb`/`.gltf` do arquiteto) — não é algo derivável só de
fotos 2D. Não prometer isso sem esse ficheiro.

## Mecânica do hero (scroll-lock por passos)

O hero **não** usa scroll contínuo mapeado a uma faixa alta — isso já foi
tentado e o utilizador não gostou (tinha de rodar muito a roda do rato antes
de "largar"). A versão atual avança **um painel por pequena rotação da roda**,
com cooldown (~650ms) para não saltar vários de uma vez numa rajada, e liberta
o scroll normal ao passar do último painel. Ver o script
`/* SCROLL-LOCKED HERO (por passos) */` em `index.html`. Não voltar ao modelo
de scroll contínuo sem pedir confirmação. Os painéis não têm rótulo numerado
(tipo "01 — O TERRENO") — foi removido a pedido do utilizador; só o `<h1>`
(e por vezes um `<p class="hero-sub-text">`) por painel.

## Estilo visual (não redesenhar sem pedir)

Paleta: sand `#EFE8D8`, ink `#1B2116`, olive `#3F4A32`, gold `#B08D3E`,
night `#0E1720`. Tipografia: Fraunces (títulos, serif itálico para ênfase),
Inter (corpo), IBM Plex Mono (eyebrows/dados numéricos). Tom: arquitetónico,
contido, sem emojis.

## Pendente / próximos pedidos prováveis

- Modelos 3D reais dos 5 estudos volumétricos — dois caminhos possíveis:
  (a) trabalho de arquiteto real (SketchUp/Revit), fora do âmbito deste
  repositório, corresponde ao passo 3 do roteiro; ou
  (b) blocos volumétricos ilustrativos em Three.js dentro do próprio site
  (extrusões simples da pegada de cada modelo), que eu consigo construir
  em código. Perguntar qual dos dois antes de avançar.

## Estado do que estava combinado

**Feito:**
- Corte com **aba por modelo (1 a 5)** — `#corte`. Os desenhos são gerados de
  `CORTES` no script `/* CORTE POR MODELO */`; o envelope (3 pisos, 12 m,
  subsolo livre) é regulamento confirmado, mas **a distribuição de programa
  por piso de cada modelo é leitura das descrições e está por confirmar**.
  O limite dos 12 m é desenhado sempre à mesma altura, para se ver quem o
  não esgota (Modelo 3 usa 2 pisos).
- **Painel "VISÃO" do hero substituído** por `O TERRENO EM NÚMEROS` ·
  "17.500 m² à espera de contas" (opção A das duas propostas). A frase antiga
  continua no rodapé.
- **Site encurtado: 9 secções → 6, 1.160 → 868 palavras.** Fundidas
  `#plot`+`#expansao` e `#corte`+`#concept` e `#porque-agora`+`#proximos-passos`.
  No `#modelos` cada estudo ficou com uma linha. Menu refeito com 6 entradas.
- **`three.js` só a pedido** — `carregarThree()` injeta o script quando o
  Modelo 1 abre. Não há pedido nenhum no arranque da página.
- **Maquete mais realista** — MeshStandardMaterial com rugosidade, sol mais
  forte com sombras 2048 e luz de preenchimento, tone mapping ACES.
- **Maquete alinhada com `modelo1.png`** — piscina/deck/bar movidos para
  norte (z=-38), entre apartamentos e moradias; pomar plantado só numa faixa
  a 14–36 m do limite (`aoBordo()`), deixando o centro aberto como no render.
- **`precos.html`** — página à parte, `noindex`, **sem link nenhum a partir do
  `index.html`** (decisão: não mostrar contas à Câmara). Duas secções, o que
  custa pôr de pé e o que se cobra, com os campos editáveis e as contas a
  refazerem-se. Mostra "área bruta por quarto" para denunciar programas
  incoerentes.

**Por fazer, e porquê:**
- **Números reais para o `precos.html`.** Os valores lá dentro são marcadores
  assumidos como tal num aviso no topo — não são estimativas do projeto.
  Faltam: valor do terreno, custo de construção €/m², m² de cave, nº de
  quartos, tarifa média, ocupação. **Não inventar.**
- **Alturas e pisos dos Modelos 2 a 5**, para os cortes deixarem de ser
  leitura minha.
- **Envolvente 3D** (Centro Hípico, estádio, pista, armazéns, estradas) —
  falta um print do Google Earth mais afastado, ou o KML.
- **Fotos reais do terreno** — o site não tem uma única. Servem para o hero,
  não para o 3D.
- **Pormenor fino da maquete** (janelas individuais, varandas, caminhos,
  estacionamento, espreguiçadeiras). O teto sem `.glb` de arquiteto mantém-se.
- **Ligar (ou não) o `precos.html` ao site.** O painel novo do hero promete
  falar de custos e de receita, mas não há caminho para lá — é decisão do
  utilizador, porque criar o link expõe as contas a quem abrir o site.

## Como tornar o terreno realista (guia para o utilizador)

Por ordem de efeito, do que dá mais salto por menos esforço. Os quatro
primeiros são de graça e não dependem de ninguém de fora.

1. **Ortofoto drapeada sobre o lote.** É de longe o maior salto: em vez de
   um verde chapado, o chão passa a ser a imagem aérea real, com os
   caminhos, as manchas de terra e a vegetação que lá estão. Como obter:
   Google Earth, vista **exatamente de cima** (tecla `r` repõe o norte e
   anula a inclinação), zoom até o lote encher o ecrã, esconder painéis, e
   guardar a imagem. Fica um PNG que se aplica como textura ao polígono do
   lote. **Importante:** sem inclinação nenhuma, senão a imagem fica
   deformada e não assenta no polígono.

2. **KML/KMZ do lote.** Substitui o polígono que eu tracei à mão por
   coordenadas exatas. No Google Earth: **Guardar no projeto** e depois
   exportar como KML. Resolve de vez a dúvida entre os 16.152 m² medidos e
   os 17.500 m² assumidos.

3. **Contornos de elevação.** O terreno **não é plano** — 225,18 m no ponto
   mais baixo, 233,41 no mais alto, 8 m de diferença. A maquete modela-o
   plano, o que é uma simplificação visível. O painel de medição do Google
   Earth tem o botão **"Gerar contornos para este local"**: com esses
   contornos dá para modelar o relevo real e ver onde é preciso escavar ou
   aterrar. Isto também interessa ao custo de construção.

4. **Print mais afastado para a envolvente.** Um enquadramento que apanhe o
   Centro Hípico D. Duarte, o estádio, a pista de atletismo e os armazéns.
   Serve para construir os volumes à volta — mostra à Câmara que o projeto
   se integra e ao investidor que o terreno não está isolado.

5. **Fotos do terreno ao nível do solo.** Não servem para geometria (uma
   foto não tem profundidade), mas servem para duas coisas: o hero do site,
   que não tem uma única imagem real, e para acertar cores e vegetação da
   maquete. Úteis: uma da entrada pela estrada nascente, uma do interior a
   olhar para o hípico, uma a apanhar os postes a remover.

6. **Levantamento topográfico do topógrafo.** É o passo 3 do roteiro e
   substitui os pontos 2 e 3 com rigor de projeto. Pedir em **DWG/DXF ou
   pontos XYZ**, não só em PDF — de PDF não se extrai geometria.

7. **`.glb`/`.gltf` do arquiteto.** O teto. Sem este ficheiro a maquete não
   chega ao nível de um render de arquitetura (janelas, varandas, materiais
   modelados). Ao pedir o trabalho ao arquiteto, **pedir também a exportação
   em glTF** — é um pedido normal e não custa mais.

Ordem prática sugerida ao utilizador: 1 e 2 primeiro (dez minutos no Google
Earth, salto grande), depois 3 e 4, e as fotos quando lá for.

**Plantas — onde as fazer.** Avisado o utilizador de que desenhos feitos por
ele **não têm valor para licenciamento**: em Portugal o projeto de arquitetura
tem de ser assinado por arquiteto inscrito na Ordem. Servem para chegar ao
arquiteto com a ideia já clara. Por ordem de facilidade: Sweet Home 3D (grátis,
desktop, aprende-se numa tarde) → Floorplanner ou RoomSketcher (browser) →
SketchUp (versão web gratuita) → Blender (sem limites, mas é um programa a
sério). Para alimentar este site o formato é `.glb`/`.gltf`: o Blender exporta
direto, o SketchUp e o Sweet Home 3D dão `.obj`/`.dae` e converte-se.

## Pull requests

Só deve existir **um PR aberto de cada vez** — o utilizador pediu isso
explicitamente. Os PRs #1 e #5 foram fechados por essa razão (o #5 levou nota
a dizer que o commit `4c85888`, "inclinar o hotel com o movimento do rato",
continua no branch `claude/mano-slfa79` e nunca foi integrado). Não abrir PRs
novos: o #6 atualiza-se sozinho a cada push.

## Fluxo de trabalho

- Commits diretamente para `claude/site-assistance-pk5n2b`, depois `git push`.
  O PR #6 atualiza-se sozinho a cada push.
- Antes de dar como concluída qualquer alteração visual, testar com
  Playwright headless (`/opt/pw-browsers/chromium`, `NODE_PATH=/opt/node22/lib/node_modules`)
  e tirar screenshot — CDNs externos (Google Fonts, cdnjs three.js) podem
  falhar no sandbox por bloqueio de rede; isso não é regressão do código.
