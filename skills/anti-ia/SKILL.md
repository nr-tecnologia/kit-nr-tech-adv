---
name: anti-ia
description: Protocolo para eliminar rastros de IA em qualquer texto jurídico produzido por advogado (petições, pareceres, recursos, memoriais, contestações, HC, MS, defesas, e-mails a clientes, contratos). Aciona-se SEMPRE que houver produção textual destinada a leitura humana profissional. Remove travessões longos e médios (— –), asteriscos, bullets decorativos (• ● ◦ ▪ → ✓), emojis, aspas curvas, reticências em caractere único, marcadores Markdown (# ## ###), setas e crases. Elimina vocabulário-denúncia de IA ("é crucial", "é importante ressaltar", "navegar pelas complexidades", "robusto", "multifacetado", "holístico", "meticuloso"). Proíbe estrutura em listas no corpo argumentativo, paralelismos matemáticos, fechamentos-resumo automáticos e didatismo. Skill do Kit NR Tech Adv (curso Dominando o Claude, NR Tecnologia · Roney Ribeiro).
---

# Skill: anti-ia

**Kit NR Tech Adv — NR Tecnologia · Roney Ribeiro**
Licença de uso livre. Base ética no art. 34, XIV do EOAB (dever de zelo).

Adapte todos os pontos marcados com `[adapte aqui]` à realidade do seu escritório.

---

## OBJETIVO

Garantir que **nenhum texto jurídico produzido com auxílio de i.a.** carregue marcas tipográficas, lexicais ou estruturais típicas de saída de modelo. O produto final deve ser **indistinguível** de peça redigida manualmente por advogado experiente.

Aplica-se a: petições iniciais, contestações, recursos (apelação, agravo, especial, extraordinário), embargos, HC, MS, memoriais, alegações finais, pareceres, contratos, e-mails formais a clientes e comunicações institucionais.

---

## REGRA ABSOLUTA

Se um trecho parece **"bem escrito demais, uniforme demais, explicativo demais"** — está errado. Advogado escreve com voz própria, ritmo irregular, secura argumentativa e sem didatismo. Petição não é aula.

---

## 1. PROIBIÇÕES TIPOGRÁFICAS (banimento total)

Nunca usar, em hipótese alguma:

- **Travessão longo** (`—` em-dash) → substituir por vírgula, ponto, ponto e vírgula, ou reescrever.
- **Travessão médio** (`–` en-dash) → mesmo tratamento. Exceção única: numeração de inciso legal (`I –`, `II –`) quando reproduzida de texto legal.
- **Asteriscos** (`*`, `**`) para ênfase → usar negrito nativo do Word (bold do estilo) ou reescrever.
- **Bullets decorativos** (`•`, `●`, `◦`, `▪`, `→`, `✓`, `➤`) → converter em prosa corrida ou alíneas jurídicas (`a)`, `b)`, `c)`).
- **Emojis** de qualquer natureza.
- **Aspas curvas** (`"` `"` `'` `'`) → usar aspas retas (`"` `'`) ou angulares (`«` `»`) conforme padrão da peça.
- **Reticências em caractere único** (`…`) → usar três pontos separados (`...`).
- **Setas** (`→`, `⇒`, `↔`, `⟶`) → reescrever em prosa.
- **Marcadores Markdown** (`#`, `##`, `###`, `>`, `---`) → usar estilos nativos do Word (Título 1, Título 2, citação recuada).
- **Blocos de código** (crase simples `` ` `` ou tripla ``` ```) → não existem em peça jurídica.
- **Espaços especiais** (fino, não-separável decorativo, hair space) → apenas espaço normal.

---

## 2. PROIBIÇÕES LEXICAIS (vocabulário-denúncia)

### Banidas totalmente
- "Navegar pelas complexidades", "desvendar", "mergulhar em", "explorar as nuances"
- "Robusto", "multifacetado", "holístico", "paradigma", "sinergia"
- "Tessitura", "panorama", "cenário" (quando genéricos, tipo "no cenário jurídico atual")
- "Meticuloso", "meticulosamente"
- "É crucial" → substituir por "é necessário", "impõe-se", "revela-se indispensável"
- "Delve", "tapestry", "landscape" e decalques

### Restritas (máximo 1 ocorrência por peça)
- "É importante ressaltar que", "é importante destacar que", "cumpre destacar", "vale ressaltar"
- "Em suma", "em síntese" abrindo parágrafo conclusivo automático
- "Ademais", "outrossim", "por conseguinte" — nunca três seguidos abrindo parágrafos consecutivos

### Estruturas proibidas
- "Não apenas... mas também" em repetição
- "Além disso" abrindo três ou mais parágrafos seguidos
- "Em conclusão, conforme demonstrado acima..." (fechamento redundante)
- "Passando à análise do próximo ponto..." (transição vazia)

---

## 3. PROIBIÇÕES ESTRUTURAIS

- **Nunca** usar listas com bullets no corpo argumentativo. Argumentação é **prosa corrida** com períodos bem construídos.
- **Nunca** encerrar seção com resumo automático do que acabou de ser dito. Se o argumento foi bem feito, o juiz percebe.
- **Nunca** repetir a mesma estrutura sintática em parágrafos consecutivos (paralelismo excessivo é assinatura de i.a.).
- **Nunca** empilhar conectores previsíveis (`Ademais... Outrossim... Ainda... Por conseguinte...`).
- **Evitar** parágrafos de tamanho matematicamente uniforme. Variar ritmo: períodos curtos e longos alternados.
- **Evitar** didatismo. Petição não explica o óbvio ao juiz.

---

## 4. PROTOCOLO DE REVISÃO OBRIGATÓRIA

Executar **nesta ordem** antes de salvar qualquer `.docx` ou entregar qualquer texto:

### Passo 1 — Varredura tipográfica automatizada

Rodar Find & Replace (ou script `limpar_rastros_ia.py` incluso) sobre o texto:

| Buscar | Substituir por |
|---|---|
| ` — ` (em-dash) | `, ` ou `. ` (avaliar caso a caso) |
| ` – ` (en-dash) | mesmo tratamento (exceto inciso legal) |
| `*` isolado | remover; aplicar negrito nativo se necessário |
| `**...**` | negrito nativo do Word |
| `•`, `●`, `◦`, `▪` | converter em prosa ou alínea `a)`, `b)` |
| `→`, `⇒` | reescrever |
| `…` | `...` |
| `"` `"` | `"` `"` |
| `'` `'` | `'` `'` |
| `# `, `## `, `### ` | aplicar estilo de título nativo |
| `` ` `` | remover |

### Passo 2 — Varredura lexical

Buscar cada termo da Seção 2 no texto. Para cada ocorrência, decidir: substituir ou reescrever o período inteiro.

### Passo 3 — Teste de ritmo

Ler três parágrafos consecutivos. Se soar cadenciado, mecânico ou explicativo demais, reescrever variando extensão de períodos.

### Passo 4 — Teste da alínea

Para cada enumeração vertical: pergunta-se "isso caberia em prosa corrida sem perda argumentativa?". Se sim, converter em prosa.

### Passo 5 — Teste do fechamento

O último parágrafo de cada tópico **não pode** ser resumo do próprio tópico. Se for, apagar.

### Passo 6 — Teste do parágrafo-manequim

Qualquer parágrafo que abra com "É importante...", "Cumpre destacar...", "Vale ressaltar...", "Em suma...", "Por outro lado..." em série é candidato à reescrita.

---

## 5. O QUE É PERMITIDO

Para não empobrecer a peça:

- **Negrito nativo** do Word para dispositivos legais e teses centrais (máximo 3 a 5 destaques por peça).
- **Itálico** para expressões latinas (`in casu`, `data venia`, `mutatis mutandis`, `sub judice`), nomes de obras e citações diretas de doutrina.
- **Estilos de título nativos** (Título 1, Título 2) para estrutura da peça.
- **Alíneas** `a)`, `b)`, `c)` e **incisos** `I –`, `II –` quando lei ou pedido exigirem enumeração formal (ex.: rol de pedidos ao final da inicial).
- **Citações recuadas** conforme ABNT para doutrina longa (mais de três linhas).
- **Aspas retas duplas** `"..."` para citações curtas.

---

## 6. INTEGRAÇÃO COM OUTRAS SKILLS DO KIT

Esta skill é **pré-requisito** de qualquer produção textual jurídica assistida por i.a. no seu escritório.

Ordem de execução recomendada:
1. Produzir rascunho jurídico completo com auxílio da i.a.
2. Aplicar `anti-alucinacao` (verificar toda citação, jurisprudência, dispositivo).
3. Aplicar `anti-ia` (limpeza tipográfica + lexical + estrutural).
4. Salvar `.docx` final no template do seu escritório `[adapte aqui]`.

---

## 7. CRITÉRIO DE ACEITE

A peça só é entregue quando:

- Zero travessões `—` `–` no corpo (exceto inciso legal).
- Zero asteriscos.
- Zero bullets decorativos.
- Zero emojis.
- Zero marcadores Markdown residuais.
- Nenhum termo da lista banida da Seção 2.
- Nenhum bloco argumentativo em formato de lista.
- Ritmo variado entre parágrafos.
- Fechamentos sem resumo redundante.

**Falha em qualquer item da Seção 1 obriga refazer a peça inteira.**

---

## FUNDAMENTO ÉTICO

Art. 34, XIV do Estatuto da OAB (Lei 8.906/1994) — dever de zelo profissional e de manutenção da dignidade da advocacia. Peça com rastro visível de i.a. compromete a percepção de zelo e a autoria intelectual da tese. A limpeza tipográfica e lexical é parte do dever profissional, não estética opcional.
