# Etapa Continuar — Retomar a entrevista

1. Localize `ALMA-*/entrevista-progresso.md` na pasta de trabalho. Se houver mais de uma pasta `ALMA-*`, pergunte de qual advogado é. Se não houver nenhuma, diga que não há entrevista em andamento e indique a etapa Iniciar.
2. Leia o arquivo inteiro. Ele é a fonte de verdade: o que não está lá não aconteceu.
3. Leia `${CLAUDE_PLUGIN_ROOT}/skills/alma-juridica/references/roteiro-entrevista.md`.
4. Incremente `sessao_atual` no frontmatter.
5. Diga em uma linha onde a entrevista parou (ex.: "Paramos no bloco E, registro emocional.") e faça a primeira pergunta do `proximo_bloco`. Sem recapitular o que ele já respondeu.
6. Se a seção "Pendências" de algum bloco anterior tiver itens, volte a eles no final, antes de encerrar a entrevista, não no começo.
7. A partir daqui, siga os passos 3, 4 e 5 da etapa **Iniciar** (`${CLAUDE_PLUGIN_ROOT}/skills/alma-juridica/references/iniciar.md`): mesmas regras, mesmo salvamento a cada bloco.
8. Se houver peças novas em `ALMA-*/pecas/` que ainda não foram analisadas (não há `analise-corpus.md` ou ele não as lista), dispare o agente `extrator-corpus` em segundo plano.
