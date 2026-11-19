---
name: protocolo
description: "Leva a peça processual do PDF integral dos autos até a versão pronta para protocolo: prazo, leitura folha a folha, pesquisa de precedentes, redação e auditoria de cada citação contra os autos, antes da revisão final do advogado. Use quando pedir prepara para protocolar, faz a peça a partir dos autos e confere, calcula o prazo e faz a peça, auditoria antes do protocolo. Para só montar ou formatar uma peça já definida, use peticao."
---

# Protocolo: da íntegra dos autos à peça pronta para protocolar

Esta skill nasceu de uma releitura fria. Num caso de treino fictício (réu R.), a peça parecia pronta e a revisão achou: a data da citação, que faltava para calcular o prazo; a inscrição de quem assina; uma palavra entre aspas que não estava no depoimento; e um precedente descrito além do que a ementa permitia afirmar. Tudo foi corrigido antes de a peça ser dada como pronta. A skill transforma aquele percurso em rotina.

Os exemplos abaixo usam esse caso fictício: dois policiais que divergem no horário (14h e 16h), no local (km 32 e km 45), em quem estava na cabine e no volume da carga (28 m³ e 32 m³), e uma denúncia que pegou o horário de uma versão e o volume da outra.

## Regra-mestre

> A peça só sai com o selo PRONTA PARA PROTOCOLO quando cada documento, cada página e cada trecho entre aspas tiver sido conferido contra o PDF dos autos, por script e por leitura. A assinatura continua sendo do advogado: a skill entrega a peça e o relatório de conferência; quem protocola revisa.

Nada de "conferi por amostragem". Ou confere tudo, ou declara o que ficou sem conferir.

## O que trabalha junto, nesta ordem

1. A skill `anti-alucinacao`: roda por cima de tudo.
2. As skills `cronologia-probatoria` ou `mapa-de-provas`: na fase de leitura.
3. A skill `peticao` e o `escritorio.json`: na montagem do .docx.
4. A sua Alma Jurídica (skill `alma-juridica`), se estiver na pasta: na redação.
5. Um conector de jurisprudência (ex.: TribuJus), se houver: na pesquisa de precedentes. Sem conector, pesquisar nos portais oficiais dos tribunais, com link para cada julgado. O que não for confirmado em fonte oficial fica como [PESQUISAR PRECEDENTE: tema].

---

## Antes da primeira peça: a ficha do escritório

Procurar na pasta do projeto o arquivo `protocolo-ficha.md`. Se não existir, fazer estas perguntas uma única vez, gravar as respostas nesse arquivo e seguir. Se existir, ler e não perguntar de novo.

1. **Área e tribunal**: em que área o escritório mais peticiona e em quais tribunais (o do caso, o de segundo grau, os superiores).
2. **Órgãos julgadores**: as turmas ou câmaras que costumam julgar os casos do escritório.
3. **Endereço das folhas**: como os autos desse tribunal numeram os documentos (por exemplo `Num. <ID> - Pág. <n>`, "fls.", "evento"). Pedir um exemplo copiado de um rodapé.
4. **Quem assina**: ler do `escritorio.json` (skill `peticao`); se não existir, perguntar e criar. Registrar na ficha só quem assina por padrão.
5. **Regras de prazo da área**: os prazos que o escritório mais usa e a forma de contagem, como o advogado as informa. Registrar ao lado de cada uma: "informada pelo advogado em <data>; conferir a redação vigente".
6. **Formato da peça**: segue o design system da skill `peticao`; o nome do escritório vem do `escritorio.json`.

A ficha é do advogado. A skill usa o que está nela e não completa nada de memória. Quando o advogado corrigir um dado, atualizar a ficha.

## Fase 0: entrada e prazo (antes de qualquer análise)

1. Confirmar que o PDF chegou e contar as páginas.
2. Ler as primeiras páginas: em geral é o índice do processo, com identificador, data e tipo de cada documento.
3. Ler as últimas páginas: certidão de publicação, intimações, manifestações da parte contrária. É ali que mora o prazo.
4. Calcular o prazo com as datas reais dos autos, pelas regras da ficha:
   - identificar a data da disponibilização, a da publicação e o primeiro dia da contagem;
   - aplicar a forma de contagem registrada na ficha para a área do caso (dias úteis ou corridos, o que acontece quando o termo cai em dia sem expediente);
   - listar os feriados e as suspensões de expediente do intervalo, e dizer de onde veio cada um;
   - mostrar a conta dia a dia, com o dia da semana de cada marco;
   - indicar a regra usada e de onde ela veio (a ficha, ou o advogado nesta conversa).
   Usar a regra da ficha ou, na falta dela, o bloco da área abaixo. Se nenhum dos dois cobrir a peça, perguntar ao advogado antes de calcular. Nunca preencher prazo ou artigo de memória.

   **Regra que vale em qualquer área, conferida na fonte oficial** (Súmula 310 do STF, texto no portal do STF): se a intimação, ou a publicação com efeito de intimação, ocorre na sexta-feira, o prazo começa na segunda-feira seguinte; sem expediente na segunda, começa no primeiro dia útil depois dela.

### Regras de prazo por área (texto conferido no site do Planalto em 16/11/2026)

Estas regras são o ponto de partida. A lei muda: antes de usar, abrir o dispositivo na fonte oficial e confirmar a redação. O que a ficha do escritório disser de diferente, para um rito específico, prevalece, com a mesma ressalva. Prazo em dobro, prerrogativas de quem litiga e regras de ritos especiais não estão aqui: perguntar ao advogado.

**Processo penal (Código de Processo Penal)**
- Contagem: prazos contínuos, que não se interrompem por férias, domingo ou feriado (art. 798, caput).
- Não entra o dia do começo; entra o do vencimento (art. 798, § 1º).
- Prazo que termina em domingo ou feriado vai para o dia útil imediato (art. 798, § 3º).
- Suspensão de 20 de dezembro a 20 de janeiro, com exceções, entre elas réu preso e medidas urgentes (art. 798-A): ler as exceções antes de contar com a suspensão.
- Embargos de declaração: 2 dias contra sentença (art. 382) e 2 dias contra acórdão, contados da publicação (art. 619).

**Processo civil (Código de Processo Civil)**
- Contagem: só dias úteis, e só para prazos processuais (art. 219).
- Suspensão de 20 de dezembro a 20 de janeiro (art. 220).
- Não entra o dia do começo; entra o do vencimento (art. 224, caput).
- A data de publicação é o primeiro dia útil seguinte ao da disponibilização no Diário da Justiça eletrônico, e a contagem começa no primeiro dia útil depois da publicação (art. 224, §§ 2º e 3º).
- Recursos em geral: 15 dias para interpor e para responder, exceto embargos de declaração (art. 1.003, § 5º).
- Embargos de declaração: 5 dias (art. 1.023).

**Processo do trabalho (CLT)**
- Contagem: dias úteis, sem o dia do começo e com o do vencimento (art. 775).
- Recurso ordinário: 8 dias (art. 895, I).
- Embargos de declaração: 5 dias (art. 897-A).

Em toda conta de prazo, dizer qual desses blocos foi usado, citar o artigo e manter o aviso: conferir no calendário do tribunal, que tem feriados locais e suspensões que a skill não conhece.
5. Informar o prazo ao advogado na primeira mensagem, com a data-limite e o dia da semana, e avisar que a conta precisa ser conferida no calendário do tribunal.

A skill não conhece suspensões de prazo nem feriados locais que não estejam nos autos ou que o advogado não informe. O prazo calculado é sempre um rascunho para conferência.

## Fase 1: extração e mapa documento/página

Processos eletrônicos costumam trazer no rodapé de cada folha o identificador do documento e a página (por exemplo `Num. <ID> - Pág. <n>`). Esse é o endereço que a peça vai citar. Construir o mapa antes de ler.

```bash
W=/tmp/protocolo-autos   # pasta de trabalho temporária; nunca dentro de autos/
mkdir -p "$W" && pdftotext -layout autos.pdf "$W/autos.txt"
```

```python
# clean.txt: uma página por bloco, sem linhas de assinatura eletrônica
import re, os
W='/tmp/protocolo-autos'
t=open(f'{W}/autos.txt').read().split('\f')
out=[]
for i,p in enumerate(t):
    ls=[l.strip() for l in p.splitlines()]
    ls=[l for l in ls if l and not re.match(r'^(https://|Número do documento|[A-Za-z0-9+/=]{60,}$)',l)]
    out.append(f'=====PAG {i+1}\n'+'\n'.join(ls))
open(f'{W}/clean.txt','w').write('\n'.join(out))
```

```python
# mapa: página do PDF -> (ID, pág. no sistema). Ajuste a expressão ao rodapé do seu tribunal.
for i,p in enumerate(t):
    m=re.findall(r'Num\.\s*(\d+)\s*-\s*P[áa]g\.\s*(\d+)',p)
    if m: print(i+1, m[-1])
```

- Se o rodapé do seu tribunal for diferente (por exemplo "fls." ou "evento"), adaptar a expressão e avisar o advogado de qual padrão foi usado.
- Listar as páginas sem texto (menos de 80 caracteres). São imagens: renderizar e ler visualmente quando o conteúdo importar.
- Digitalizações antigas vêm com reconhecimento de texto ruim. Buscar por palavra-chave e abrir a página inteira antes de usar.

## Fase 2: leitura folha a folha, na ordem certa

1. **Decisão atacada** (acórdão, sentença, decisão): inteira, com relatório, fundamentação e dispositivo. Anotar cada afirmação de fato com documento e página.
2. **Peças das partes**: inicial ou denúncia, defesa, alegações, recurso, contrarrazões, parecer. Registrar o que cada lado sustentou e onde.
3. **Atas e decisões interlocutórias**: preliminares rejeitadas, provas deferidas, o que ficou sem resposta.
4. **Certidões e documentos oficiais**: conferir número por número e data por data com o que a decisão citou.
5. **Prova documental**: relatórios, laudos, ofícios, contratos, extratos.

Para cada afirmação de fato da decisão atacada, perguntar: **o documento que ela cita diz isso, e só isso?** É nessa pergunta que aparecem:

- fundamento desmentido pelo próprio documento citado;
- "a parte não fez" contra uma peça em que ela fez;
- documento usado pela metade: a parte que serve é citada, a que não serve é silenciada;
- versão montada com pedaços: no caso de treino, a denúncia afirma "por volta das 14h" e "32 m³". O horário é de um depoimento e o volume é do outro, e os dois depoimentos se contradizem nos dois pontos.

Montar o quadro de divergências com uma coluna por documento e uma linha por ponto (horário, local, quem estava presente, quantidade), cada célula com a folha.

Produzir a cronologia e a lista de lacunas, cada linha com documento, página e trecho literal.

## Fase 3: pesquisa de precedentes

Com conector de jurisprudência (ex.: TribuJus), seguir os passos abaixo com as ferramentas dele. Sem conector, fazer as mesmas buscas nos portais oficiais e pular o passo 4 (jurimetria).

1. `buscar_jurisprudencia`: uma busca por tese, no tribunal do caso, no de segundo grau e nos superiores (os da ficha). Ler o inteiro teor (`ler_julgado`) de tudo o que for citado. Respeitar o tipo de decisão: monocrática nunca vira acórdão, e sentença não é precedente de tribunal.
2. Procurar julgado do **mesmo órgão julgador e do mesmo tipo de fato**. Serve para distinguir (o que lá havia e aqui falta) e para prever a reação do colegiado.
3. Procurar ativamente o precedente **contrário** à tese. Se a tese não se sustenta nos tribunais superiores, dizer isso e descartá-la, ou enfrentá-la com distinção.
4. Se houver conector com jurimetria, rodar por eixo da peça, nestes recortes:
   - o tribunal inteiro (classe + tese + últimos 5 anos);
   - cada órgão julgador da ficha;
   - o relator do órgão competente (filtro por parte do nome; se a amostra vier muito pequena, testar outra grafia do nome);
   - os tribunais superiores, por tese e por turma.
5. Se a jurimetria estourar o tempo com o filtro de data, refazer sem a data e **declarar** que o recorte de 5 anos não foi aplicado.
6. Reproduzir sempre: "X classificados de N", o recorte estrito e o amplo, a linha de base do órgão e todos os avisos da ferramenta. Nenhuma taxa vira probabilidade do caso.
7. Só entra na peça o julgado que a ferramenta devolveu ou que foi confirmado em fonte oficial, com tribunal, número, data e link oficial. O que não foi encontrado fica como [PESQUISAR PRECEDENTE: tema]. Nunca completar número, data ou relator de memória. Não encontrar não significa que o precedente não exista: dizer o alcance da busca.

## Fase 4: resumo analítico e aprovação

Antes de redigir, entregar em uma mensagem curta:

- a peça cabível e o prazo;
- os vícios da decisão, do mais forte ao mais fraco, cada um com documento e página;
- as teses descartadas e por quê;
- os precedentes encontrados, a favor e contra;
- se houve jurimetria, a taxa histórica por eixo com o tamanho da amostra ao lado (sem conector, omitir este item);
- as perguntas que só o cliente ou o advogado respondem (no máximo 3);
- **quem assina a peça** (ver abaixo).

Aguardar aprovação. Se o advogado mandar redigir direto, redigir, mas registrar no relatório final que a etapa foi abreviada a pedido.

Informação nova trazida pelo advogado **não entra na peça como fato** se não estiver nos autos. Entra como inferência documental, com a ressalva, ou fica fora.

### Quem assina

Perguntar sempre, em toda peça, junto com o resumo analítico ou, se a redação for direta, na primeira mensagem. Oferecer as opções a partir da lista fechada da ficha:

- só quem assina por padrão;
- todos os advogados da ficha;
- outra combinação (o advogado digita os nomes).

Nomes e inscrições saem só da ficha ou do que o advogado digitar. Nunca presumir todas as assinaturas nem inventar inscrição. Se o advogado não responder e o prazo exigir a entrega, montar só com quem pediu a peça e registrar a ressalva no relatório. Sem ficha e sem resposta, o campo fica [NÃO IDENTIFICADO].

## Fase 5: redação

Pelo design system da skill `peticao` e pelas regras do escritório:

- tese mais forte primeiro; concessão honesta antes do ataque;
- cada argumento parte de "no documento X, página Y, a decisão afirma...";
- citação literal entre aspas só do que estiver no PDF; o resto em discurso indireto;
- precedente em discurso indireto, salvo quando o trecho foi lido no inteiro teor;
- no máximo 2 precedentes por tópico;
- prequestionamento expresso, dispositivo por dispositivo, quando houver recurso excepcional no horizonte;
- pedidos que acompanham os tópicos, na mesma ordem.

Montar o .docx, converter para PDF e conferir **todas** as páginas renderizadas (quebras, assinatura sozinha na última página, tabelas legíveis).

## Fase 6: auditoria de protocolo (obrigatória, por script e por leitura)

### 6.1 Toda citação entre aspas existe nos autos

```python
import re, os, docx   # python-docx: se faltar, pedir autorização antes de instalar
W='/tmp/protocolo-autos'
peca=' '.join(p.text for p in docx.Document('peca.docx').paragraphs)
T=re.sub(r'\s+',' ',open(f'{W}/clean.txt').read()).lower()
for q in re.findall(r'[“"](.+?)[”"]',peca):
    ok=re.sub(r'\s+',' ',q).lower() in T
    print('OK ' if ok else 'XX ',q[:100])
```

O que der XX: ou está em página-imagem (conferir visualmente e registrar), ou é erro (corrigir).

### 6.2 Toda citação está no documento e na página indicados

Localizador: recebe `[ID, pág, palavra-chave]` e mostra o trecho da página.

```python
import re,sys,json,os
W='/tmp/protocolo-autos'
L=open(f'{W}/clean.txt').read().split('\n'); pages=[];cur=[]
for l in L:
    if l.startswith('=====PAG'):
        if cur: pages.append(cur)
        cur=[l]
    else: cur.append(l)
pages.append(cur); D={}
for pg in pages:
    m=re.findall(r'Num\. (\d+) - Pág\. (\d+)',' '.join(pg))
    if m: D[(m[-1][0],int(m[-1][1]))]=re.sub(r'\s+',' ',' '.join(pg[1:]))
for i,p,kw in json.loads(sys.argv[1]):
    t=D.get((i,p),''); h=t.lower().find(kw.lower())
    print(i,p,kw,'OK' if h>=0 else 'NÃO ACHADO', t[max(0,h-150):h+150] if h>=0 else '')
```

Extrair da peça todas as frases com remissão a documento ou página e rodar cada uma no localizador. Trecho que atravessa duas páginas: citar as duas.

### 6.3 Toda paráfrase é fiel (o script não pega isto)

Ler o trecho original ao lado da paráfrase. Tipos de erro que mais aparecem:

| Erro | Como aparece | Correção |
|---|---|---|
| Palavra entre aspas que não está no documento | a peça põe na boca da testemunha uma palavra que o depoimento não traz (caso de treino) | tirar as aspas ou transcrever o trecho como está |
| Precedente descrito além da ementa | "o tribunal reconheceu a nulidade" quando a ementa só afasta um argumento (caso de treino) | descrever só o que o inteiro teor decide |
| Sujeito trocado | a frase da peça inverte quem fez o quê | transcrever o trecho como está |
| Palavra omitida que muda o alcance | "não há correspondência" | o documento dizia "correspondência exata" |
| Número de uma versão tratado como fato | "a carga era de 32 m³" | "um depoimento fala em cerca de 28 m³ (fls. 7) e o outro em cerca de 32 m³ (fls. 9)" |
| Dado desfavorável escondido | cita o documento sem a parte que pesa contra | admitir o dado e manter o argumento |
| Inferência como fato | "o endereço não pertence à parte" | "cujo nome indica terceiro" |
| Conteúdo presumido de documento ausente | descreve o que um laudo "deve conter" sem o laudo nos autos | dizer só o que está nos autos e listar o que falta |
| Documento lido pela metade | "o órgão só aponta irregularidade de terceiros" | o mesmo documento também aponta a parte; limitar a frase |
| Generalização | "os depoimentos confirmam" | dizer qual depoimento, em que folha, e o que o outro diz |

### 6.4 Teste do adversário (a falha mais cara)

Para cada tese, escrever a resposta de uma linha que a parte contrária ou o relator daria. Se ela derruba a tese, reescrever com concessão.

Exemplo do caso de treino: a peça afirma "os policiais se contradizem em tudo". Resposta fácil: "os dois confirmam a abordagem, o caminhão e a carga". Correção: admitir o que é comum às duas versões e atacar só os pontos em que divergem, um por um, com a folha.

Outro: a peça afirma "os fatos não ocorreram no período". Resposta fácil: "a maior parte ocorreu no período". Correção: admitir isso e atacar a generalização, não o fato.

Declarar "cota de desconfiança não gasta" depois de achar o primeiro erro e continuar até a última linha. Achar um erro não encerra a conferência.

### 6.5 Conferências finais

- Precedentes: número, órgão, relator e data conferidos no inteiro teor, com o link oficial.
- Súmulas e dispositivos de lei: texto conferido na fonte oficial.
- Cálculos e prazos refeitos com as datas dos autos.
- Nenhuma marca [NÃO IDENTIFICADO] ou [PESQUISAR PRECEDENTE] sobrando sem estar listada no relatório.
- Metadados do .docx: título específico e autoria do advogado ou do escritório que assina.
- Assinatura conforme a escolha do advogado (conferir nomes e OAB no PDF), sem bloco de assinatura isolado do fecho em quebra de página.

## Fase 7: entrega ao advogado

Enviar o .docx e o PDF com nome `<PEÇA>-<Cliente>-<número do processo>.docx` e um relatório curto:

1. **Veredito**: PRONTA PARA PROTOCOLO, ou PRONTA COM RESSALVAS (listar).
2. **Prazo**: data-limite, forma de contagem e o aviso de conferir no calendário do tribunal.
3. **Assinatura**: quem assina e se foi escolha expressa do advogado.
4. **Conferência**: quantas remissões a documento/página e quantas citações entre aspas foram checadas, e quais foram conferidas só visualmente (páginas-imagem).
5. **Corrigido nesta rodada**: cada ajuste, com documento e página.
6. **Pendências do advogado**: o que só ele pode conferir (precedente no site do tribunal, documento fora dos autos, marcas que sobraram).
7. **Pontos frágeis**: as teses que o adversário vai atacar e a concessão já feita.

Nova versão substitui a anterior: dizer "v3, substitui a v2".

## Vedações

- Selar como pronta peça com qualquer XX não explicado na auditoria.
- Citar entre aspas o que não foi encontrado no PDF.
- Afirmar o conteúdo de documento que não está nos autos.
- Omitir dado desfavorável do mesmo documento que se usa a favor.
- Citar precedente que a ferramenta de pesquisa não devolveu, ou completar dados de julgado de memória.
- Apresentar taxa de jurimetria como chance do caso concreto.
- Usar em peça fato que o advogado contou e que não está nos autos.
- Presumir quem assina a peça.
- Dar o prazo como certo sem o aviso de conferência, ou usar regra de prazo que não está na ficha nem foi informada pelo advogado.
- Protocolar: a skill prepara; o advogado revisa e protocola.
