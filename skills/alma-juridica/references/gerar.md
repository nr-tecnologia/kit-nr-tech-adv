# Etapa Gerar — Gerar os arquivos da Alma

## Passo 1 — Checagem (bloqueante)

Leia `ALMA-*/entrevista-progresso.md`.

- Se `blocos_concluidos` não tiver os 8 blocos (A a H): **não gere nada**. Diga quais blocos faltam e indique a etapa Continuar ("continuar minha alma"). Uma Alma com seção vazia é pior que nenhuma Alma, porque a redação da peça vai preencher o vazio com texto genérico.
- Se não houver nenhuma peça `.docx` em `ALMA-*/pecas/`: avise que as seções 8 e 11 sairão como `[a extrair das peças]` e pergunte se ele quer gerar assim mesmo ou colocar as peças antes. Respeite a resposta.
- Se houver apenas PDFs na pasta: diga que PDF não serve como base de extração e peça a versão `.docx`.

## Passo 2 — Corpus

Se existir `ALMA-*/analise-corpus.md` e ela cobrir todas as peças da pasta, use-a. Se não, dispare o agente `extrator-corpus` e espere o resultado antes de seguir.

## Passo 3 — Gerar

Leia `${CLAUDE_PLUGIN_ROOT}/skills/alma-juridica/references/templates.md` e escreva, dentro de `ALMA-<Nome>/`:

- `ALMA.md` — 12 seções, nessa ordem.
- `VOZ.md` — só os registros que ele marcou no aquecimento, mais "O que atravessa todos os registros".
- `MEMORIA.md` — cabeçalho e tabela vazia.

Regras de geração:
- Todo padrão precisa de trecho-prova da entrevista ou das peças. Sem prova: "Padrão não identificado com segurança na amostra".
- Seção 10 (fala bruta): copie literal do arquivo de progresso, sem limpar "é...", repetições e correções.
- Seção 7: toda citação que ele atribuiu de memória (frase célebre, julgado, autor) vai marcada `[a verificar]` até ser conferida em fonte oficial. Nunca complete número de processo, relator ou data de memória.
- O que aparece só em peças de uma área é linguagem da matéria, não da alma. Diga isso quando cortar algo por esse motivo.

## Passo 4 — Entregar

Diga em até 4 linhas: onde os arquivos estão, quais seções ficaram com `[a verificar]` ou `[a extrair das peças]`, e que o próximo passo é ler a ALMA.md e usar a etapa Corrigir ("isso não é minha voz") para tudo que não soar como ele.
