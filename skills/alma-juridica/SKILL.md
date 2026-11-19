---
name: alma-juridica
description: "Constrói e mantém a Alma Jurídica do advogado, o perfil que faz o Claude escrever com a voz dele: entrevista em 8 blocos (A a H) retomável, geração de ALMA.md, VOZ.md e MEMORIA.md cruzando a entrevista com as peças autorais, e registro de correções de voz como regra permanente. Use quando pedir para construir, capturar ou criar a alma jurídica, extrair o estilo ou perfil autoral, continuar ou retomar a entrevista, gerar ou finalizar a alma, ou quando disser que um texto não soa como ele (isso não é minha voz, eu nunca escreveria assim, anota que eu não uso X)."
---

# Alma Jurídica

A Alma Jurídica é o perfil de escrita do advogado. São quatro etapas. Descubra
qual o pedido aciona, leia o arquivo da etapa e siga as instruções dele.

| Etapa | Quando | Arquivo |
|---|---|---|
| **Iniciar** | Não existe pasta `ALMA-*/` com `entrevista-progresso.md`, e ele quer começar | `references/iniciar.md` |
| **Continuar** | Existe entrevista em andamento ou ele pede para retomar | `references/continuar.md` |
| **Gerar** | Os 8 blocos estão concluídos e ele pede os arquivos | `references/gerar.md` |
| **Corrigir** | Já existe `MEMORIA.md` e ele aponta algo que não é a voz dele | `references/corrigir.md` |

Antes de iniciar, verifique a pasta de trabalho: se já houver entrevista em
andamento, vá para **Continuar** em vez de recomeçar.

Arquivos de apoio: `references/roteiro-entrevista.md` (perguntas e blocos A a H)
e `references/templates.md` (modelos de ALMA.md, VOZ.md e MEMORIA.md).

Para analisar as peças autorais em segundo plano, use o agente `extrator-corpus`
deste plugin.
