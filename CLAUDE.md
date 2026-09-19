# O Terreno — Projeto Hoteleiro

Site one-page (`index.html`, autocontido — sem build, sem dependências locais)
para um projeto de hotel num terreno em Montemor-o-Novo. Serve para documentar o
projeto e o processo urbanístico à medida que avança.

## Estado atual

- Branch de trabalho: `claude/zen-curie-lr4ixr` → PR #8, saído de `main` já
  com o trabalho do PR #6 integrado (confirmar sempre com `git log`). O #8
  atualiza-se sozinho a cada push — não abrir PRs novos. Os
  `claude/site-assistance-pk5n2b` / PR #6 e `claude/mano-slfa79` / PR #2 são
  histórico.
- Ficheiros: `index.html` (o site), `precos.html` (as contas), `maquete.html`
  (a cena 3D — é o Modelo 1), `js/implantacao.js` (lote e volumes),
  `js/envolvente.js` (o que existe à volta), `images/envolvente/solo.webp`
  (a fotografia aérea classificada) e `vendor/three.min.js`. Sem framework,
  sem npm — editar diretamente os ficheiros.

## Dados reais do projeto (não inventar/alterar sem confirmação do utilizador)

- **Localização:** Montemor-o-Novo (distrito de Évora), junto ao Centro
  Hípico D. Duarte e ao complexo desportivo. Coordenadas ~38°38'36"N
  8°12'05"W. **Não é na cidade de Évora** — Évora aparece no site só como
  argumento de mercado (o novo hospital) e como referência de tipologia
  (Hotel Ibis). Não voltar a escrever que o terreno é em Évora.
- **Área do terreno: 17.500 m², e a discrepância está resolvida.** O
  utilizador reafirmou os 17.500 m² como área do projeto. A forma vem do
  polígono que ele mediu no Google Earth (16/10/2025), com cotas de 225,19 m
  a 234,02 m. O painel de medição do Google Earth dizia 16.287,82 m² para
  esse polígono, mas isso depende da escala: a **barra de escala da mesma
  interface dá 0,606 m/px** e a escala que faz o polígono valer 17.500 m² é
  **0,60361 m/px** — 0,4% de diferença. Ou seja, **a barra de escala e os
  17.500 m² concordam; é o número da área do painel que destoa**. Adotou-se
  0,60361 m/px, e toda a cena (lote, edifícios, árvores, estádio) está a essa
  escala. Sanidade: o campo de futebol do complexo desportivo dá 120 × 74 m,
  que é um campo com as folgas laterais.
- **Forma do lote (medida, não assumida):** cunha com 238 m no eixo
  norte–sul e 157 m no máximo a nascente–poente. Larga a meio (101 m úteis
  à latitude do ponto nascente), estreita para norte (29 m) e afila para sul
  até fechar. Dois limites a direito que mandam na implantação: **nascente,
  113 m** (é onde vão as moradias) e **poente, 123 m** (é onde vai o hotel).
  A estrada pública passa encostada ao **limite sudeste** — é por aí que
  entra o acesso. Desnível de **9 m** (225,19 a 234,02 m): manda na cota a
  partir da qual se mede a fachada e no que é preciso escavar. **A maquete
  modela o lote plano** — é a simplificação que falta resolver.
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

## Georreferenciação: tudo assenta na fotografia aérea

A cena 3D não é mais uma paisagem inventada. Está toda sobre a fotografia
aérea do Google Earth que o utilizador forneceu (16/10/2025, câmara a
38°38'33.14"N 8°12'00.46"W), à mesma escala e na mesma origem.

**Como se chegou lá** (o guião está no histórico desta sessão; se for preciso
refazer com uma fotografia nova, é este o caminho):

1. Detetar a linha amarela de medição na imagem, preencher o interior e
   extrair o contorno ordenado. Simplificar (Douglas–Peucker) e recuar meia
   espessura da linha, para ficar com o eixo e não com a borda de fora.
2. **Calibrar em 0,60361 m/px**, que é a escala que dá ao polígono medido os
   17.500 m² do projeto e coincide com a barra dos 100 m da interface (0,606).
   O número de área do painel de medição (16.287,82 m²) corresponderia a
   0,5823 m/px e ficou de fora. Régua independente: o campo de futebol dá
   120 × 74 m a esta escala.
3. Origem no centro do polígono. +x nascente, −z norte.
4. Classificar a fotografia por tipo de ocupação e reduzir a uma **grelha de
   3 m** → `ENVOLVENTE.TERRENO.g`, uma string com um carácter por célula. O
   `maquete.html` constrói dela uma **malha com cor por vértice**, juntando
   células iguais na mesma linha. **Deixou de haver fotografia na cena** — foi
   requisito explícito do utilizador: "não usar fotografias como substituto
   de 3D". O `images/envolvente/solo.webp` foi apagado.
5. Separar estradas de esplanadas **pela largura local** (transformada de
   distância sobre a grelha): faixas de pavimento com menos de ~13 m são
   estrada (classe 3), manchas largas ficam esplanada. É o critério objetivo
   que sobrou — a cor não separa estradas neste sítio, porque está tudo seco
   e claro. **Não traçar estradas a olho**: o utilizador queixou-se
   explicitamente de estradas inventadas.
6. Detetar coberturas e copas → `EDIFICIOS`, `ARVORES`. Medir o campo e a
   pista do complexo desportivo → `ESTADIO`, que a cena constrói em volume
   (anel da pista, campo e bancada com pala).

**O que é real e o que não é:** posição, forma em planta e orientação de tudo
são medidas. **A altura dos volumes da envolvente é estimada** pela área de
implantação e pelo tipo de cobertura — uma fotografia de cima não dá altura.
As **cavalariças do centro hípico** aparecem agrupadas em massas: a deteção
não as separa edifício a edifício a esta resolução.

**A cartografia aberta está bloqueada.** O Overpass (OpenStreetMap) devolve
403 no proxy de egresso desta sessão — confirmado a 19/09/2026, com o motivo
registado em `$HTTPS_PROXY/__agentproxy/status`. Seria a via limpa para ter a
rede de estradas e as pegadas dos edifícios com coordenadas em vez de
deteção. Não insistir; é política de rede, não avaria.

## A implantação vive num sítio só: `js/implantacao.js`

O polígono do lote e o centro, dimensões e rotação de cada volume estão em
`js/implantacao.js` (`window.IMPLANTACAO`), com duas funções partilhadas:
`afastar(pol,d)` (recuo por bissetriz) e `viaDeAcesso(pol,pegadas,d,margem)`
(a via que contorna o construído em vez de lhe passar por baixo).

**Os volumes foram reencaixados no polígono real** por um solver de relaxação
(empurra para dentro do lote, separa colisões, o L do hotel e a fila de
moradias andam como peças rígidas). O resultado, verificado:

- Hotel em L (56×16 + 16×22) ao longo do limite poente, recuo 11 m.
- Apartamentos (52×14) no lobo norte, recuo 7 m.
- 10 moradias (8×12) ao longo do limite nascente, espaçadas 11,2 m, recuo 7 m.
- Deck 34×24 com piscina de 200 m² e bar, ao centro, recuo 20 m.
- Relvado de eventos (28×20) na cauda sul, recuo 5 m.
- **Nenhum canto de nenhum volume sai do lote.** Era requisito explícito do
  utilizador. Se mexeres num volume, revalida os outros — o guião do solver
  está no histórico.

Nada aqui está alinhado com os eixos: o lote é oblíquo, por isso o deck, a
piscina, o bar, as espreguiçadeiras e o relvado levam todos a rotação da
implantação. Esquecer isso foi um erro já cometido.

## Os modelos: o 1 leva o projeto, os 2 a 5 são a base

`maquete.html?base=1` abre a mesma cena **sem o projeto** — só o terreno, as
estradas, o casario, o hípico, o estádio, as parcelas e as árvores. É o que
os Modelos 2 a 5 abrem (`MODELO_BASE` no `index.html`), a pedido do
utilizador: "não quero o hotel nos outros modelos". Nesse modo as vistas do
projeto são filtradas (`v.projeto`) e ficam quatro: aérea, larga, envolvente
e estádio.

## O Modelo 1 é a cena 3D

`maquete.html` a ecrã inteiro, aberto **dentro da vista do Modelo 1, num
iframe**, e daí pelo botão "Abrir em ecrã inteiro". Houve uma entrada de menu
`07 · Maquete 3D navegável` a apontar para a mesma cena: o utilizador mandou
apagá-la, por ser rota a dobrar, e a seguir mandou a entrada dos Modelos
ocupar o 07 que vagou. **O menu é 01 a 07, e os Modelos são o 07.** Em
conversas anteriores a esta mudança os Modelos eram a "aba 10" — se o
utilizador lhe chamar isso, é desta que fala. Havia aqui uma segunda maquete
construída por código dentro do `index.html`: foi removida. Duas cenas com a
mesma implantação divergem sempre, e só uma tinha o terreno real. Com ela
foi-se a animação de "crescer ao abrir" — se o utilizador der pela falta,
passa-se para a cena nova em vez de ressuscitar a antiga.

A cena tem: órbita e modo a pé (WASD, shift, manche no telemóvel, colisão
contra os volumes), sete vistas nas teclas 1 a 7, dia/noite no N.

**As vistas ao nível do solo saem da implantação, não de coordenadas escritas
à mão** (`PONTOS.piscina_de`, `hotel_de`, `moradias_de`, `entrada_de`), e
passam por `desimpedir()`, que afasta a câmara de troncos e de paredes. Já se
partiram duas vezes por estarem fixas: quando os volumes mudam de sítio, as
vistas fixas ficam dentro de um edifício.

**Como está feita:** o chão é a fotografia num plano; tudo o que se repete —
edifícios vizinhos, árvores, palmeiras, espreguiçadeiras, candeeiros — passa
por `instanciar()`, que é `InstancedMesh`. Os materiais que acendem de noite
estão em `EMISSIVOS`, os objetos só-de-noite em `LUZES_NOITE`.

Armadilhas já apanhadas, para não voltarem:

- `ShapeGeometry` deitada com `rotateX(+90°)` fica com as normais para baixo
  e **não se desenha**. Por isso `chapa()` passa o z trocado de sinal e roda
  −90°.
- Pintar as estradas na textura do chão **e** desenhá-las em 3D dava bandas
  ao dobro da largura e desfocadas. Agora só existem na fotografia.
- A deteção de copas apanha relvado sintético e telhados escuros: o campo de
  futebol ficou com um bosque em cima. O filtro está no guião de extração.

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
8. `#modelos` — 5 estudos volumétricos (menu: `07 · Modelos`, antes `10`);
   o Modelo 1 abre a maquete 3D
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

## Maquete do Modelo 1 — onde está agora

Está em `maquete.html` e na secção **"O Modelo 1 é a cena 3D"** acima. O que
havia aqui descrevia a maquete construída dentro do `index.html`, que foi
removida. Permanece válido do que aí estava:

- **Biblioteca:** `vendor/three.min.js` (three r160, build UMD), servida do
  próprio repositório — o site continua sem depender de CDNs. Não trocar por
  um CDN sem pedir.
- **Nada de WebGL no carregamento do `index.html`.** A cena só arranca quando
  o Modelo 1 é aberto (o iframe só recebe `src` nessa altura) e o `src` é
  retirado ao fechar, para libertar o contexto.
- Sem WebGL, a cena mostra um aviso e o Modelo 1 fica só com o render.
- `images/modelos/modelo1.png` é a **implantação de referência**, mostrada
  mais pequena por baixo. É a Imagem 2 do pedido: o conceito do hotel saiu
  dela e não deve ser alterado sem o utilizador pedir.

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
  No `#modelos` cada estudo ficou com uma linha. Menu com 6 entradas (01 a 06)
  mais `07 · Modelos` (que já foi `10`). As outras entradas `07` que
  existiram — primeiro as contas, depois a maquete — foram ambas removidas a
  pedido do utilizador.
- **`three.js` só a pedido** — `carregarThree()` injeta o script quando o
  Modelo 1 abre. Não há pedido nenhum no arranque da página.
- **Maquete mais realista** — MeshStandardMaterial com rugosidade, sol mais
  forte com sombras 2048 e luz de preenchimento, tone mapping ACES.
- **Maquete alinhada com `modelo1.png`** — piscina/deck/bar movidos para
  norte (z=-38), entre apartamentos e moradias; pomar plantado só numa faixa
  a 14–36 m do limite (`aoBordo()`), deixando o centro aberto como no render.
- **`precos.html`** — página à parte, `noindex`, **com entrada no menu
  (`07 · As contas`)**. O utilizador decidiu expor as contas; por isso a página
  foi reescrita para aguentar ser lida por terceiros. Quatro secções: o que
  custa pôr de pé, o que se cobra, a sensibilidade, e de onde vem cada número.
  Mostra "área bruta por quarto" com veredito (apertado / coerente / sobra área)
  para denunciar programas incoerentes.
- **Valores de partida do `precos.html` deixaram de ser marcadores** — são
  referências publicadas, com a fonte escrita por baixo de cada campo e a lista
  numerada no fim da página. Ver `COMO-OBTER-OS-NUMEROS.md`. **Continuam a não
  ser o orçamento do projeto** — o aviso do topo diz isso, e o rodapé passou de
  "documento interno · não publicar" para "ordem de grandeza · não é orçamento".
- **Secção "O que mais mexe na conta"** — sensibilidade um-campo-de-cada-vez
  sobre nove campos, ordenada por amplitude, com barras divergentes à volta do
  caso atual, rótulo direto em cada extremo, dica no hover e vista em tabela.
  A palete (`--pior:#A8762B` / `--melhor:#00789C` sobre o fundo areia) foi
  escolhida por passar os testes de daltonismo e contraste — a dupla original
  gold/olive falhava. **Não trocar por cores do site sem revalidar.**
- **Alturas dos cortes em metros** — cada piso de `CORTES` tem `m` (pé-direito)
  e cada modelo tem `platibanda`. A escala é `PXM = 15` px/m e o limite dos 12 m
  é `SOLO - 12*PXM`. As alturas são **proposta minha, por confirmar com o
  arquiteto** (tabela em `COMO-OBTER-OS-NUMEROS.md`, ponto 6): 11,4 / 11,6 /
  7,8 / 11,9 / 11,6 m. O Modelo 4 fica a 10 cm do limite — é o primeiro a rever.
- **`COMO-OBTER-OS-NUMEROS.md`** — guia dos nove pontos que faltam, com o texto
  do pedido de orçamento já escrito, as perguntas para o Gabinete de Ordenamento
  do Território e para o arquiteto, os passos do KML e a lista de fotos.

**Por fazer, e porquê:**
- **Números reais para o `precos.html`.** Os de partida já têm fonte publicada,
  mas continuam a não ser do projeto. Faltam, por ordem de impacto na conta:
  a regra de estacionamento do PDM (decide os m² de cave), o orçamento do
  construtor (€/m²), o valor do terreno (escritura ou caderneta), e tarifa e
  ocupação recolhidas dos comparáveis. **Não inventar** — ver
  `COMO-OBTER-OS-NUMEROS.md`, que diz de onde vem cada um e a quem se pede.
- **Confirmação do arquiteto às alturas dos Modelos 2 a 5.** Já estão propostas
  e desenhadas; falta validar. A pergunta que mais importa é **de que cota se
  mede a altura de fachada** — o lote varia entre 225 e 233 m, e a resposta
  pode valer um piso inteiro.
- **Altura dos volumes da envolvente.** As posições e as formas em planta são
  reais; as alturas são estimadas pela área de implantação. Fotos ao nível do
  solo (mesmo de telemóvel) chegam para as corrigir.
- **Relevo do lote.** Os 9 m de desnível continuam por modelar — é a maior
  simplificação que sobra na cena. Resolve-se com os contornos de elevação do
  Google Earth (ponto 3 do guia abaixo).
- **Fotos reais do terreno** — o site não tem uma única. Servem para o hero,
  não para o 3D.
- **Pormenor fino da maquete** (janelas individuais, varandas, caminhos,
  estacionamento, espreguiçadeiras). O teto sem `.glb` de arquiteto mantém-se.
- **A envolvente já não espera por nada.** Saiu da fotografia aérea. O que
  falta é altura e relevo, acima.

## Como tornar o terreno realista (guia para o utilizador)

> Sobrepõe-se em parte ao `COMO-OBTER-OS-NUMEROS.md`, que é a lista de ações
> para o utilizador (nove pontos, com os pedidos já escritos). Este guia é o
> lado do 3D; esse é o lado dos números e do processo. **Se mexeres num,
> confere o outro** — os pontos do KML, do print da envolvente e das fotos
> vivem nos dois.

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

2. **KML/KMZ do lote — continua a valer, por outra razão.** O polígono já
   não é traçado à mão: foi extraído da imagem que o utilizador mediu e dá
   16.288 m². Mas o site escreve 17.500 m². O KML resolve qual é o bom, e
   traz a forma com rigor de coordenadas em vez de rigor de pixel.

3. **Contornos de elevação.** O terreno **não é plano** — 225,18 m no ponto
   mais baixo, 233,41 no mais alto, 8 m de diferença. A maquete modela-o
   plano, o que é uma simplificação visível. O painel de medição do Google
   Earth tem o botão **"Gerar contornos para este local"**: com esses
   contornos dá para modelar o relevo real e ver onde é preciso escavar ou
   aterrar. Isto também interessa ao custo de construção.

4. **Print mais afastado — FEITO, e é o que sustenta a cena.** A fotografia
   de 16/10/2025 apanha o complexo desportivo, o centro hípico, os armazéns
   e as parcelas, e é dela que sai toda a envolvente. Cobre cerca de
   830 × 560 m. Um enquadramento ainda mais largo alargaria a cena; não é
   urgente.

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
novos: o **#8** atualiza-se sozinho a cada push.

## Fluxo de trabalho

- Commits diretamente para `claude/zen-curie-lr4ixr`, depois `git push`.
  O PR #8 atualiza-se sozinho a cada push.
- Antes de dar como concluída qualquer alteração visual, testar com
  Playwright headless (`/opt/pw-browsers/chromium`, `NODE_PATH=/opt/node22/lib/node_modules`)
  e tirar screenshot — o Google Fonts falha no sandbox por bloqueio de rede e
  isso não é regressão do código.
- O renderizador de software do sandbox anda a ~3 fps: as transições de
  câmara, que demoram 1,25 s num ecrã normal, levam lá perto de 10 s. Dar
  tempo nos testes antes de concluir que uma vista está errada.
- **Screenshot do `index.html` com o Modelo 1 aberto precisa de timeout
  generoso** (o iframe com WebGL não estabiliza depressa): passar
  `timeout` alto e `animations:'disabled'`.
