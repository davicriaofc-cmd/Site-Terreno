# O Terreno — Projeto Hoteleiro

Site one-page (`index.html`, autocontido — sem build, sem dependências locais)
para um projeto de hotel num terreno em Évora. Serve para documentar o
projeto e o processo urbanístico à medida que avança.

## Estado atual

- Branch de trabalho: `claude/mano-slfa79` → PR #2 em
  `davicriaofc-cmd/site-terreno` (ver com `git log`/`gh pr view 2` se precisares
  do estado mais recente).
- Todo o site vive num único `index.html`. Sem framework, sem npm — editar
  diretamente o ficheiro.

## Dados reais do projeto (não inventar/alterar sem confirmação do utilizador)

- **Área do terreno:** 17.500 m² (não é 1.700 — esse número apareceu numa
  versão inicial e estava errado).
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

1. Loader + menu hambúrguer (fixo, liga a todas as secções por âncora)
2. Hero com scroll-lock — 5 painéis (`#scrollTrack` / `.hero-panel`)
3. `#estado` — estado do processo urbanístico
4. `#plot` — índice de ocupação atual (40% hotel / 60% livre)
5. `#expansao` — cenário em avaliação (índice alargado + tipologia mista)
6. `#modelos` — 5 estudos volumétricos ilustrativos (hipotéticos, dependem
   da aprovação do cenário acima)
7. `#proximos-passos` — roteiro
8. `#evolucao` — evolução da construção (crossfade ligado ao scroll normal,
   6 fases: terreno ilustrativo, terreno limpo, 25%, 50%, 75%, 100%)
9. `#tour` — visita virtual 360º (Three.js, cena processual gerada em
   canvas — ainda não são fotos/renders reais)
10. `#concept` — parâmetros confirmados (subsolo, explanada/piscinas, postes)
11. `footer`

## Evolução da construção (`#evolucao`)

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

## Visita 360º — pronta para fotos reais

O array `scenes` no script do tour aceita um campo opcional `img` (caminho
para uma foto/render equirretangular 2:1). Se presente, carrega essa
textura via `THREE.TextureLoader` em vez de gerar a cena processual em
canvas. Basta acrescentar `img:'images/tour/nome.jpg'` a uma cena quando
houver material real — não é preciso mexer no resto do código.

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

## Fluxo de trabalho

- Commits diretamente para `claude/mano-slfa79`, depois `git push`. O PR #2
  atualiza-se sozinho a cada push.
- Antes de dar como concluída qualquer alteração visual, testar com
  Playwright headless (`/opt/pw-browsers/chromium`, `NODE_PATH=/opt/node22/lib/node_modules`)
  e tirar screenshot — CDNs externos (Google Fonts, cdnjs three.js) podem
  falhar no sandbox por bloqueio de rede; isso não é regressão do código.
