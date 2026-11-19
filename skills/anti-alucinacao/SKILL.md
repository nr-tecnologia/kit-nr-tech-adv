---
name: anti-alucinacao
description: >
  Protocolo obrigatório anti-alucinação para QUALQUER produção jurídica
  do advogado. Use SEMPRE que envolver jurisprudência (STF, STJ, TST,
  TRFs, TJs), súmulas, temas repetitivos ou de repercussão geral,
  doutrina, dispositivos legais, números de processo, datas processuais,
  prazos ou cálculos prescricionais. Acione automaticamente em redação
  de petições, recursos, razões, contrarrazões, embargos, HC, MS,
  agravos, pareceres, memoriais, alegações finais, defesas
  administrativas, análises de caso, consultas. Cobre todas as áreas:
  criminal, cível, trabalhista, ambiental, tributário, previdenciário,
  administrativo, constitucional, eleitoral, consumerista. IMPÕE
  verificação prévia em fontes oficiais e PROÍBE invenção de citação
  mesmo sob prazo, em rascunhos ou "para argumentar". Use também em
  pedidos de "auditoria", "checagem" ou "revisão crítica" de peça já
  produzida.
---

# Anti-Alucinação — Protocolo de Verificação Jurídica

> Os pontos [entre colchetes] se ajustam à área, aos tribunais e às leis estaduais de quem usa.

---

## REGRA-MESTRE — A LEI DE OURO

> **NUNCA, sob hipótese alguma, em nenhuma circunstância, por nenhum motivo, invente jurisprudência, doutrina, dispositivo legal, súmula, tema, informativo, número de processo, nome de Relator, data de julgamento, órgão julgador ou ementa.**

Esta regra é **absoluta**. Não admite exceção por:
- ❌ Pressão de tempo / prazo apertado
- ❌ "É só um rascunho"
- ❌ "Vou conferir depois"
- ❌ "Tenho quase certeza"
- ❌ "É de conhecimento geral"
- ❌ "É só para argumentar"
- ❌ "O cliente vai gostar"
- ❌ "Já vi parecido"

**Citação inventada = falha grave irreparável.** Pode gerar dano ao cliente, sanção ética ao advogado (art. 34 do EOAB) e perda de credibilidade do escritório.

---

## QUANDO ACIONAR ESTA SKILL

**SEMPRE** que a tarefa envolver, mesmo que tangencialmente:

| Categoria | Exemplos |
|---|---|
| **Jurisprudência** | STF, STJ, TST, TSE, TRFs, TJs, Turmas Recursais, Câmaras |
| **Súmulas** | Vinculantes, comuns, persuasivas |
| **Temas** | Repercussão geral, repetitivos, recursos representativos |
| **Doutrina** | Citações nominais a autores, obras, edições, páginas |
| **Legislação** | Artigos, parágrafos, incisos, alíneas, leis específicas |
| **Dados processuais** | Números de processo, IDs, IDs de petição, datas de fatos |
| **Cálculos** | Prescrição, decadência, prazos, dosimetria, juros, correção |
| **Números** | Valores monetários, percentuais, salários mínimos |

---

## PROTOCOLO DE 5 PASSOS — OBRIGATÓRIO

### PASSO 1 — Origem do Dado

Antes de escrever qualquer afirmação factual, classificar a origem em **UMA** das três categorias:

| ✅ Categoria A — VERIFICADO | ⚠️ Categoria B — PRECISA VERIFICAR | ❌ Categoria C — NÃO USAR |
|---|---|---|
| Está nos autos do processo (citado pelo usuário) | Lembrança do modelo sem fonte | Inventado / "construído por analogia" |
| Foi confirmado em web_search com fonte oficial | Mencionado em blog/site secundário | Composição de pedaços de várias fontes |
| Texto literal de lei (Planalto/CF/Códigos) | Citação parafraseada sem fonte | Número/Relator "deduzido" |
| Documento oficial (DJe, acórdão, ementário) | Resumo de notícia jornalística | Data "estimada" |

**Regra:** apenas Categoria A vai para a peça. Categoria B passa pelo Passo 2. Categoria C é descartada.

### PASSO 2 — Verificação Ativa

Para qualquer dado da Categoria B, **antes de escrevê-lo**, executar:

```
[1] web_search com termos específicos do julgado/dispositivo
[2] Tentar fonte primária: stj.jus.br, stf.jus.br, planalto.gov.br,
    sites oficiais de TJs/TRFs, DJe
[3] Fontes secundárias (Migalhas, ConJur, Dizer o Direito, JusBrasil)
    servem só para LOCALIZAR o julgado (número, órgão, data)
[4] A confirmação é sempre na fonte oficial do tribunal ou no DJe
[5] Se NÃO confirmar na fonte oficial → tratar como Categoria C (descartar)
```

**Casos especiais:**
- **Súmulas:** verificar texto literal em fonte oficial do tribunal emissor
- **Temas STJ/STF:** verificar número e enunciado em scon.stj.jus.br ou portal.stf.jus.br
- **Leis estaduais [do seu estado]:** verificar em assembleia/diário oficial estadual
- **Doutrina:** confirmar autor, obra e ano; se não achar → remover atribuição nominal

### PASSO 3 — Descarte com Honestidade

Se um dado **não puder ser verificado**, há **3 opções legítimas**, em ordem de preferência:

1. **Remover** integralmente a referência e construir o argumento sem ela
2. **Construir o argumento** a partir do texto legal e dos fatos dos autos, sem atribuir entendimento a tribunal
3. **Sinalizar como não verificado** ao usuário ANTES de incluir, perguntando explicitamente se ele tem a fonte

**O que NÃO fazer:**
- ❌ Inventar número de processo "que pareça plausível"
- ❌ Atribuir a Relator "que normalmente julga assim"
- ❌ Compor ementa "no estilo do tribunal"
- ❌ Dar data "aproximada" inventada
- ❌ Citar "Súmula n.º X" sem confirmar que existe e é desse teor

### PASSO 4 — Auto-Auditoria Antes de Entregar

**Antes de apresentar qualquer peça ou análise**, executar checklist mental:

```
□ Cada citação tem número de processo verificado?
□ Cada Relator citado existe e é desse tribunal?
□ Cada data de julgamento foi conferida?
□ Cada artigo de lei foi conferido em fonte oficial?
□ Cada súmula foi verificada quanto ao texto e numeração?
□ Cada tema (repetitivo/repercussão) tem número confirmado?
□ Cada autor citado tem a obra/edição correta?
□ Cada cálculo (prescrição, prazo) foi feito com datas reais?
□ Cada dado dos autos (IDs, datas, valores) bate com o documento?
```

Se **qualquer** item falhar → voltar ao Passo 2 ou Passo 3.

### PASSO 5 — Sinalização Transparente

Ao entregar a peça/análise, **comunicar explicitamente** ao usuário:

```
✅ Citações verificadas: [listar fontes principais]
⚠️ Pontos não verificados / removidos: [se houver]
🔍 Recomendação de checagem adicional: [se aplicável]
```

Isso protege o usuário e cria trilha de responsabilidade.

---

## REGRAS REFORÇADAS POR ÁREA DO DIREITO

> Mantenha apenas as áreas que você atua. Remova as que não usa.

### 🔴 CRIMINAL
- Toda jurisprudência citada deve ter **número de HC, REsp, AgRg, RHC, AC** completo
- Pena, regime, prazos prescricionais: **calcular com datas reais dos autos**, nunca estimar
- Súmulas STJ/STF criminais: verificar literalmente
- Temas criminais STF: verificar número
- Lei seca: art. 109 CP (prescrição), art. 33 CP (regime), art. 44 CP (PRD), art. 71 CP (continuidade) — sempre conferir redação atual
- Lei Anticrime (13.964/2019), ANPP (28-A CPP): atenção a vigência e marco temporal

### 🔵 CÍVEL / CONSUMERISTA
- Súmulas STJ cíveis numerosas: verificar literalmente
- CDC: conferir redação
- CC/2002: atenção a alterações pontuais
- REsps repetitivos: confirmar tema e enunciado

### 🟡 TRABALHISTA
- Súmulas TST: numeração e texto (especialmente após Reforma 13.467/2017)
- OJs (SDI-1, SDI-2, Tribunal Pleno): verificar vigência e número
- IN TST: verificar versão vigente
- Pós-Reforma: muitas teses anteriores foram superadas — **alerta máximo**

### 🟢 AMBIENTAL
- Lei 9.605/98 (Crimes Ambientais): conferir tipos
- Lei 12.651/12 (Código Florestal): conferir alterações
- IBAMA, ICMBio, órgãos estaduais: regulamentos próprios
- Súmulas STJ ambientais: verificar

### 🟣 TRIBUTÁRIO
- CTN: conferir artigo
- Súmulas STJ tributárias: verificar
- Temas repetitivos STJ: extremamente sensíveis — verificar número e enunciado
- ECs (113/2021, 132/2023): atenção a vigência

### 🟠 PREVIDENCIÁRIO
- Lei 8.213/91: conferir artigo e alterações (EC 103/2019)
- Súmulas TNU: verificar vigência
- Temas TNU e STJ: extremamente específicos
- Marcos da Reforma da Previdência (EC 103): regras de transição

### ⚫ ADMINISTRATIVO / FISCAL ESTADUAL
- Lei estadual aplicável [do seu estado]: **sempre verificar texto atual** em fonte oficial
- Lei 8.429/92 (LIA, alterada pela Lei 14.230/2021): atenção a marco temporal
- Súmulas TJ locais: cuidado redobrado, banco de dados pequeno

---

## REGRA ESPECIAL — DADOS DOS AUTOS

Quando o usuário fornecer documento (PDF, DOCX) com os autos:

1. **Ler o documento integralmente** antes de citar qualquer dado
2. **IDs de petição, datas, valores, qualificações:** copiar literalmente, nunca de memória
3. **Nomes próprios** (partes, advogados, juízes): conferir grafia exata
4. **Números de processo:** copiar caractere por caractere (formato CNJ)
5. **Datas:** verificar se é a do fato, da denúncia, da sentença, da publicação — cada uma tem efeito jurídico diferente

---

## REGRA ESPECIAL — CÁLCULOS DE PRESCRIÇÃO

Cálculos prescricionais são área de **risco máximo de erro**. Procedimento obrigatório:

1. **Identificar a data exata do fato**
2. **Identificar o tipo penal e a pena máxima cominada** (caput, qualificadora, causa de aumento)
3. **Aplicar art. 109 CP** com a tabela exata:
   - Pena > 12 anos → 20 anos
   - Pena > 8 e ≤ 12 anos → 16 anos
   - Pena > 4 e ≤ 8 anos → 12 anos
   - Pena > 2 e ≤ 4 anos → 8 anos
   - Pena ≥ 1 e ≤ 2 anos → 4 anos
   - Pena < 1 ano → 3 anos
   - Conferir também arts. 110 (pena aplicada) e 115 (redução pela idade) do CP
4. **Identificar marcos interruptivos** (art. 117 CP)
5. **Calcular intervalo entre cada marco** (sem somar — cada intervalo precisa caber no prazo)
6. **Verificar prescrição em concreto/retroativa** (após trânsito para acusação): pela pena aplicada
7. **Conferir hoje** vs. último marco interruptivo

⚠️ **NUNCA afirmar prescrição sem fazer todos os 7 passos com datas reais.**

---

## ANTI-PADRÕES — ERROS RECORRENTES A EVITAR

### ❌ PADRÃO 1: "Jurisprudência consolidada"
**Errado:** "É entendimento consolidado do STJ que [tese X], conforme AgRg no REsp 1.234.567/SP."
**Por quê:** O número pode ser inventado. "Consolidado" é palavra que disfarça falta de fonte.
**Certo:** verificar em scon.stj.jus.br **antes** de afirmar consolidação. Se houver, citar com número real. Se não, escrever "há precedentes nesse sentido" sem inventar número.

### ❌ PADRÃO 2: "Composição de ementa"
**Errado:** Pegar pedaços de 3 ementas reais e juntar em uma "ementa-síntese".
**Por quê:** A ementa resultante não existe em lugar nenhum.
**Certo:** citar uma ementa real, completa, com fonte ou parafrasear sem aspas.

### ❌ PADRÃO 3: "Atribuição plausível"
**Errado:** "Conforme leciona [autor famoso da área]..."
**Por quê:** Se não há a obra na mão, a atribuição é palpite.
**Certo:** verificar se o autor escreveu sobre o tema, em qual obra, qual edição. Se não achar → remover nome próprio.

### ❌ PADRÃO 4: "Súmula aproximada"
**Errado:** "Conforme Súmula n.º X do STJ..." (quando o número correto é outro).
**Por quê:** Súmulas têm numeração rígida e texto fixo.
**Certo:** copiar súmula literal de fonte oficial do tribunal.

### ❌ PADRÃO 5: "Data redonda"
**Errado:** "Conforme decidido em 2024..."
**Por quê:** Data sem dia e mês indica que não foi conferida.
**Certo:** data completa do julgamento E da publicação no DJe (são diferentes).

### ❌ PADRÃO 6: "Lei genérica"
**Errado:** "Conforme art. 7º da Lei 9.605/98..."
**Por quê:** Esse artigo pode não existir, ou ter sido alterado.
**Certo:** abrir Planalto, conferir artigo, parágrafo, inciso e redação atual.

### ❌ PADRÃO 7: "Tema sem número confirmado"
**Errado:** "É tese fixada em recurso repetitivo..."
**Por quê:** Tema repetitivo tem número específico.
**Certo:** conferir Tema STJ/STF em scon.stj.jus.br/repetitivos ou portal.stf.jus.br/temas-repercussao-geral.

---

## CHECKLIST FINAL (LER ANTES DE ENVIAR QUALQUER PEÇA)

```
□ TODOS os números de processo foram conferidos em fonte primária
□ TODOS os nomes de Relatores existem e atuam no órgão citado
□ TODAS as datas de julgamento e DJe foram conferidas
□ TODOS os artigos de lei foram conferidos em Planalto/fonte oficial
□ TODAS as súmulas têm texto e número conferidos
□ TODOS os temas (repetitivos/RG) têm número conferido
□ TODOS os autores citados têm obra confirmada
□ TODOS os cálculos de prazo/prescrição foram refeitos com datas reais
□ TODOS os IDs de petição/peças dos autos foram copiados literalmente
□ TODAS as qualificações de partes foram conferidas no documento
□ NENHUMA citação foi parafraseada de modo a sugerir fonte que não existe
□ NENHUM dado foi "preenchido" por dedução
```

Se qualquer linha falhar → **volta para revisão**.

---

## REGRA DE EMERGÊNCIA — QUANDO HÁ PRESSÃO DE TEMPO

Mesmo com prazo apertado, **a prioridade é não inventar**, mesmo que isso signifique:

1. Entregar peça mais curta (sem a citação duvidosa)
2. Avisar o usuário que falta verificar X e perguntar se ele confirma
3. Pedir mais tempo
4. Entregar versão preliminar com marcação clara dos pontos não verificados

**Nunca:** preencher com invenção para "ganhar tempo". O custo de uma citação fantasma é sempre maior que o custo de não citar.

---

## FUNDAMENTO ÉTICO

Esta skill não é apenas boa prática técnica — é dever ético do advogado.

- **Art. 34, XIV, EOAB:** é infração deturpar o teor de dispositivo de lei, citação doutrinária ou de julgado.
- **Código de Ética e Disciplina da OAB, art. 2º, parágrafo único, II e III:** atuar com veracidade, lealdade e boa-fé, e velar pela reputação pessoal e profissional.

Uma citação inventada por i.a. não deixa de ser responsabilidade do advogado que assina a peça. **A i.a. é ferramenta — a responsabilidade profissional é sempre humana.**

---

*Licença CC BY-NC 4.0 (veja o LICENSE do plugin).*
