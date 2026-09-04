# Como obter cada número que falta

Nove pontos. Cinco são números que entram no `precos.html`, dois são ficheiros
que entram no site, um é decisão de arquiteto e um já está decidido. Por ordem
de quanto mudam a conta — não por ordem de dificuldade.

A regra que atravessa tudo: **o que está no site a partir de agora tem fonte.**
Onde não houver fonte, fica em branco e diz que está em branco.

---

## 1. Valor do terreno

**Estado:** em branco no `precos.html`, de propósito.

Três caminhos, por ordem de qualidade:

1. **Foi comprado** → o valor da **escritura de compra e venda**. É o número
   certo. Se houve custos de aquisição (IMT, imposto de selo, notário,
   registo), soma-os: fazem parte do que o terreno custou.
2. **Veio por herança, permuta ou está na família há muito** → o **Valor
   Patrimonial Tributário (VPT)** da caderneta predial.
   - Portal das Finanças → *Serviços* → *Consultar* → *Património* → *Prédios*
   - Escolhe o artigo matricial do terreno e imprime a **caderneta predial**
   - O VPT costuma ficar **abaixo** do valor de mercado. Serve como piso.
3. **Queres o valor de mercado hoje** → **avaliação de perito avaliador**
   registado na CMVM. Custa umas centenas de euros e é o único número que um
   banco ou um investidor aceita.

**O que não serve:** médias de portais imobiliários. O distrito de Évora tem
médias publicadas na ordem dos 1.000 €/m², mas são de habitação construída, e
o teu lote é de 17.500 m² com classificação a mudar — a média não diz nada
sobre ele.

**Um aviso que vale dinheiro:** enquanto a classificação for *Equipamento*, o
terreno vale o que vale um terreno onde não se pode fazer hotel. Quando o PDM
novo publicar *Serviços e Turismo*, vale outra coisa. Se fores avaliar, avalia
**depois** — ou pede as duas leituras, que a diferença entre elas é
exatamente o valor do processo urbanístico que estás a conduzir.

---

## 2. Custo de construção €/m²

**Estado:** 1.600 €/m² no `precos.html`, que é média de mercado, não orçamento.

Não há atalho honesto: **sem desenho não há orçamento a sério.** O passo 3 do
roteiro (topografia + desenhos conceituais com arquiteto) tem de acontecer
primeiro. Com um estudo prévio na mão, pede a dois ou três construtores da
região e usa o do meio.

O que pedir, para as propostas serem comparáveis — copia e envia:

> Assunto: Pedido de estimativa de custo — unidade hoteleira em Montemor-o-Novo
>
> Bom dia,
>
> Estamos a preparar um projeto de unidade hoteleira em Montemor-o-Novo, num
> lote de 17.500 m², e precisamos de uma estimativa de custo de construção
> para avaliar a viabilidade antes de avançar para projeto de licenciamento.
>
> Junto envio o estudo prévio. Agradecia uma estimativa separada por:
>
> 1. Construção acima do solo, €/m² de área bruta, com acabamento de nível
>    hoteleiro corrente (não luxo)
> 2. Construção em subsolo, €/m², para estacionamento e áreas técnicas,
>    incluindo escavação e contenção periférica
> 3. Arranjos exteriores, €/m² de área não construída, incluindo via de
>    circulação e estacionamento à superfície
> 4. Piscina, valor global
>
> Agradecia também que indicassem o que a estimativa **não** inclui, e a que
> data de preços se refere.
>
> Com os melhores cumprimentos,

**Porque separado em quatro:** porque a cave é a linha mais cara por m² e a que
mais mexe na conta (ver o gráfico de sensibilidade no `precos.html`). Um valor
único "chave na mão" esconde exatamente aquilo que precisas de decidir.

**Referências para saberes se a proposta é séria:**

- Habitação corrente em Portugal, 2025: **950–1.500 €/m²**
- Hotelaria de 4★, investimento global ÷ área construída: **acima de 2.000 €/m²**
- Acrescer **20–30%** para projeto, licenças, taxas camarárias e imprevistos
- O valor médio de construção fixado para IMI em 2026 é **570 €/m²**
  (Portaria n.º 471/2025/1). **Isto é um valor fiscal, para calcular imposto —
  não é custo de obra.** Não deixes ninguém usá-lo como se fosse.

---

## 3. Metros quadrados de cave, e o custo por m²

**Estado:** derivado no `precos.html` a partir de 120 lugares × 30 m² + 700 m²
de áreas técnicas = 4.300 m². É a linha que mais dinheiro move na página.

O número não é uma escolha tua: **sai da regra de estacionamento do PDM.**
Quantos lugares por quarto o regulamento exige.

**A quem se pergunta:** ao Gabinete de Ordenamento do Território, na mesma
conversa em que já estás a pedir o aumento de índice e a tipologia mista. É
uma pergunta técnica e barata de responder.

**O que perguntar, exatamente:**

- Quantos lugares de estacionamento por quarto exige o regulamento para
  empreendimento turístico? E para as casas de apoio, se a tipologia mista
  passar?
- Esses lugares podem ser à superfície, ou têm de ser em cave?
- O estacionamento em cave conta para o índice de construção? *(Pela regra que
  já temos, o subsolo não conta — mas convém ficar escrito.)*

**Porque isto importa tanto:** 120 lugares em cave são cerca de 4,3 milhões de
euros. Os mesmos 120 lugares à superfície custam uma fração disso, mas ocupam
terreno que deixa de ser jardim. Põe o campo *Lugares em cave* a 0 no
`precos.html` e vê o que acontece à conta — é a decisão mais cara de toda a
página, e não é uma decisão de gosto, é o que o regulamento obrigar.

**Regra de dimensionamento:** 2,5 × 5 m por lugar, mais rampas e vias de
circulação, dá **28–32 m² por lugar** em cave. Mais 600–800 m² para central
térmica, AVAC, lavandaria e economato num hotel desta escala.

---

## 4. Número de quartos

**Estado:** 120 no `precos.html`, assumido.

Não é um número que se procure — é **decisão de programa**, tomada com o
arquiteto ao mesmo tempo que as áreas. Mas há duas balizas que o prendem:

**Baliza de cima — o que a área comporta.** O `precos.html` mostra a *área
bruta por quarto*. Abaixo de 40 m²/quarto o programa está apertado; acima de
90 m²/quarto sobra área que ninguém está a vender. 120 quartos em 8.400 m² dá
70 m²/quarto, que é folgado mas normal para um hotel com restaurante e spa.

**Baliza de baixo — o que o mercado absorve.** O envelope legal cheio (21.000 m²)
daria perto de **300 quartos**. Montemor-o-Novo tem cerca de 15 mil habitantes.
300 quartos é maior do que qualquer hotel do Alentejo interior, e o argumento
do hospital tem de aguentar esse peso todo sozinho. **Os 21.000 m² são um tecto
legal, não um programa** — e é importante que ninguém leia o site como se
fossem a mesma coisa.

Uma primeira fase de 100–140 quartos, com o terreno a permitir crescer depois,
é a leitura defensável. Mas é conversa a ter com o arquiteto, não comigo.

---

## 5. Tarifa média por noite e ocupação anual

**Estado:** 95 €/noite e 48% no `precos.html`, a partir de estatística regional.

**O caminho barato e quase tão bom quanto um estudo de mercado:** recolhe os
preços praticados pelos comparáveis, mês a mês, durante um ano. Basta uma
folha de cálculo e dez minutos por mês.

- **Quem:** os hotéis de Évora que servem o mesmo tipo de procura — o Ibis, que
  já é a tua referência de tipologia, mais dois ou três de escala parecida —
  e o que houver em Montemor.
- **O quê:** preço de um quarto duplo, para uma noite de terça-feira e uma
  noite de sábado, com 30 dias de antecedência.
- **Quando:** o mesmo dia de cada mês, doze meses seguidos. A sazonalidade é o
  problema central deste negócio; um mês só não diz nada.

**O caminho caro:** estudo de mercado encomendado. Vale a pena quando fores a
financiamento — um banco não aceita a tua folha de cálculo.

**As referências que já lá estão, e o que significam:**

| Indicador | Valor | Fonte |
|---|---|---|
| ADR do Alentejo, agosto 2025 | 174,8 € | INE, Estatísticas Rápidas |
| ADR nacional, novembro 2025 | 97,8 € | INE |
| ADR nacional, 3.º trim. 2025 | 151,3 € | INE |
| Ocupação-cama Alentejo, janeiro 2025 | 18,2% | INE |
| Ocupação-cama Alentejo, maio 2025 | 35,3% | INE |

Lê-se assim: **o Alentejo cobra caro e enche pouco.** Os 174,8 € de agosto
incluem o litoral e a Comporta, e são pico; janeiro a 18,2% é o mesmo destino
quatro meses depois.

**E é exatamente aí que está a tua tese.** A procura ligada ao novo hospital de
Évora é procura de semana e fora de época — precisamente onde o Alentejo é
fraco. Se o argumento for verdadeiro, não aparece a subir a tarifa: aparece a
**achatar a sazonalidade**. É isso que tens de conseguir mostrar em
quartos-noite, e é isso que justifica pôr a ocupação acima dos 48%.

---

## 6. Alturas e número de pisos dos Modelos 2 a 5

**Estado:** já propostos e desenhados. Falta o arquiteto confirmar.

Pus alturas explícitas em metros em cada corte, com pé-direito maior onde há
programa público e 3,2 m nos pisos de quartos, que é o corrente em hotelaria:

| Modelo | Pisos | Pé-direitos | Platibanda | Fachada | Folga nos 12 m |
|---|---|---|---|---|---|
| 1 · U-Resort centralizado | 3 | 4,0 + 3,2 + 3,2 | 1,0 | **11,4 m** | 0,6 m |
| 2 · Terraço linear | 3 | 4,2 + 3,2 + 3,2 | 1,0 | **11,6 m** | 0,4 m |
| 3 · Vila alentejana | 2 | 3,8 + 3,2 | 0,8 | **7,8 m** | 4,2 m |
| 4 · Edifício integrado | 3 | 4,5 + 3,2 + 3,2 | 1,0 | **11,9 m** | 0,1 m |
| 5 · Oásis de eventos | 2 volumes | 7,5 (pavilhão) + 3,2 | 0,9 | **11,6 m** | 0,4 m |

Nenhum esgota os 12 m. O Modelo 4 é o que fica mais à justa — 10 cm de folga
não sobrevive a uma laje mais espessa, e é o primeiro a rever.

**O que perguntar ao arquiteto:**

1. Os pé-direitos aguentam? 3,2 m livres em piso de quartos, com laje e tectos
   falsos para AVAC, é o mínimo — se não chegar, o Modelo 4 estoura os 12 m.
2. A altura de fachada mede-se de que cota, no regulamento? Terreno natural,
   soleira, ou cota média? O lote varia entre 225 e 233 m — **8 metros de
   diferença.** Num terreno inclinado, a resposta a esta pergunta pode valer
   um piso inteiro.
3. A platibanda conta para a altura de fachada? Assumi que sim, que é o mais
   conservador.
4. No Modelo 5, o pavilhão de pé-direito duplo e o corpo de quartos são dois
   volumes separados ou um só? O corte desenha-os empilhados, que é a leitura
   mais exigente.

A pergunta 2 é a mais importante das quatro e é a que ninguém costuma fazer
a tempo.

---

## 7. Print do Google Earth mais afastado, ou o KML

**Estado:** por dar. Sem isto não há envolvente na maquete 3D.

Tentei ir buscar a envolvente a fontes abertas de cartografia para te poupar o
trabalho — está bloqueado a partir do sítio onde corro. Tem mesmo de vir de ti.

**O KML é melhor do que o print,** e dá menos trabalho do que parece. O print
obriga-me a traçar tudo à mão por cima; o KML traz as coordenadas reais e a
envolvente fica no sítio certo, à escala certa, sem eu adivinhar nada.

**Como exportar o KML (Google Earth Pro, computador):**

1. Painel *Locais*, à esquerda → botão direito na pasta que tem o polígono do
   lote → **Guardar local como…**
2. Tipo de ficheiro: **KML** (não KMZ, que é o KML comprimido — os dois servem,
   o KML é texto e vejo-o logo)
3. Se traçares também a envolvente, mete tudo na mesma pasta antes de exportar

**O que gostava que estivesse traçado, além do lote:**

- Centro Hípico D. Duarte — a mancha dos edifícios e dos picadeiros
- O estádio e a pista de atletismo
- Os armazéns a poente
- As estradas que servem o terreno, com o nome se souberes

Não precisa de rigor: linhas à mão sobre a imagem chegam. Preciso de saber
**onde estão as coisas e que tamanho têm**, não do desenho exato.

**Se preferires o print:** enquadramento com **cerca de 1 km de lado**,
vista de cima a direito (não inclinada), com a régua de escala do Google
Earth visível no canto. E, se puderes, um segundo print com o lote no centro
e cerca de 300 m de lado, para eu conferir os limites.

---

## 8. Uma foto do terreno ao nível do solo

**Estado:** por dar. O site não tem uma única foto do sítio.

É a coisa de maior efeito na lista e a mais barata: é uma ida ao terreno com
o telemóvel. Neste momento quem abre o site vê diagramas e uma maquete — não
vê o lugar. Uma foto no hero muda isso mais do que qualquer coisa que eu
consiga desenhar.

**Lista de fotos, por ordem de utilidade:**

1. **A vista larga do lote**, tirada do lado nascente (do lado da estrada), com
   o terreno a estender-se para dentro. É esta que vai para o hero.
2. **A vista para fora**, de dentro do lote virado ao horizonte — é o que os
   hóspedes vão ver dos quartos, e é o argumento de venda.
3. **A entrada**, onde a estrada toca o terreno — mostra o acesso.
4. **Os postes** (média tensão e o de madeira das telecomunicações), porque a
   remoção deles está no site como compromisso e convém ver o que está lá.
5. **A envolvente** — o Centro Hípico e o complexo desportivo vistos do
   terreno, que é o argumento de que isto não está isolado.

**Condições:** ao fim da tarde, com o sol baixo e de lado — o Alentejo em luz
de meio-dia fica achatado e branco. Horizontal, não vertical. Sem filtros.
Sem pessoas.

**Uma que vale por cinco:** se conseguires uma panorâmica do lote inteiro
(modo panorama, a rodar devagar), dá para fazer o hero inteiro com ela.

---

## 9. O `precos.html` leva link a partir do site?

**Estado: decidido — sim, entrada no menu.** Está feito: entrada **07 · As
contas** no menu principal, e o `precos.html` tem o botão de voltar.

O que isso implica, para ficar escrito:

- **Quem abrir o site chega às contas.** A Câmara incluída. Quem partilhar o
  link do site está a partilhar as contas.
- A página continua fora dos motores de busca (`robots: noindex`), por isso não
  aparece em pesquisas — mas isso não é proteção nenhuma contra quem tem o link.
- Por isso reescrevi a página: os valores de partida deixaram de ser marcadores
  e passaram a ser **referências publicadas, com a fonte escrita por baixo de
  cada campo**, e o rodapé passou de *"documento interno · não publicar"* para
  *"ordem de grandeza · não é orçamento"*.

**Se mudares de ideias**, tira a linha do menu no `index.html` — a que tem
`href="precos.html"` — e a página volta a só ser alcançável por quem souber
o endereço.

---

## Por onde começar

Se só fizeres três coisas desta lista, faz estas, por esta ordem:

1. **A pergunta do estacionamento** (ponto 3) — é grátis, já tens a conversa
   aberta com o Gabinete de Ordenamento do Território, e é o que mais mexe na
   conta toda.
2. **A foto do terreno** (ponto 8) — é uma tarde, e é o que mais muda o site.
3. **A pergunta 2 do ponto 6** — de que cota se mede a altura de fachada. É
   grátis, e num terreno com 8 m de desnível pode valer um piso inteiro.

As outras seis dependem de terceiros: do arquiteto, do construtor, ou de doze
meses a recolher preços.
