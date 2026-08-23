# O Terreno — Projeto Hoteleiro

Contexto do projeto para sessões futuras do Claude. **Este ficheiro é a única
memória que sobrevive entre sessões** — o que não estiver aqui perde-se.

## O que é

Site de página única (`index.html`) que apresenta um projeto hoteleiro num
terreno ainda por construir. Português de Portugal.

## Estrutura técnica

- **Um único ficheiro**: `index.html` (~22 KB). HTML, CSS e JS tudo inline.
  Sem build, sem dependências instaladas, sem package.json.
- **Dependências externas** (via CDN): Google Fonts (Fraunces, Inter,
  IBM Plex Mono) e Three.js r128.
- **Não existem imagens no site.** Zero `<img>`, zero `background-image`.
  Todo o visual é gradientes CSS e SVG inline.

## Secções da página

| Secção | id | Conteúdo |
|---|---|---|
| Hero | — | Título e estatísticas do terreno |
| Repartição do terreno | `#plot` | Mapa SVG + legenda de percentagens |
| Visita virtual 360º | `#tour` | Cena Three.js gerada, com zoom e hotspots |
| Conceito | `#concept` | 3 cartões: hotel, moradias, área livre |
| Rodapé | — | — |

## Repartição do terreno (números do projeto)

- **40%** — hotel de escala pequena (volume principal)
- **20%** — moradias de apoio
- **40%** — área livre: logradouro, acessos e zona verde

## Paleta

Definida em `:root` no topo do `<style>`:
`--sand #EFE8D8` · `--ink #1B2116` · `--olive #3F4A32` ·
`--gold #B08D3E` · `--gold-soft #D8BE84` · `--night #0E1720`

## Estado atual

A secção 360º usa uma **cena ilustrativa gerada em Three.js**, não o projeto
real. O próprio texto da página assume isso e diz que será substituída por
"renderizações 3D reais ou fotografias 360º do projeto final".

## Fotos do projeto

> **POR PREENCHER** — decisões a registar aqui:
> - De que são as fotos (maquete física? render 3D? o quê exatamente)
> - Onde entram no site (substituir o tour 360º? galeria nova? fundos?)
> - Como chegam ao repositório (upload para `assets/`? geradas?)

## Convenções

- Todo o texto visível ao utilizador em **português de Portugal**.
- Manter tudo num só ficheiro `index.html`, salvo indicação em contrário.
- Branch de desenvolvimento: `claude/fotos-primeiro-modelo-tu1auf`.
