# Design System — Petição (Kit NR Tech Adv)

Todos os valores em DXA.
**Este arquivo é a fonte da verdade visual. Não improvisar.**

---

## 1. Página

| Parâmetro | Valor (DXA) |
|---|---|
| Tamanho | 11906 × 16838 (A4) |
| Margem superior | **1836** |
| Margem inferior | 1700 |
| Margem esquerda | 1701 |
| Margem direita | 1418 |
| Header | 450 |
| Footer | 500 |
| **Largura útil** | **8787** ← toda tabela usa este valor |

## 2. Tipografia

**Fonte única: `Palatino Linotype`** (ascii, eastAsia, hAnsi, cs).
Nunca Garamond, Arial, Times.

Tamanhos em half-points (`w:sz`):

| sz | pt | Uso |
|---|---|---|
| 14 | 7 | Micro-labels de caixa, rodapé, paginação |
| 16 | 8 | Referência de julgado, notas de fonte, glosa em cronologia |
| 18 | 9 | Texto de caixa-resumo, data de cronologia, linha de assinatura |
| 19 | 9,5 | Itens de ementa, evento de cronologia |
| 21 | 10,5 | Tese-síntese do julgado |
| 22 | 11 | Linhas de referência processual, texto de callout |
| 24 | 12 | **Corpo**, subtópico, subtítulo, endereçamento, nome na assinatura |
| 26 | 13 | Tópico de 1º nível, valor de KPI secundário |
| 28 | 14 | Título da peça |
| 30 | 15 | Valor de KPI principal |

## 3. Paleta

| Hex | Nome | Uso |
|---|---|---|
| `0E2841` | Navy | Endereçamento, título, subtópico, barra de callout, barra cheia de gráfico, nome do advogado |
| `0F4761` | Teal | Referências processuais, tópicos de 1º nível, micro-labels, OAB |
| `1A1A1A` | Corpo | Todo texto corrido |
| `5F5A53` | Sépia | Subtítulo, notas, glosas, referência de julgado, rodapé |
| `CFCBC4` | Bege claro | Filetes de header/footer, linha de assinatura, paginação |
| `E8E5E0` | Bege fill | Trilha das barras comparativas |

**Não existe dourado (`9E8A5E`) neste padrão.** Foi abandonado.

## 4. Componentes

### 4.1 Endereçamento
`sz 24 · bold · 0E2841 · tracking 20 · jc both · spacing{after:260, line:320}`
Sem caixa alta forçada — escrever já em maiúsculas.

### 4.2 Linhas de referência processual
`sz 22 · bold · 0F4761 · spacing{after:70, line:360}`
Uma linha por item: autos, classe, partes, IDs.

### 4.3 Título da peça
`sz 28 · bold · 0E2841 · tracking 60 · center · spacing{before:400, after:240}`
**Sem bordas, sem filetes, sem caixa.**

### 4.4 Subtítulo
`sz 24 · itálico · 5F5A53 · center · spacing{after:120}`
Descreve o objeto: "Liberação de sequestro de imóveis — [nome da parte]".

### 4.5 Caixa-resumo (3 colunas) — abre a peça
Tabela externa 8787 (invisível, tcMar 0) → tabela interna
`gridCol: 2743 | 280 | 2742 | 280 | 2742` (as de 280 são espaçadoras vazias).
`trPr: cantSplit`

- Label: `sz 14 · bold · 0F4761 · tracking 60 · spacing{before:130, after:90, line:260} · keepLines`
- Texto: `sz 18 · 1A1A1A · spacing{after:150, line:260} · keepLines`

Rótulos usados: `A CONTROVÉRSIA` / `A TESE` / `O PEDIDO`.

### 4.6 Tópico de 1º nível
`sz 26 · bold · 0F4761 · tracking 40 · keepNext · keepLines · spacing{before:380, after:180}`
**Numeração arábica com travessão:** `1 — DO OBJETO E DA URGÊNCIA`.
**Sem bordas.**

### 4.7 Subtópico
`sz 24 · bold · 0E2841 · keepNext · keepLines · spacing{before:260, after:140}`
**Sem tracking.** Numeração decimal: `3.1 — Imóveis adquiridos antes dos supostos fatos`.
Caixa e baixa (não é caixa alta).

### 4.8 Corpo
`sz 24 · 1A1A1A · jc both · ind{firstLine:851} · spacing{before:100, after:100, line:360}`

### 4.9 Callout (caixa de destaque com barra lateral)
Tabela externa 8787 → interna `gridCol: 560 | 8227`.
Coluna 1 vazia (recuo). Coluna 2:
`tcBorders{left: single, sz 6, color 0E2841}` · `tcMar{top:60, left:300, bottom:60, right:0}`

- Label: `sz 14 · 0E2841 · tracking 120 · spacing{before:40, after:90, line:260}` (não bold)
- Texto: `sz 22 · 0E2841 · jc both · spacing{after:40, line:300}`

Rótulos: `PEDIDO LIMINAR`, `CONSEQUÊNCIA DIRETA`, `PEDIDO`.

### 4.10 Cronologia
Tabela externa 8787 → interna `gridCol: 2150 | 6637`. `trPr: cantSplit`

Coluna 1 (data): `jc right` · `tcBorders{right: single, sz 4, color 0E2841}` ·
`tcMar{top:130, bottom:130, right:240}` · run `sz 18 · bold · 5F5A53`
Coluna 2 (evento): `tcMar{top:130, left:240, bottom:130}` ·
run principal `sz 19 · 1A1A1A` + glosa `sz 16 · 5F5A53` (ex.: "(16 anos antes)")

A linha final pode ter o evento em **bold navy** para marcar o marco temporal.

### 4.11 Caixa de jurisprudência
Tabela externa 8787 → interna `gridCol: 700 | 8087`. Coluna 1 vazia. **Sem bordas.**

- Sigla do tribunal: `sz 14 · bold · 0F4761 · tracking 120 · ind{left:146} · spacing{before:120, after:80, line:260}`
- Tese-síntese: `sz 21 · 0E2841 · jc both · ind{left:146, right:120} · spacing{after:150, line:280}`
- Itens numerados: `sz 19 · ind{left:146, right:120} · spacing{after:120, line:260}`, alternando
  `5F5A53` (texto) e `1A1A1A + bold` (trecho destacado)
- Referência: `sz 16 · itálico · 5F5A53 · jc both · ind{left:146, right:120} · spacing{before:40, after:130, line:260}`

### 4.12 Barra comparativa
Tabela externa 8787 → interna `gridCol: 2500 | 3900 | 2387`, `trHeight 200`, `vAlign center`.
- Col 1 (label): `sz 18 · 5F5A53` · `tcMar{top:80, bottom:80, right:200}`
- Col 2 (gráfico): tabela aninhada de largura 3900 dividida em barra + trilha.
  Barra preenchida `shd fill 0E2841`; trilha `shd fill E8E5E0`. Proporção = valor/máximo.
- Col 3 (valor): `jc right`, `sz 18`; a linha de maior valor em **bold navy**.

Abaixo da tabela, linha de fonte: `sz 16 · 5F5A53 · spacing{before:90, line:260}`.

### 4.13 Cards de KPI
Mesma grade da caixa-resumo (`2743 | 280 | 2742 | 280 | 2742`).
- Duas fileiras: rótulos (`vAlign bottom`) e valores (`vAlign top`), para manter a linha de base única.
- Label: `sz 14 · 0F4761 · tracking 60 · spacing{before:120, after:80, line:260}`
- Valor: `sz 30` no primeiro card, `sz 26` nos demais · `spacing{after:130, line:260}`
  Cor `1A1A1A`, ou `0E2841` no card de destaque.

### 4.14 Enumerações e alíneas
`ind{left:851, hanging:340}` · `jc both` · `spacing{before:90, after:90, line:340}` · `sz 24`
Formatos: `(i)`, `(ii)` para requisitos; `a)`, `b)` para pedidos.

### 4.15 Fecho
```
Nestes termos,
pede deferimento.
```
Ambos: `jc both · ind{firstLine:851} · spacing{line:360} · sz 24`
(minúsculas em "pede deferimento.")

Local e data: `jc right · spacing{before:420} · sz 24` —
"[Cidade/UF], data certificada pelo Sistema." (campo `cidade` do escritorio.json)

### 4.16 Assinatura
1. Linha: `──────────────────────────────` · `sz 18 · CFCBC4 · center · spacing{before:420, after:40}`
2. Nome: `sz 24 · bold · 0E2841 · tracking 30 · center · spacing{after:30}`
3. OAB: `sz 18 · 0F4761 · tracking 20 · center`

Para blocos subsequentes, `before:200` e `after:40`.

**`keepNext` em todos os parágrafos do fecho e das assinaturas.** Sem isso, uma
ou duas assinaturas caem sozinhas na página seguinte quando o corpo termina
perto da quebra — o espaçamento reduzido, isolado, não resolve.

### 4.17 Header
Logo do escritório centralizado (`logo` no escritorio.json), padrão **165 × 69 px**. Sem logo: nome do escritório em caixa alta, navy, tracking 60.
Parágrafo com `pBdr{bottom: single, sz 4, space 8, color CFCBC4}`.

### 4.18 Footer
1. Parágrafo vazio com `pBdr{top: single, sz 3, space 6, color CFCBC4}` · `spacing{after:40}`
2. `endereco` do escritorio.json
3. `contatos` do escritorio.json
   Ambas: `sz 14 · 5F5A53 · tracking 20 · center`
4. Paginação `— PAGE —`: `sz 14 · CFCBC4 · center · spacing{before:60}`

---

## 5. Gramática de composição

Ritmo observado no modelo:

```
endereçamento
referências processuais
TÍTULO DA PEÇA
subtítulo
caixa-resumo (3 colunas)

1 — TÓPICO
  corpo
  corpo
  callout

2 — TÓPICO
  corpo
  callout
  corpo
  enumeração (i)(ii)

3 — TÓPICO
  3.1 — subtópico
    corpo
    cronologia
    corpo
    caixa de jurisprudência
  3.2 — subtópico
    corpo
    barra comparativa + fonte
    corpo
    callout

4 — TÓPICO
  corpo
  cards de KPI
  corpo

5 — DOS PEDIDOS
  frase de abertura
  a) b) c) d)

fecho
local e data
assinaturas
```

Regras de ritmo:
- Todo elemento gráfico é precedido por um parágrafo espaçador
  (`spacing{before:140, after:140}`, vazio).
- Nunca dois elementos gráficos consecutivos sem prosa entre eles.
- Um callout por tópico, no máximo.
- Elementos gráficos servem para **dados** (datas, valores, comparações) e
  **jurisprudência** — nunca para argumento em prosa.

---

## 5.1 Acabamento das grades

Caixa-resumo e cards de KPI: `NOBORDERS` na tabela e `tcBorders{left}` bege
`CFCBC4` apenas nas células a partir da segunda, com `tcMar{left:240}` de
respiro. Evita o filete duplo nas colunas espaçadoras de 280.

### Alinhamento automático

Justificar bloco curto estica as palavras e denuncia acabamento ruim. O gerador
decide por contagem de caracteres, com limiares calibrados por bloco:

| Bloco | Limiar | Comportamento |
|---|---|---|
| `resumo` | 150 | coluna estreita (~38 car./linha) |
| `callout` | 400 | bloco secundário — à esquerda salvo se for longo |
| `julgado` (tese e itens) | 90 | ~1 linha cheia |

Tópicos e subtópicos são sempre **justificados com entrelinha 360 (1,5)**.
Referência de julgado é sempre à esquerda.

---

## 6. Armadilhas técnicas

- **Bug do docx-js**: imagens são salvas como `.undefined`. Corrigir com Python
  `zipfile`, renomeando a mídia e atualizando as referências em `.rels`.
- Tabelas devem ter `layout: FIXED` e `tblCellMar{left:10, right:10}`.
- `cantSplit` em toda `TableRow` de elemento gráfico, para não quebrar entre páginas.
- `keepNext` + `keepLines` em títulos e tópicos.
- Metadados: sobrescrever `creator` e `lastModifiedBy` para
  o `nome` do escritorio.json em `docProps/core.xml`.
