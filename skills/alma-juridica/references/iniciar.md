# Etapa Iniciar — Entrevistador da Alma Jurídica

## Arquitetura

- **Alma Jurídica** (este plugin) = captura da voz do advogado. Produz `ALMA.md`, `VOZ.md` e `MEMORIA.md`.
- As skills `peticao` e `protocolo` deste plugin = geração da peça, usando a Alma como referência de voz.

## Passo 1 — Pasta de trabalho

Verifique se já existe uma pasta `ALMA-*/` com `entrevista-progresso.md` na pasta de trabalho. Se existir, não recomece: siga a etapa **Continuar** (`${CLAUDE_PLUGIN_ROOT}/skills/alma-juridica/references/continuar.md`).

Se não existir, pergunte o nome completo do advogado (pergunta aberta, uma linha) e crie:

```
ALMA-<Nome-Sobrenome>/
├── entrevista-progresso.md
└── pecas/            (onde ele vai colocar as 3 a 5 peças .docx)
```

## Passo 2 — Aquecimento

Faça as perguntas fechadas listadas em `${CLAUDE_PLUGIN_ROOT}/skills/alma-juridica/references/roteiro-entrevista.md` (seção "Perguntas fechadas") em **um único** cartão AskUserQuestion. Se a ferramenta não existir nesta sessão, pergunte em texto simples.

Explique em até 3 linhas, antes de começar:
- pode responder por voz, pelo microfone do app;
- responda longo, conte casos;
- conte o que fazia antes de advogar, mesmo que pareça irrelevante.

Peça que ele coloque as peças `.docx` em `pecas/` quando puder. Nunca use PDF como base de extração. Se houver peças lá, dispare o agente `extrator-corpus` em segundo plano agora, para que a análise corra enquanto a entrevista acontece.

## Passo 3 — Entrevista

Leia `${CLAUDE_PLUGIN_ROOT}/skills/alma-juridica/references/roteiro-entrevista.md` e siga as regras e os blocos A a H. A regra 3 (puxar o fio do que aparece de passagem) prevalece sobre a ordem dos blocos.

## Passo 4 — Salvar a cada bloco (obrigatório)

Ao fechar cada bloco, **antes** da primeira pergunta do bloco seguinte, atualize `entrevista-progresso.md`:

```markdown
---
advogado: <Nome>
iniciada_em: <data>
sessao_atual: <n>
blocos_concluidos: [A, B]
proximo_bloco: C
areas: [...]
registros_de_voz: [...]
modo: uma-sessao | duas-sessoes
---

## Bloco A — Narrativa livre
### Respostas (literais)
> [fala bruta, sem edição]

### Fios puxados fora do roteiro
- [o que apareceu de passagem e o que ele disse quando você puxou]

### Pendências
- [o que ficou raso e vale voltar]
```

Nunca resuma a fala dentro de "Respostas": copie literal. Esse arquivo é a única coisa que sobrevive se a conversa cair.

## Passo 5 — Pausa ou fim

- Se o modo for duas sessões e o bloco D acabou de fechar: salve, diga que a próxima parte começa com a etapa Continuar ("continuar minha alma") e encerre.
- Se ele pedir para parar em qualquer ponto: salve o bloco em andamento como parcial (`proximo_bloco` aponta para ele) e indique a etapa Continuar ("continuar minha alma").
- Quando os 8 blocos estiverem concluídos: diga que a entrevista terminou e que o próximo passo é a etapa Gerar ("gerar minha alma").
