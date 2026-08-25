#!/usr/bin/env node
/**
 * Gera os renders dos estudos volumétricos (#modelos) com a Gemini API.
 *
 *   GEMINI_API_KEY=... node scripts/gerar-modelos.mjs 2 3 4 5
 *
 * Usa o modelo 1 como referência visual: mesma vista aérea, mesmo terreno,
 * mesma luz. Só muda a implantação. Sem argumentos, gera 2 a 5.
 * As imagens saem para images/modelos/modeloN.png.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const REFERENCIA = join(RAIZ, 'images/modelos/modelo1.png');
const MODELO_API = process.env.GEMINI_IMAGE_MODEL || 'gemini-3.1-flash-image';

const ESTILO = `Vista aérea vertical (nadir), fotorrealista, do mesmo terreno da imagem
de referência, com o mesmo enquadramento, a mesma orientação e a mesma luz de fim de
tarde. Mantém intacta toda a envolvente — as estradas, os terrenos vizinhos em terra
batida vermelha, as construções à volta. Altera apenas o que está construído dentro do
lote. Arquitetura alentejana contemporânea: volumes brancos de cobertura plana, painéis
fotovoltaicos nas coberturas, iluminação quente acesa ao anoitecer. Sem texto, sem
legendas, sem marcas de água.`;

const MODELOS = {
  '2': `Terraço Linear com cascata. O hotel desenvolve-se em linha ao longo da fronteira
    norte do lote, um volume longo e estreito de três pisos. A sul dele, uma piscina de
    borda infinita assente numa plataforma sobreelevada, com a água a cair em cascata
    sobre a zona verde mais abaixo. Na metade sul, dez casas dispostas em banda curva,
    acompanhando uma linha suave. Um pomar denso fecha o limite sul como barreira verde.`,

  '3': `Vila Alentejana desconstruída. Sem edifício único: quatro edifícios baixos de um
    piso, espalhados e afastados entre si, implantados no meio de um pomar de oliveiras
    que ocupa grande parte do lote. Ao centro, uma piscina de formato orgânico, estilo
    lagoa natural de contorno irregular, com uma pequena ilha ao meio e um bar de madeira
    na margem. Dez casas agrupadas em três núcleos distintos, com pátios de pedra entre
    elas.`,

  '4': `Edifício Integrado de uso misto. Um único hotel compacto de três pisos ocupa toda
    a metade poente do lote. A nascente, uma linha contínua e regular de dez casas
    geminadas, perfeitamente paralela ao hotel. Entre os dois, um corredor verde largo e
    aberto, com árvores alinhadas, a separar claramente a zona residencial da zona do
    hotel. A piscina fica encostada ao hotel.`,

  '5': `Oásis de Eventos. A sul, um pavilhão de eventos e restaurante de planta larga, com
    caixilharia de vidro dobrável totalmente aberta sobre um grande relvado retangular de
    cerimónias. Ao lado do relvado, a piscina, com um cocktail bar e iluminação noturna
    quente a marcar o contorno. A norte, afastados e resguardados, o hotel e as casas
    concentrados numa zona silenciosa, separados do relvado por uma faixa de pomar.`,
};

function chave() {
  const k = process.env.GEMINI_API_KEY;
  if (!k) {
    console.error('Falta GEMINI_API_KEY no ambiente.');
    process.exit(1);
  }
  return k;
}

async function gerar(n, referencia, key) {
  const prompt = `${ESTILO}\n\nImplantação a representar:\n${MODELOS[n].replace(/\s+/g, ' ')}`;

  const resposta = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELO_API}:generateContent`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{
          role: 'user',
          parts: [
            { text: prompt },
            { inline_data: { mime_type: 'image/png', data: referencia } },
          ],
        }],
        generationConfig: {
          responseModalities: ['IMAGE'],
          imageConfig: { aspectRatio: '1:1' },
        },
      }),
    },
  );

  if (!resposta.ok) {
    throw new Error(`HTTP ${resposta.status}: ${(await resposta.text()).slice(0, 600)}`);
  }

  const dados = await resposta.json();
  const partes = dados.candidates?.[0]?.content?.parts ?? [];
  const imagem = partes.find((p) => p.inlineData || p.inline_data);
  if (!imagem) {
    throw new Error(`Sem imagem na resposta: ${JSON.stringify(dados).slice(0, 600)}`);
  }

  const bytes = (imagem.inlineData ?? imagem.inline_data).data;
  const destino = join(RAIZ, `images/modelos/modelo${n}.png`);
  await writeFile(destino, Buffer.from(bytes, 'base64'));
  return destino;
}

const pedidos = process.argv.slice(2).length ? process.argv.slice(2) : ['2', '3', '4', '5'];
const key = chave();
const referencia = (await readFile(REFERENCIA)).toString('base64');

for (const n of pedidos) {
  if (!MODELOS[n]) {
    console.error(`Modelo ${n} não existe. Disponíveis: ${Object.keys(MODELOS).join(', ')}`);
    continue;
  }
  process.stdout.write(`Modelo ${n}... `);
  try {
    console.log(`ok → ${await gerar(n, referencia, key)}`);
  } catch (erro) {
    console.log(`falhou\n  ${erro.message}`);
  }
}
