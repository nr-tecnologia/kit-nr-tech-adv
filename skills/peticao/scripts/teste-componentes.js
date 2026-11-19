/**
 * teste-componentes.js — regressão visual da biblioteca peca.js
 * Gera uma peça-amostra com todos os componentes, para conferir o padrão
 * após qualquer alteração.
 *
 *   node scripts/teste-componentes.js
 *   python3 scripts/fix_docx.py teste-peca.docx
 */
const NR = require("./peca.js");
const b = [];

b.push(NR.enderecamento("AO JUÍZO DA 2ª VARA GENÉRICA DA COMARCA DE EXEMPLO"));
b.push(NR.ref("Autos n.º 0000000-00.0000.0.00.0000 — Classe processual"));
b.push(NR.ref("Autor: Parte autora"));
b.push(NR.ref("Réu: Parte ré"));
b.push(NR.titulo("NOME DA PEÇA"));
b.push(NR.subtitulo("Objeto da peça — nome da parte"));
b.push(NR.gap());
b.push(NR.resumo([
  { label: "A CONTROVÉRSIA", texto: "Texto de extensão média, o bastante para ocupar quatro ou cinco linhas na coluna estreita e permitir conferir o comportamento da justificação." },
  { label: "A TESE", texto: "Segundo bloco, para verificar se os rótulos permanecem em linha única e se os textos iniciam na mesma altura." },
  { label: "O PEDIDO", texto: "Terceiro bloco, fechando a caixa-resumo de três colunas." },
]));
b.push(NR.gap());

b.push(NR.topico("1 — TÓPICO DE PRIMEIRO NÍVEL COM TÍTULO LONGO, PARA CONFERIR JUSTIFICAÇÃO E ENTRELINHA"));
b.push(NR.p("Parágrafo de corpo com **negrito**, *itálico* e extensão suficiente para ocupar mais de duas linhas, verificando recuo de primeira linha, justificação e entrelinha de 1,5."));
b.push(NR.gap());
b.push(NR.callout("CALLOUT CURTO", "Bloco breve, que deve sair alinhado à esquerda."));
b.push(NR.gap());
b.push(NR.callout("CALLOUT LONGO",
  "Bloco extenso, com texto suficiente para ultrapassar o limiar de quatrocentos caracteres e, portanto, sair justificado. Serve para conferir se o alinhamento automático está discriminando corretamente os dois casos, se o filete lateral se mantém e se nenhuma palavra encosta na linha vertical em qualquer das linhas do parágrafo.",
  "Segundo parágrafo do mesmo callout, para verificar o espaçamento interno entre blocos."));
b.push(NR.gap());

b.push(NR.sub("1.1 — Subtópico de segundo nível"));
b.push(NR.p("Parágrafo sob subtópico."));
b.push(NR.gap());
b.push(NR.cronologia([
  { data: "01/01/2020", evento: "Evento inicial", glosa: "com glosa" },
  { data: "15/06/2022", evento: "Evento intermediário, com texto longo o bastante para quebrar em duas linhas e permitir conferir o alinhamento vertical da coluna de data" },
  { data: "—", evento: "Marco em destaque", glosa: "nunca ocorreu", destaque: true },
]));
b.push(NR.gap());
b.push(NR.julgado({
  sigla: "STJ",
  tese: "Tese-síntese do julgado, com extensão suficiente para quebrar em duas linhas e permitir conferir se a segunda linha respeita o recuo e não encosta no filete lateral.",
  itens: [
    "Primeiro item, com **trecho destacado** no meio, extenso o bastante para justificar.",
    "Segundo item.",
  ],
  referencia: "(Referência do julgado — órgão, data)",
}));
b.push(NR.gap());
b.push(...NR.barras([
  { label: "Grandeza menor", valor: 26.07, exibicao: "26,07" },
  { label: "Grandeza maior, com rótulo longo", valor: 32.79, exibicao: "32,79", destaque: true },
], "Fonte: origem dos dados."));
b.push(NR.gap());
b.push(NR.kpi([
  { label: "RÓTULO CURTO", valor: "Valor A" },
  { label: "RÓTULO UM POUCO MAIS LONGO", valor: "Valor B" },
  { label: "TERCEIRO RÓTULO", valor: "Valor C", destaque: true, grande: true },
]));
b.push(NR.fonte("Fonte: origem dos dados dos cartões."));
b.push(NR.gap());

b.push(NR.topico("2 — DOS PEDIDOS"));
b.push(NR.p("Diante do exposto, requer:", { noIndent: true }));
b.push(NR.item("a)", "primeiro pedido, com **destaque** e extensão suficiente para quebrar linha e permitir conferir o recuo pendente;"));
b.push(NR.item("b)", "segundo pedido."));
b.push(NR.item("(i)", "formato alternativo de enumeração."));

b.push(...NR.fecho());
b.push(...NR.assinaturas());

NR.build(b, {
  title: "Teste de componentes — peticao v2",
  description: "Regressão visual da biblioteca",
  out: "teste-peca.docx",
}).then((f) => console.log("gerado:", f));
