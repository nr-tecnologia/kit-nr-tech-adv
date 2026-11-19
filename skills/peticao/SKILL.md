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
  "prepara o recurso de Z", "rascunha a peça sobre X". Para o fluxo completo
  até o protocolo (prazo, leitura dos autos e auditoria), use protocolo.
---

# Petição — Gerador de Peças Jurídicas

Monta a peça e cuida do formato. Para o fluxo completo até o protocolo, use a skill `protocolo`.

---

## Leitura obrigatória antes de escrever

1. `references/design-system.md` — **fonte da verdade visual**, com todos os
   valores em DXA. Não improvisar medidas.
2. `references/protocolo-verificacao.md` — leitura dos autos, pesquisa de jurisprudência, citações.
3. `references/estruturas-juridicas.md` — endereçamentos e esqueletos por área.
4. Skill `anti-alucinacao`.
5. Se houver `ALMA-*/ALMA.md`, `VOZ.md` e `MEMORIA.md` na pasta (skill `alma-juridica`),
   ler e seguir a voz do advogado. Em conflito, `MEMORIA.md` prevalece.

---

## Fluxo

```
ler autos (INTEIROS, inclusive últimas páginas)
   ↓
pesquisa de jurisprudência: conector (ex.: TribuJus), se houver; senão, fontes oficiais
   ↓
RESUMO ANALÍTICO: teses, riscos e, se houver jurimetria, taxa histórica do recorte
   ↓
aguardar aprovação          ← nunca redigir antes disso
   ↓
montar o .docx (biblioteca docx)  →  PDF  →  conferir página a página
   ↓
entregar + listar julgados para conferência + apontar o que ficou de fora
```

**Análise antes da peça é regra, não formalidade.** Se houver conector de
jurimetria (ex.: TribuJus), informar a taxa histórica do recorte com a amostra e
os avisos que o sistema devolver, nunca como probabilidade do caso concreto. Sem
conector, pesquisar nas fontes oficiais dos tribunais e não apresentar
percentual de êxito.

---

## Montagem

O Claude escreve, na pasta do caso, um `gerar.js` com a biblioteca `docx` do
npm (`npm i docx`) e monta a peça seguindo **exatamente** os valores de
`references/design-system.md` (página, fontes, cores, espaçamentos, header,
footer e cada componente). Dados do escritório vêm do `escritorio.json`.
Não improvisar medidas: tudo que não estiver no design system fica de fora.

### Componentes disponíveis

Implementar como funções no `gerar.js`, uma por componente do design system:

| Componente | Uso | Notas |
|---|---|---|
| endereçamento | Juízo/Tribunal destinatário | |
| referência | Linha de referência processual | caixa alta |
| título / subtítulo | Nome da peça / objeto | |
| caixa-resumo | Abertura com 2 ou 3 colunas | A CONTROVÉRSIA · A TESE · O PEDIDO |
| tópico / subtópico | `1 —` / `1.1 —` | justificados, entrelinha 1,5 |
| parágrafo | Corpo justificado | recuo de primeira linha |
| item | `a)` `b)` ou `(i)` `(ii)` | |
| callout | Destaque com barra navy | no máximo um por tópico |
| cronologia | Linha do tempo | data, evento, glosa, destaque |
| caixa de jurisprudência | Julgado conferido | sigla, tese, itens, referência |
| barras | Comparação visual de valores | com nota de fonte |
| cards de KPI | Números divergentes nos autos | |
| fecho e assinaturas | Cidade/data e advogados do escritorio.json | manter juntos na mesma página |

### Alinhamento

Justificar bloco curto estica as palavras e denuncia acabamento ruim. Abaixo de
~150 caracteres (caixa-resumo), ~400 (callout) e ~90 (jurisprudência), alinhar
à esquerda.

### Acabamento

- Logo: `ImageRun` com `type: "png"` (ou `"jpg"`), senão a imagem sai quebrada.
- Metadados: `creator` e `lastModifiedBy` com o `nome` do escritorio.json.
- Converter para PDF (`soffice --headless --convert-to pdf peca.docx`) e
  conferir **todas** as páginas: quebras, tabelas mal alinhadas, texto
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
19. Espaçamento antes e depois de todo elemento gráfico.
20. Cronologia rende quando há um marco ausente ou uma distância temporal que
    fala por si. Cards de KPI rendem quando a mesma grandeza aparece com
    valores divergentes nos autos.

---

## Dados do escritório (escritorio.json)

Na primeira peça, perguntar os dados ao advogado e salvar `escritorio.json` na
pasta do caso. Modelo em
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
A função de assinatura do `gerar.js` percorre `advogados` do escritorio.json
e assina todos; para peça individual, usar só o advogado indicado.
