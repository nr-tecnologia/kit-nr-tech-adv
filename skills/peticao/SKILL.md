---
name: peticao
description: >
  Gerador de petições jurídicas em .docx no padrão visual do Kit NR Tech Adv
  (Palatino Linotype, paleta navy/teal/sépia/bege, header com logo ou nome do
  escritório, footer, caixa-resumo, callouts, cronologias, barras comparativas,
  cards de KPI e caixas de jurisprudência). Os dados do escritório vêm de um
  escritorio.json na pasta do caso. Cobre criminal, cível, ambiental, tributário,
  trabalhista, previdenciário e federal. Use quando pedir petição, inicial,
  contestação, recurso, memorial, alegações finais, contrarrazões, HC, MS, defesa
  ou parecer: "faz uma inicial de X", "monta a contestação do caso Y",
  "prepara o recurso de Z", "rascunha a peça sobre X".
---

# Petição — Gerador de Peças Jurídicas

Padrão visual testado em peças reais. Kit NR Tech Adv · NR Tecnologia · Roney Ribeiro.

---

## Leitura obrigatória antes de escrever

1. `references/design-system.md` — **fonte da verdade visual**, com todos os
   valores em DXA. Não improvisar medidas.
2. `references/protocolo-verificacao.md` — leitura dos autos, TribuJus, citações.
3. `references/estruturas-juridicas.md` — endereçamentos e esqueletos por área.
4. Skill `anti-alucinacao`.

---

## Fluxo

```
ler autos (INTEIROS, inclusive últimas páginas)
   ↓
TribuJus (se conectado): tribunal do caso + TRF/TRT da região + STJ  →  jurimetria
   ↓
RESUMO ANALÍTICO com probabilidade de êxito e derrota
   ↓
aguardar aprovação          ← nunca redigir antes disso
   ↓
montar com peca.js  →  fix_docx.py  →  PDF  →  conferir página a página
   ↓
entregar + listar julgados para conferência + apontar o que ficou de fora
```

**Análise antes da peça é regra, não formalidade.** Entregar
estimativa de êxito calculada a partir de dados reais do TribuJus, com os avisos
que o próprio sistema devolver.

---

## Montagem

```js
const NR = require("<pasta-desta-skill>/scripts/peca.js");   // lê ./escritorio.json
const b = [];

b.push(NR.enderecamento("AO JUÍZO DA ..."));
b.push(NR.ref("Autos n.º ... — Classe"));       // sai em CAIXA ALTA
b.push(NR.titulo("NOME DA PEÇA"));
b.push(NR.subtitulo("objeto — parte"));
b.push(NR.gap());
b.push(NR.resumo([
  { label: "A CONTROVÉRSIA", texto: "..." },
  { label: "A TESE",         texto: "..." },
  { label: "O PEDIDO",       texto: "..." },
]));
b.push(NR.gap());

b.push(NR.topico("1 — TÍTULO DESCRITIVO DO TÓPICO"));
b.push(NR.p("Texto com **negrito** e *itálico* inline."));
b.push(NR.gap());
b.push(NR.callout("RÓTULO", "parágrafo 1", "parágrafo 2"));
b.push(NR.gap());

b.push(NR.sub("2.1 — Subtópico"));
b.push(NR.cronologia([{ data: "01/06/2023", evento: "...", glosa: "...", destaque: true }]));
b.push(NR.julgado({ sigla: "TJ-XX", tese: "...", itens: ["..."], referencia: "(...)" }));
b.push(...NR.barras([{ label: "...", valor: 26.07, exibicao: "26,074 m³", destaque: true }], "Fonte: ..."));
b.push(NR.kpi([{ label: "...", valor: "...", destaque: true, grande: true }]));

b.push(NR.topico("N — DOS PEDIDOS"));
b.push(NR.p("Diante do exposto, requer:", { noIndent: true }));
b.push(NR.item("a)", "..."));

b.push(...NR.fecho());
b.push(...NR.assinaturas());   // advogados do escritorio.json

NR.build(b, { title: "...", description: "...", out: "peca.docx" });
```

### API

| Função | Uso | Notas |
|---|---|---|
| `enderecamento(t)` | Juízo/Tribunal destinatário | |
| `ref(t, {caps})` | Linha de referência processual | caixa alta por padrão; `{caps:false}` desliga |
| `titulo(t)` / `subtitulo(t)` | Nome da peça / objeto | |
| `resumo([{label,texto}])` | Caixa-resumo de abertura | 2 ou 3 colunas |
| `topico(t)` / `sub(t)` | `1 —` / `1.1 —` | justificados, entrelinha 1,5 |
| `p(t, {noIndent})` | Corpo justificado | |
| `item(marca, t)` | `a)` `b)` ou `(i)` `(ii)` | |
| `callout(label, ...ps, {alignment})` | Destaque com barra navy | alinhamento automático |
| `cronologia([...])` | Linha do tempo | `{data, evento, glosa, destaque}` |
| `julgado({...})` | Caixa de jurisprudência | `{sigla, tese, itens, referencia}` |
| `barras([...], fonte)` | Comparação visual | retorna **array** |
| `kpi([...])` | Cards numéricos | `{label, valor, destaque, grande}` |
| `fonte(t)` | Nota de fonte solta | |
| `gap()` | Espaçador antes/depois de gráfico | |
| `fecho()` / `assinaturas()` | Retornam **array** | `keepNext` já aplicado |

### Alinhamento automático

`autoAlign` decide justificado × esquerda por contagem de caracteres — justificar
bloco curto estica as palavras e denuncia acabamento ruim. Limiares calibrados:
`resumo` 150 · `callout` 400 · `julgado` 90. Para forçar, passar
`{alignment: AlignmentType.LEFT}` ao `callout`.

---

## Pós-processamento — obrigatório

```bash
npm ls -g docx >/dev/null || npm i -g docx   # dependência única
node gerar.js
python3 <pasta-desta-skill>/scripts/fix_docx.py peca.docx
soffice --headless --convert-to pdf peca.docx
pdftoppm -jpeg -r 110 peca.pdf p          # conferir TODAS as páginas
```

`fix_docx.py` corrige o bug `.undefined` das imagens e grava os metadados do
escritório (nome do escritorio.json). **Sem ele o logo pode não aparecer.**

Conferir no PDF, página a página: quebras, tabelas mal alinhadas, texto
encostado em filete, assinatura órfã, rótulo quebrando em duas linhas.

---

## Regras de redação

**Estrutura**

1. Numeração **arábica** com travessão: `1 —`, `3.1 —`.
2. Títulos **descritivos**, não genéricos. `2 — DA IDENTIFICAÇÃO DAS ESPÉCIES`,
   não `2 — DO MÉRITO`.
3. **Sem ementas-síntese** abaixo dos títulos. A caixa-resumo de abertura é a
   única síntese admitida.
4. **Tese mais forte primeiro**, mais frágil por último, com concessão honesta
   antes do ataque. Preliminares antes do mérito; teses subsidiárias depois,
   e nessa ordem — uma tese subsidiária de alto rendimento não sobe para antes
   das teses de absolvição, porque pressupõe o que elas negam.
5. Cada argumento parte do **documento concreto**: "no ID X, p. Y...".
6. Antecipar a objeção previsível do adversário e enfrentá-la no próprio texto.

**Linguagem**

7. Fórmulas proibidas: "cumpre trazer à baila", "noutro norte", "forçoso
   concluir", "repiso", "é medida de rigor" ao fim de seção, "jurisprudência
   pacífica", "todo e qualquer", "por sua própria natureza", "dito isso" em
   excesso.
8. Prudência técnica no lugar de certeza fabricada: "caso com configuração
   semelhante", "somente poderá ser valorada se...", "na ausência de
   demonstração a partir do ID X".
9. Sem palavras estrangeiras, salvo brocardos consagrados (*habeas corpus*,
   *in dubio pro reo*, *ex officio*, *caput*, *sub judice*, *bis in idem*).
10. Nunca nomear juízes no corpo argumentativo — "o Juízo", "o Tribunal", "o
    Relator", "o Colegiado". Exceção: referência de julgado citado.

**Técnica**

11. Máximo **2 precedentes por tópico**, com análise. Tribunal local em discurso
    indireto, sem aspas, salvo conferência literal no PJe.
12. Sempre "regime **inicialmente** aberto/fechado".
13. Nunca pedir custas contra o Ministério Público em ação penal pública.
14. Em contrarrazões, pedir "**desprovimento** do capítulo recursal referente
    a X", não "indeferimento".
15. Qualificação enxuta: "já qualificado nos autos".
16. Fecho: "Nestes termos, / pede deferimento." (minúsculas na segunda linha).

**Elementos gráficos**

17. Servem a **dados e jurisprudência** — nunca a argumento em prosa.
18. Um callout por tópico, no máximo. Nunca dois gráficos seguidos.
19. `gap()` antes e depois de todo elemento gráfico.
20. Cronologia rende quando há um marco ausente ou uma distância temporal que
    fala por si. Cards de KPI rendem quando a mesma grandeza aparece com
    valores divergentes nos autos.

---

## Dados do escritório (escritorio.json)

Na primeira peça, perguntar os dados ao advogado e salvar `escritorio.json` na
pasta do caso (ou apontar `NR_ESCRITORIO` para um arquivo fixo). Modelo em
`escritorio.exemplo.json`:

```json
{
  "nome": "Escritório Modelo Advocacia",
  "cidade": "Cidade/UF",
  "advogados": [["Nome do Advogado", "OAB/UF 00.000"]],
  "endereco": "Rua Exemplo, 100 • Centro • Cidade – UF • CEP 00.000-000",
  "contatos": "(00) 0 0000-0000 • contato@exemplo.adv.br",
  "logo": "logo.png"
}
```

Sem `logo`, o header sai com o nome do escritório em caixa alta. Sem arquivo,
a peça sai com os dados fictícios do exemplo: **nunca protocolar assim**.
`NR.assinaturas()` assina todos os advogados da lista; `NR.assinatura(nome, oab, true)`
para peça individual.
