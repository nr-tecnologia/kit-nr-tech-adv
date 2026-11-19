# Kit NR Tech Adv

Skills para advogados brasileiros: verificação de citações em fonte oficial, limpeza de rastros de IA no texto, perfil de voz do advogado (Alma Jurídica), cronologia probatória, mapa de provas, petição em .docx com padrão visual profissional e auditoria da peça antes do protocolo. O Claude rascunha; quem revisa, assina e protocola é sempre o advogado.

Publicado por NR Tecnologia · Roney Ribeiro.

## Instalar

1. No Claude (app ou web), procure **Kit NR Tech Adv** no diretório de plugins e adicione.
2. No Claude Code: `/plugin install kit-nr-tech-adv`.
3. As skills aparecem com o prefixo `kit-nr-tech-adv:`. Você pode chamar pelo nome (ex.: `/kit-nr-tech-adv:peticao`) ou só pedir a tarefa, que o Claude aciona a skill certa.

## O que vem dentro

| Skill | Para que serve |
|---|---|
| `anti-alucinacao` | Proíbe citação inventada. Toda jurisprudência, súmula, lei ou número de processo precisa ser confirmada em fonte oficial. |
| `anti-ia` | Tira do texto as marcas de formatação de chat (travessões, bullets, emojis, aspas curvas) e os vícios de estilo de IA. |
| `alma-juridica` | Entrevista em 8 blocos + análise das suas peças, para o Claude escrever com a sua voz. |
| `cronologia-probatoria` | Linha do tempo dos autos em .docx, com documento, folha e trecho literal, matriz de força probatória e mapa de testemunhas. |
| `mapa-de-provas` | Mapeamento rápido em Markdown de uma pasta `autos/`: fatos com documento e folha, e o que não bate entre os documentos. |
| `peticao` | Monta a peça em .docx no padrão visual do kit, com os dados do seu escritório. |
| `protocolo` | Fluxo completo do PDF dos autos até a peça pronta para revisão: prazo, leitura, pesquisa, redação e auditoria de cada citação. |

Agente incluído: `extrator-corpus` (lê suas peças e extrai padrões de voz para a Alma Jurídica).

## Configure seu escritório

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

O `logo` é opcional. Se não criar o arquivo, o Claude pergunta na primeira peça. Sem ele, a peça sai com dados fictícios: não protocole assim.

## O que o plugin executa e acessa

- Não tem hooks nem servidor MCP próprio. Nada roda sozinho.
- O plugin não traz scripts prontos. Algumas skills pedem ao Claude que escreva e rode código na sua sessão para gerar o .docx e conferir os autos. Dependências usadas: Node com a biblioteca `docx` (npm), Python com `python-docx`, poppler (`pdftotext`, `pdftoppm`) e LibreOffice (`soffice`) para converter em PDF. Se faltar alguma, o Claude pode instalá-la na sessão, o que usa a rede.
- A skill `anti-alucinacao` pede ao Claude que confira citações em fontes oficiais na web (sites dos tribunais e do Planalto).
- Se você tiver um conector de jurisprudência instalado (ex.: TribuJus), as skills podem usá-lo na pesquisa. Ele é opcional: sem conector, a pesquisa é feita nos portais oficiais e nenhum percentual de êxito é apresentado.
- Os documentos do caso são processados na sua sessão do Claude. O plugin não os guarda nem os envia a terceiros.

## Regras que valem para todo o kit

- Nenhuma jurisprudência sem fonte oficial conferida. Na dúvida, fica de fora.
- Nada de afirmar o conteúdo de um documento que não foi lido.
- Taxa histórica de julgamento não é probabilidade do caso concreto.
- O Claude rascunha; quem revisa, assina e protocola é você.

## Licença

CC BY-NC 4.0 (veja `LICENSE`): use, adapte e compartilhe com crédito; revenda não é permitida.
