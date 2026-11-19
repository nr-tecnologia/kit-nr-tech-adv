---
name: mapa-de-provas
description: Lê todos os PDFs da pasta autos/ do caso, com agentes em paralelo por grupo de prova, e salva em analise/mapa-de-provas.md a cronologia, cada fato com documento e folha, e a tabela do que não bate entre os documentos. Fecha com um resumo curto do que há de mais forte e dos pontos fracos do nosso lado. Use quando o usuário digitar /mapa-de-provas ou pedir "mapa de provas", "mapeia as provas", "o que os autos provam", "levanta as contradições dos autos".
---

# Mapa de provas

Produz um arquivo: `analise/mapa-de-provas.md`, na pasta do caso em que a sessão está aberta.

## Regras que valem do começo ao fim

1. **`autos/` é somente leitura.** Não altere, renomeie, mova, apague nem crie nada ali. Texto extraído, imagens de página e qualquer arquivo intermediário vão para a pasta temporária da sessão, nunca para `autos/`. Repita esta regra no pedido de cada agente.
2. **Todo fato vem com documento e folha.** Formato: `(nome do documento, fl. N)`. Sem prova nos autos, escreva "sem prova nos autos" e não afirme o fato.
3. **Não presuma.** Não complete lacuna. Não deduza data, valor ou nome que não esteja escrito em documento. Trecho ilegível se registra como "ilegível", com a folha.
4. **Não cite jurisprudência.** O mapa é de fatos e provas. Se um precedente fizer falta, deixe o marcador `[PESQUISAR PRECEDENTE: tema]`.
5. **O CLAUDE.md do caso prevalece.** Leia-o antes de começar. Ele diz qual é o nosso lado e pode trazer regras de citação, de pasta e de redação. Se conflitar com esta skill, siga o CLAUDE.md.
6. **Português direto, frases curtas.**

## Passo 1. Preparar

- Leia o CLAUDE.md do caso, se existir. Identifique o nosso lado (autor, réu, consumidor, empresa etc.). Se nenhum documento disser, pergunte ao usuário antes do resumo final. O resto do trabalho segue sem esperar a resposta.
- Liste todos os PDFs de `autos/`, incluindo subpastas. Anote o número de páginas de cada um.
- Se não houver pasta `autos/` ou ela não tiver PDFs, pare e avise o usuário.
- Se `analise/mapa-de-provas.md` já existir, leia-o antes de sobrescrever. Avise no resumo final que a versão anterior foi substituída.
- Outros arquivos de `analise/` podem ser consultados para orientação. Eles não são prova. Nenhum fato do mapa pode ter como fonte uma análise anterior.

## Passo 2. Dividir em grupos de prova

Agrupe os PDFs pelo tipo de prova, olhando nome e primeira página. Grupos usuais, a adaptar ao caso:

- contratos e documentos de formação do negócio;
- documentos financeiros (extratos, comprovantes, faturas, planilhas);
- comunicações (cartas, e-mails, protocolos, ligações, mensagens, notificações);
- documentos oficiais e de terceiros (boletim de ocorrência, certidões, ofícios, órgãos de proteção ao crédito);
- prova técnica (laudos, perícias, relatórios de sistema, biometria);
- declarações e depoimentos;
- peças processuais (inicial, contestação, réplica, decisões).

Critérios:

- Todo PDF entra em exatamente um grupo. Nenhum fica de fora.
- Entre 3 e 6 grupos. Com poucos documentos, menos grupos.
- PDF muito longo (mais de 100 páginas, em regra) pode ser um grupo sozinho ou ser dividido por intervalo de folhas entre agentes.
- Peças processuais ficam em grupo próprio. O que a parte alega não é fato provado.

## Passo 3. Leitura em paralelo

Dispare um agente por grupo, todos na mesma mensagem, para rodarem em paralelo. Cada agente começa sem contexto. O pedido de cada um precisa conter:

- o caminho absoluto da pasta do caso e a lista dos PDFs do seu grupo;
- qual é o nosso lado;
- as regras 1 a 3 acima, por extenso;
- a ordem de ler **todas as páginas** de cada PDF. Página digitalizada sem texto se lê como imagem ou com OCR, com saída na pasta temporária;
- a regra de numeração de folha (abaixo);
- o formato de devolução (abaixo);
- a ordem de **não gravar nada no caso**. O agente devolve o resultado na resposta. Só o agente principal escreve o mapa.

### Numeração de folha

- Use o número de folha dos autos carimbado ou impresso na página, quando existir.
- Se não existir, use a página do PDF e escreva `p. N` em vez de `fl. N`.
- Não misture os dois sistemas sem avisar. A convenção adotada vai no cabeçalho do mapa.

### Formato de devolução de cada agente

Para cada documento:

1. **Identificação**: arquivo, tipo, quem produziu, data do documento, total de folhas, folhas ilegíveis.
2. **Fatos**: um por linha, com data (ou "sem data no documento"), o fato, a folha e o trecho literal curto entre aspas que o sustenta.
3. **Dados de conferência**: todos os nomes, CPFs/CNPJs, números de contrato, valores, datas, horários, endereços, telefones, contas bancárias e assinaturas, cada um com a folha. São esses dados que permitem cruzar um documento com outro.
4. **Estranhezas internas**: o que não bate dentro do próprio documento.
5. **Natureza**: quem produziu a prova (nós, a parte contrária, terceiro, órgão oficial) e se é documento unilateral.

## Passo 4. Consolidar e cruzar

Este passo é do agente principal. Não o delegue.

- Junte os fatos em ordem cronológica.
- Cruze os dados de conferência entre todos os documentos: mesma data, mesmo valor, mesmo nome, mesmo número, mesmo endereço, mesma conta? Cada diferença vira linha da tabela de divergências.
- Compare o que as peças processuais alegam com o que os documentos mostram. Alegação sem documento que a sustente entra na tabela de divergências ou na lista de lacunas.
- Antes de registrar uma divergência, e antes de apontar qualquer ponto como forte ou fraco, abra o PDF e confira você mesmo as folhas citadas. Erro de leitura de um agente não pode virar contradição dos autos.
- Se um agente falhar ou devolver leitura incompleta, refaça a leitura daquele grupo. Não entregue mapa com documento não lido sem dizer isso com destaque.

## Passo 5. Gravar `analise/mapa-de-provas.md`

Crie a pasta `analise/` se ela não existir. Estrutura do arquivo:

```markdown
# Mapa de provas: [nome do caso]

Data da análise: [data]. Nosso lado: [parte]. Documentos lidos: [N] PDFs, [N] folhas.
Citação: [fl. = folha dos autos | p. = página do PDF].

## 1. Documentos lidos

| # | Documento | Tipo | Quem produziu | Data | Folhas | Grupo |

## 2. Cronologia

| Data | Fato | Documento e folha | Trecho literal |

Fatos sem data ficam em lista própria ao final da seção.

## 3. Fatos por tema

Um bloco por tema do caso. Cada fato em uma frase, com documento e folha.

## 4. O que não bate entre os documentos

| # | Ponto | Documento A diz (fl.) | Documento B diz (fl.) | A quem favorece |

## 5. Sem prova nos autos

Fatos alegados ou relevantes que nenhum documento sustenta. Diga quem alegou e onde.
Folhas ilegíveis e documentos mencionados mas não juntados entram aqui.

## 6. Pontos fortes e pontos fracos do nosso lado

Fortes: [3 a 5 linhas, cada uma com documento e folha]
Fracos: [3 a 5 linhas, cada uma com documento e folha, ou "sem prova nos autos"]
```

Na coluna "A quem favorece", escreva "a nós", "à parte contrária" ou "indefinido", com uma frase de motivo. Não esconda divergência que nos prejudica.

## Passo 6. Conferir e responder

Antes de responder:

- Todo PDF de `autos/` aparece na seção 1?
- Toda linha da cronologia e da tabela de divergências tem documento e folha?
- Há alguma data, valor ou nome no mapa que não esteja em documento? Se houver, retire.
- `autos/` continua igual? Compare a lista de arquivos com a do Passo 1.

Resposta ao usuário, em poucas linhas:

- onde o arquivo foi salvo;
- o que há de mais forte do nosso lado (2 ou 3 pontos, com documento e folha);
- os pontos fracos (2 ou 3 pontos, com documento e folha);
- o que ficou sem leitura ou ilegível, se houver.

Não repita o mapa na resposta.
