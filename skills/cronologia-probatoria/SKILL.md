---
name: cronologia-probatoria
description: >
  Constrói cronologia probatória rastreável a partir de corpus documental de
  qualquer volume (autos, inquérito, procedimento administrativo, discovery,
  documentação empresarial). Cada entrada da linha do tempo é ancorada em
  documento, folha e trecho literal. Produz também mapa de padrões e
  divergências, matriz de força probatória, mapa de testemunhas e seção
  separada de lacunas probatórias. Use SEMPRE que o pedido envolver
  "monta a cronologia", "linha do tempo do caso", "organiza os fatos",
  "analisa esses documentos", "o que os autos mostram", "prepara memorial
  com histórico", "levanta as inconsistências", "quem devo ouvir",
  "prepara a instrução", "análise de caso volumoso". Cobre criminal
  (inclusive júri), ambiental federal (IBAMA/ICMBio, DOF/SISDOF/SINAFLOR),
  cível, trabalhista, previdenciário e tributário. Aciona obrigatoriamente
  anti-alucinacao e entrega o produto final pelo padrão peticao.
---

# Cronologia Probatória

Kit NR Tech Adv — NR Tecnologia · Roney Ribeiro.

Skill de análise. Não redige tese. Organiza fato documentado para que a tese
seja construída em cima de chão firme.

---

## REGRA-MESTRE

> **Todo fato afirmado na cronologia carrega, obrigatoriamente, a fonte de onde
> foi extraído. Fato sem fonte não entra na linha do tempo: entra na seção de
> lacunas probatórias.**

Não existe entrada cronológica sem âncora documental. Não existe âncora
documental sem indicação de documento, folha e trecho.

A tentação de "amarrar" a narrativa preenchendo buracos com inferência
plausível é o modo de falha mais grave desta análise. Uma cronologia com
lacunas honestas é um instrumento de trabalho. Uma cronologia com lacunas
costuradas por dedução é uma armadilha que só aparece na audiência, quando a
parte contrária pede a folha que não existe.

---

## QUANDO ACIONAR

Sempre que houver corpus documental a ser ordenado no tempo:

| Situação | Corpus típico |
|---|---|
| Ação penal ambiental | Auto de infração, relatório de fiscalização, laudo, DOF, romaneios, SISDOF/SINAFLOR, termo de apreensão |
| Inquérito policial | Boletim, oitivas, laudos, interceptações, quebras, relatório final |
| Tribunal do Júri | Depoimentos, laudo cadavérico, local do crime, reconhecimentos, mídias |
| Cível contratual | Contrato, aditivos, notas fiscais, e-mails, notificações, comprovantes |
| Trabalhista | CTPS, holerites, cartões de ponto, controles, testemunhas, comunicações |
| Previdenciário | CNIS, PPP, LTCAT, prontuários, laudos, requerimentos, indeferimentos |
| Procedimento administrativo | Autos administrativos, defesas, decisões, recursos, intimações |

Aciona também em: preparação de memorial, alegações finais, defesa prévia,
resposta à acusação, instrução, e sempre que o volume documental exceder o que
se lê confortavelmente de uma vez.

---

## PROTOCOLO

### PASSO 0 — Acionar anti-alucinacao

Obrigatório. Esta skill roda dentro daquele protocolo, não ao lado dele.
Nenhuma jurisprudência, dispositivo ou dado processual entra sem verificação.

### PASSO 1 — Inventário do corpus

Antes de ler para extrair, ler para catalogar. Produzir tabela:

| ID | Documento | Tipo | Folhas | Data do doc | Origem | Legibilidade |
|---|---|---|---|---|---|---|

Campos:

- **ID**: código curto e estável (`D01`, `D02`). Usado em todas as citações posteriores.
- **Tipo**: contratual, fiscalizatório, pericial, testemunhal, contábil, sistêmico, comunicacional.
- **Origem**: quem produziu. Documento produzido pela parte contrária tem peso diferente de documento produzido pelo cliente.
- **Legibilidade**: íntegro, parcialmente ilegível, ilegível, incompleto. Documento com folhas faltando é sinalizado aqui, não descoberto depois.

Se o inventário revelar ausência esperada (contrato citado em e-mail mas não
juntado, folha faltando em sequência numerada), registrar imediatamente como
lacuna. Ausência de documento é informação, não silêncio.

### PASSO 2 — Cronologia com âncora

Cada linha:

| # | Data | Fato | Fonte | Trecho | Confiança |
|---|---|---|---|---|---|

Regras de preenchimento:

**Data.** Se o documento traz data certa, usar. Se traz data aproximada
("no início daquele ano"), registrar como aproximada e marcar. Se não traz
data e a posição temporal é deduzida por contexto, marcar como posicionamento
inferido e explicar a inferência em nota. Data deduzida nunca aparece com a
mesma tipografia de data documentada.

**Fato.** Descrição seca do que o documento registra. Não do que se conclui do
documento. "O relatório consigna que a equipe encontrou 340 m³ no pátio" é
fato. "Havia 340 m³ no pátio" é conclusão sobre o fato, e pertence à análise,
não à cronologia.

**Fonte.** `D07, fl. 112` ou `D07, fl. 112-114`. Sempre.

**Trecho.** Citação literal curta do ponto exato. Serve para conferência sem
reabrir o documento.

**Confiança.** Três níveis:

- `DOCUMENTADO` — o documento afirma diretamente o fato, em texto legível.
- `INDIRETO` — o fato decorre necessariamente do que o documento registra, mas não está escrito. Explicitar a cadeia.
- `ALEGADO` — consta apenas como afirmação de parte ou de testemunha, sem confirmação documental independente. Marcar quem alegou.

Nunca omitir o nível. Uma cronologia onde tudo aparece igual esconde
exatamente a informação que o advogado precisa: o que se sustenta sozinho e o
que depende de corroboração.

### PASSO 3 — Padrões e divergências

Com a linha do tempo pronta, buscar:

- **Divergência numérica.** Volumes, valores, quantidades e datas que não fecham entre documentos. Apresentar sempre em par: o que o documento A diz, o que o documento B diz, e a diferença.
- **Divergência de versão.** O mesmo fato narrado de forma distinta por fontes diferentes. Identificar quem narra o quê, e quando cada narrativa foi produzida. Versão produzida depois da instauração do procedimento tem valor diferente de registro contemporâneo ao fato.
- **Concentração temporal.** Aglomerado de eventos em janela curta. Costuma indicar o ponto de virada do caso.
- **Silêncio anômalo.** Período em que a documentação deveria existir por rotina e não existe. Em operação ambiental, ausência de DOF em período de movimentação registrada em romaneio é silêncio anômalo. Em contrato, ausência de correspondência em fase crítica também é.
- **Padrão sistêmico versus falha pontual.** Distinção decisiva em matéria ambiental e tributária. Inconsistência que se repete uniformemente ao longo de todo o período aponta para erro de escrituração ou de parametrização de sistema. Inconsistência concentrada em episódios isolados aponta para outra coisa. A cronologia é o instrumento que permite separar os dois, e a conclusão só se sustenta se a distribuição temporal for demonstrada, não afirmada.

Cada padrão apontado indica os IDs que o sustentam. Padrão sem lastro
documental não é padrão, é impressão.

### PASSO 4 — Matriz de força probatória

| Ponto | Favorece | Sustentação | Fragilidade | Grau |
|---|---|---|---|---|

**Grau** em três faixas:

- `FORTE` — documento contemporâneo ao fato, produzido por terceiro ou pela parte contrária, íntegro, sem versão concorrente nos autos.
- `MÉDIO` — documento próprio, ou documento de terceiro com versão concorrente, ou prova que depende de corroboração.
- `FRÁGIL` — prova exclusivamente testemunhal sem lastro, documento com legibilidade comprometida, documento produzido após o início do litígio.

Registrar a fragilidade sempre, inclusive nos pontos fortes. Prova favorável
cuja fraqueza não foi antecipada é prova que vira contra na réplica.

### PASSO 5 — Mapa de testemunhas

| Nome | Vínculo | Sabe sobre | Fonte da indicação | Risco |
|---|---|---|---|---|

- **Sabe sobre**: ponto específico da cronologia, referenciado pelo número da entrada.
- **Fonte da indicação**: onde nos autos essa pessoa aparece. Testemunha que não consta de documento algum não entra na lista sem que se registre que a indicação veio do cliente.
- **Risco**: o que essa pessoa também sabe e não convém que seja perguntado. Avaliar antes de arrolar, não depois.

### PASSO 6 — Lacunas probatórias

Seção obrigatória, com destaque próprio. Nunca diluída no corpo.

| Lacuna | Por que importa | Onde buscar | Prazo |
|---|---|---|---|

Entram aqui:

- Documento referido em outro documento e não juntado
- Período sem cobertura documental
- Fato relevante sustentado apenas por alegação
- Folha faltante em sequência
- Documento ilegível cuja via legível pode existir
- Perícia não realizada sobre ponto controvertido

Esta seção é o produto mais valioso da análise. É ela que converte a
cronologia em plano de trabalho.

---

## SAÍDA

Documento `.docx` pelo padrão visual da skill `peticao` (com os dados do seu escritório em `escritorio.json`)
(Palatino Linotype, paleta navy/teal/sépia/bege, header com logo, footer).

Estrutura:

1. Caixa-resumo de abertura, com objeto, corpus analisado e período coberto
2. Inventário documental
3. Cronologia
4. Padrões e divergências
5. Matriz de força probatória
6. Mapa de testemunhas
7. Lacunas probatórias
8. Nota metodológica

A cronologia principal usa o recurso de cronologia visual do design system.
Divergências numéricas usam barras comparativas. Pontos de virada usam callout.

Para uso interno, `.md` é aceitável. Para circulação com cliente, corresponsável
ou co-patrono, `.docx` no padrão do escritório.

---

## NOTA METODOLÓGICA (texto-padrão)

Fecha todo documento produzido por esta skill:

> A presente cronologia foi construída exclusivamente a partir dos documentos
> relacionados no inventário. Cada entrada indica o documento, a folha e o
> trecho de onde o fato foi extraído, bem como o grau de sustentação
> documental. Fatos não amparados em documento constam da seção de lacunas
> probatórias e não integram a linha do tempo. Nenhuma inferência foi
> empregada para suprir ausência de registro.

---

## VEDAÇÕES

Não fazer, em nenhuma hipótese:

- Preencher intervalo temporal sem documento com fato provável
- Uniformizar versões divergentes em narrativa única e coerente
- Atribuir data certa a documento sem data
- Omitir documento desfavorável do inventário
- Citar folha sem ter lido a folha
- Apresentar conclusão sobre o fato como se fosse o fato
- Arrolar testemunha sem avaliar o que ela sabe contra
- Entregar cronologia sem seção de lacunas

---

## INTERAÇÃO COM AS DEMAIS SKILLS

| Skill | Papel |
|---|---|
| `anti-alucinacao` | Roda por cima. Obrigatória. |
| `peticao` | Formata o entregável final |
| `anti-ia` | Aplicar quando a cronologia for aproveitada em peça |
