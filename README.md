# Kit NR Tech Adv

Plugin com as skills jurídicas do curso **Dominando o Claude** · NR Tecnologia · Roney Ribeiro.

Kit de skills para advogados brasileiros: protege contra jurisprudência inventada, tira os rastros de IA do texto, ensina o Claude a escrever com a voz do advogado e monta a peça em .docx com padrão visual profissional, sempre com revisão humana antes do protocolo.

## Instalar

1. No Claude (app ou web), procure **Kit NR Tech Adv** no diretório de plugins e adicione. Ou, com o arquivo `.plugin`, abra **Personalizar → Plugins** e envie o arquivo.
2. No Claude Code: `claude plugin install kit-nr-tech-adv` (ou a partir do arquivo/pasta local).
3. As skills aparecem com o prefixo `kit-nr-tech-adv:`. Você pode chamar pelo nome (ex.: `/kit-nr-tech-adv:peticao`) ou só pedir a tarefa, que o Claude aciona a skill certa.

## O que vem dentro

| Skill | Para que serve |
|---|---|
| `anti-alucinacao` | Proíbe citação inventada. Toda jurisprudência, súmula, lei ou número de processo precisa de fonte oficial verificada. |
| `anti-ia` | Tira os rastros de IA do texto (travessões, bullets, emojis, aspas curvas, vícios de estilo) antes de assinar. |
| `alma-juridica` | Alma Jurídica: entrevista em 8 blocos + suas peças para o Claude escrever com a sua voz. |
| `cronologia-probatoria` | Linha do tempo dos autos com documento, folha e trecho literal em cada entrada. |
| `mapa-de-provas` | Cruza fatos alegados com as provas que existem (e as que faltam). |
| `peticao` | Gera a peça em .docx no padrão visual do kit (Palatino, navy/teal, caixa-resumo, callouts, cronologia, KPIs). |
| `protocolo` | Do PDF dos autos até a peça pronta para revisão: prazo, análise, redação e auditoria. |

Agente incluído: `extrator-corpus` (lê suas peças e extrai padrões de voz para a Alma Jurídica).

## Configure seu escritório (skill peticao)

Na pasta do caso, crie `escritorio.json` com os seus dados (modelo em `skills/peticao/escritorio.exemplo.json`):

```json
{
  "nome": "Seu Escritório Advocacia",
  "cidade": "Cidade/UF",
  "advogados": [["Seu Nome", "OAB/UF 00.000"]],
  "endereco": "Rua, número • Bairro • Cidade – UF • CEP",
  "contatos": "(00) 0 0000-0000 • email@seuescritorio.adv.br",
  "logo": "logo.png"
}
```

Se não criar, o Claude pergunta na primeira peça. Sem o arquivo, a peça sai com dados fictícios: não protocole assim.

## O que o plugin executa e acessa

- Não tem hooks nem servidor MCP próprio. Nada roda sozinho.
- O plugin não traz scripts. Para gerar o .docx, a skill `peticao` pede ao Claude que escreva um gerador na pasta do caso com a biblioteca `docx` do npm, seguindo o design system incluso. Tudo fica na pasta do caso.
- Nada é enviado para a internet pelo plugin. Se você tiver o conector TribuJus (ou outra base de jurisprudência) instalado, as skills pedem ao Claude que confira os julgados por ele; sem conector, a conferência é na fonte oficial do tribunal.
- Os documentos do caso são lidos só na sua sessão do Claude e não são guardados pelo plugin.

## Regras que valem para todo o kit

- Nenhuma jurisprudência sem fonte oficial conferida. Na dúvida, fica de fora.
- O Claude rascunha; quem revisa, assina e protocola é você.
- Dados de cliente ficam no seu computador. Não suba autos sigilosos sem necessidade.

Licença CC BY-NC 4.0 (veja `LICENSE`): use, adapte e compartilhe com crédito; revenda não é permitida. Fundamento ético: art. 34, XIV, EOAB.
