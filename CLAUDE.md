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
  No `#modelos` cada estudo ficou com uma linha. Menu refeito com 6 entradas, mais `07 · As contas` a apontar ao `precos.html`.
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
- **Envolvente 3D** (Centro Hípico, estádio, pista, armazéns, estradas) —
  falta um print do Google Earth mais afastado, ou o KML.
- **Fotos reais do terreno** — o site não tem uma única. Servem para o hero,
  não para o 3D.
- **Pormenor fino da maquete** (janelas individuais, varandas, caminhos,
  estacionamento, espreguiçadeiras). O teto sem `.glb` de arquiteto mantém-se.
- **Envolvente do 3D continua à espera do KML.** Tentei ir buscá-la a
  cartografia aberta (Overpass/Nominatim) — está bloqueado pelo proxy de rede
  desta sessão. Tem mesmo de vir do utilizador.

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
