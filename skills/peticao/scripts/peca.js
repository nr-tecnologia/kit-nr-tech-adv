/**
 * peca.js — Biblioteca de componentes do padrão visual de petição (Kit NR Tech Adv)
 * Fonte da verdade: references/design-system.md
 *
 * Uso:
 *   const NR = require("./peca.js");
 *   const body = [];
 *   body.push(NR.enderecamento("AO JUÍZO ..."));
 *   ...
 *   NR.build(body, { title: "...", out: "peca.docx" });   // lê escritorio.json da pasta do caso
 */
const fs = require("fs");
const path = require("path");

// Dados do escritório: escritorio.json na pasta atual (pasta do caso), ou caminho em NR_ESCRITORIO.
// Sem arquivo, usa o "Escritório Modelo" fictício do exemplo.
function carregarEscritorio(arq) {
  const cands = [arq, process.env.NR_ESCRITORIO, path.join(process.cwd(), "escritorio.json"), path.join(__dirname, "..", "escritorio.exemplo.json")].filter(Boolean);
  for (const c of cands) { try { return JSON.parse(fs.readFileSync(c, "utf8")); } catch (e) {} }
  return { nome: "Escritório Modelo", cidade: "Cidade/UF", advogados: [["NOME DO ADVOGADO", "OAB/UF 00.000"]], endereco: "", contatos: "" };
}
let ESC = carregarEscritorio();
const {
  Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, BorderStyle, WidthType, TableLayoutType,
  VerticalAlign, PageNumber, ShadingType,
} = require("docx");

// ── Paleta ───────────────────────────────────────────
const NAVY = "0E2841";
const TEAL = "0F4761";
const BODY = "1A1A1A";
const SEPIA = "5F5A53";
const BEIGE = "CFCBC4";
const FILL = "E8E5E0";
const F = "Palatino Linotype";
const W = 8787; // largura útil

const NONE = { style: BorderStyle.NONE, size: 0, color: "auto" };
const NOBORDERS = { top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: NONE, insideVertical: NONE };
// grade interna do modelo: insideH/insideV single sz4 color auto (as celulas sobrescrevem quando preciso)
const HAIR = { style: BorderStyle.SINGLE, size: 4, color: "auto" };
const INSIDE = { top: NONE, bottom: NONE, left: NONE, right: NONE, insideHorizontal: HAIR, insideVertical: HAIR };

// ── Inline markup: **negrito**, *itálico* ────────────
// Alinhamento automatico: blocos curtos ficam a esquerda (justificar
// estica as palavras e denuncia acabamento ruim); blocos longos, justificados.
// Limiares em caracteres, calibrados por bloco:
//   resumo 150 · callout 400 · julgado (tese e itens) 90
function autoAlign(textos, limite) {
  const total = textos.reduce((a, t) => a + t.length, 0);
  return total >= limite ? AlignmentType.JUSTIFIED : AlignmentType.LEFT;
}

function runs(text, base) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), font: F, ...base }));
    const t = m[0];
    if (t.startsWith("**")) out.push(new TextRun({ text: t.slice(2, -2), font: F, bold: true, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), font: F, italics: true, ...base }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), font: F, ...base }));
  return out;
}

// ── Wrapper de tabela externa invisível ──────────────
function wrap(inner) {
  return new Table({
    width: { size: W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    borders: INSIDE,
    margins: { left: 10, right: 10 },
    columnWidths: [W],
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        width: { size: W, type: WidthType.DXA },
        margins: { top: 0, left: 0, bottom: 0, right: 0 },
        children: [inner],
      })],
    })],
  });
}

// ═══ COMPONENTES ═════════════════════════════════════

/** 4.1 Endereçamento */
const enderecamento = (t) => new Paragraph({
  alignment: AlignmentType.JUSTIFIED,
  spacing: { after: 260, line: 320 },
  children: [new TextRun({ text: t, font: F, size: 24, bold: true, color: NAVY, characterSpacing: 20 })],
});

/** 4.2 Linha de referência processual */
const ref = (t, o = {}) => new Paragraph({
  spacing: { after: 70, line: 360 },
  children: [new TextRun({ text: t, font: F, size: 22, bold: true, color: TEAL, allCaps: o.caps !== false })],
});

/** 4.3 Título da peça */
const titulo = (t) => new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { before: 400, after: 240 },
  children: [new TextRun({ text: t, font: F, size: 28, bold: true, color: NAVY, characterSpacing: 60 })],
});

/** 4.4 Subtítulo */
const subtitulo = (t) => new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 120 },
  children: [new TextRun({ text: t, font: F, size: 24, italics: true, color: SEPIA })],
});

/** 4.6 Tópico de 1º nível */
const topico = (t) => new Paragraph({
  keepNext: true, keepLines: true,
  alignment: AlignmentType.JUSTIFIED,
  spacing: { before: 380, after: 180, line: 360 },
  children: [new TextRun({ text: t, font: F, size: 26, bold: true, color: TEAL, characterSpacing: 40 })],
});

/** 4.7 Subtópico */
const sub = (t) => new Paragraph({
  keepNext: true, keepLines: true,
  alignment: AlignmentType.JUSTIFIED,
  spacing: { before: 260, after: 140, line: 360 },
  children: [new TextRun({ text: t, font: F, size: 24, bold: true, color: NAVY })],
});

/** 4.8 Corpo */
const p = (t, o = {}) => new Paragraph({
  alignment: AlignmentType.JUSTIFIED,
  spacing: { before: 100, after: 100, line: 360 },
  indent: o.noIndent ? undefined : { firstLine: 851 },
  children: runs(t, { size: 24, color: BODY }),
});

/** 4.14 Item de enumeração / alínea */
const item = (marca, t) => new Paragraph({
  alignment: AlignmentType.JUSTIFIED,
  spacing: { before: 90, after: 90, line: 340 },
  indent: { left: 851, hanging: 340 },
  children: [
    new TextRun({ text: marca + " ", font: F, size: 24, color: BODY }),
    ...runs(t, { size: 24, color: BODY }),
  ],
});

/** Espaçador antes/depois de elemento gráfico */
const gap = () => new Paragraph({ spacing: { before: 140, after: 140 }, children: [] });

/** 4.15 Fecho */
function fecho(local = `${ESC.cidade || "Cidade/UF"}, data certificada pelo Sistema.`) {
  const l = (t) => new Paragraph({
    alignment: AlignmentType.JUSTIFIED, keepNext: true, keepLines: true,
    spacing: { line: 360 }, indent: { firstLine: 851 },
    children: [new TextRun({ text: t, font: F, size: 24, color: BODY })],
  });
  return [
    l("Nestes termos,"), l("pede deferimento."),
    new Paragraph({
      alignment: AlignmentType.RIGHT, keepNext: true, keepLines: true,
      spacing: { before: 420 },
      children: [new TextRun({ text: local, font: F, size: 24, color: BODY })],
    }),
  ];
}

/** 4.16 Assinatura */
function assinatura(nome, oab, first = false) {
  // keepNext em todo o bloco: impede que uma assinatura solta caia sozinha
  // na pagina seguinte quando o rodape da peca fica proximo da quebra.
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER, keepNext: true, keepLines: true,
      spacing: { before: first ? 420 : 200, after: 40 },
      children: [new TextRun({ text: "──────────────────────────────", font: F, size: 18, color: BEIGE })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, keepNext: true, keepLines: true,
      spacing: { after: 30 },
      children: [new TextRun({ text: nome, font: F, size: 24, bold: true, color: NAVY, characterSpacing: 30 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER, keepNext: true, keepLines: true,
      children: [new TextRun({ text: oab, font: F, size: 18, color: TEAL, characterSpacing: 20 })],
    }),
  ];
}

const ADVOGADOS = () => (ESC.advogados || []).map(([n, o]) => [String(n).toUpperCase(), o]);
const assinaturas = (lista = ADVOGADOS()) =>
  lista.flatMap(([n, o], i) => assinatura(n, o, i === 0));

/** 4.5 Caixa-resumo — cols = [{label, texto}, ...] (2 ou 3) */
function resumo(cols) {
  const n = cols.length;
  const cw = n === 3 ? 2742 : 4253;
  const grid = [], cells = [];
  cols.forEach((c, i) => {
    if (i > 0) { grid.push(280); cells.push(new TableCell({ width: { size: 280, type: WidthType.DXA }, margins: { top: 0, left: 0, bottom: 0, right: 0 }, children: [new Paragraph({ children: [] })] })); }
    grid.push(cw);
    cells.push(new TableCell({
      width: { size: cw, type: WidthType.DXA },
      margins: { top: 0, left: 0, bottom: 0, right: 0 },
      children: [
        new Paragraph({
          keepLines: true, spacing: { before: 130, after: 90, line: 260 },
          children: [new TextRun({ text: c.label, font: F, size: 14, bold: true, color: TEAL, characterSpacing: 60 })],
        }),
        new Paragraph({
          keepLines: true, alignment: autoAlign([c.texto], 150),
          spacing: { after: 150, line: 260 },
          children: runs(c.texto, { size: 18, color: BODY }),
        }),
      ],
    }));
  });
  return wrap(new Table({
    width: { size: W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED, borders: NOBORDERS,
    margins: { left: 10, right: 10 }, columnWidths: grid,
    rows: [new TableRow({ cantSplit: true, children: cells })],
  }));
}

/** 4.9 Callout com barra lateral navy */
function callout(label, ...paragrafos) {
  let opts = {};
  if (paragrafos.length && typeof paragrafos[paragrafos.length - 1] === "object") opts = paragrafos.pop();
  const align = opts.alignment || autoAlign(paragrafos, 400);
  const conteudo = [
    new Paragraph({
      keepLines: true, spacing: { before: 40, after: 90, line: 260 },
      children: [new TextRun({ text: label, font: F, size: 14, color: NAVY, characterSpacing: 120 })],
    }),
    ...paragrafos.map((t) => new Paragraph({
      keepLines: true, alignment: align,
      spacing: { after: 40, line: 300 },
      children: runs(t, { size: 22, color: NAVY }),
    })),
  ];
  return wrap(new Table({
    width: { size: W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED, borders: INSIDE,
    margins: { left: 10, right: 10 }, columnWidths: [560, 8227],
    rows: [new TableRow({
      cantSplit: true,
      children: [
        new TableCell({ width: { size: 560, type: WidthType.DXA }, children: [new Paragraph({ children: [] })] }),
        new TableCell({
          width: { size: 8227, type: WidthType.DXA },
          margins: { top: 60, left: 300, bottom: 60, right: 0 },
          borders: { left: { style: BorderStyle.SINGLE, size: 6, color: NAVY } },
          children: conteudo,
        }),
      ],
    })],
  }));
}

/** 4.10 Cronologia — linhas = [{data, evento, glosa?, destaque?}] */
function cronologia(linhas) {
  const rows = linhas.map((l) => new TableRow({
    cantSplit: true,
    children: [
      new TableCell({
        width: { size: 2150, type: WidthType.DXA },
        margins: { top: 130, left: 0, bottom: 130, right: 240 },
        borders: { right: { style: BorderStyle.SINGLE, size: 4, color: NAVY } },
        children: [new Paragraph({
          keepLines: true, alignment: AlignmentType.RIGHT, spacing: { line: 260 },
          children: [new TextRun({ text: l.data, font: F, size: 18, bold: true, color: l.destaque ? NAVY : SEPIA })],
        })],
      }),
      new TableCell({
        width: { size: 6637, type: WidthType.DXA },
        margins: { top: 130, left: 240, bottom: 130, right: 0 },
        children: [new Paragraph({
          keepLines: true, spacing: { line: 260 },
          children: [
            new TextRun({ text: l.evento + (l.glosa ? "  " : ""), font: F, size: 19, color: BODY, bold: !!l.destaque }),
            ...(l.glosa ? [new TextRun({ text: "(" + l.glosa + ")", font: F, size: 16, color: SEPIA })] : []),
          ],
        })],
      }),
    ],
  }));
  return wrap(new Table({
    width: { size: W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED, borders: INSIDE,
    margins: { left: 10, right: 10 }, columnWidths: [2150, 6637], rows,
  }));
}

/** 4.11 Caixa de jurisprudência
 *  { sigla, tese, itens: [ "texto **destaque** texto", ... ], referencia }
 */
function julgado({ sigla, tese, itens = [], referencia }) {
  const kids = [
    new Paragraph({
      keepLines: true, spacing: { before: 120, after: 80, line: 260 }, indent: { left: 146 },
      children: [new TextRun({ text: sigla, font: F, size: 14, bold: true, color: TEAL, characterSpacing: 120 })],
    }),
  ];
  if (tese) kids.push(new Paragraph({
    keepLines: true, alignment: autoAlign([tese], 90),
    spacing: { after: 150, line: 280 }, indent: { left: 146, right: 120 },
    children: [new TextRun({ text: tese, font: F, size: 21, color: NAVY })],
  }));
  itens.forEach((t) => kids.push(new Paragraph({
    keepLines: true, alignment: autoAlign([t], 90),
    spacing: { after: 120, line: 260 }, indent: { left: 146, right: 120 },
    children: runs(t, { size: 19, color: SEPIA }),
  })));
  if (referencia) kids.push(new Paragraph({
    keepLines: true, alignment: AlignmentType.LEFT,
    spacing: { before: 40, after: 130, line: 260 }, indent: { left: 146, right: 120 },
    children: [new TextRun({ text: referencia, font: F, size: 16, italics: true, color: SEPIA })],
  }));
  return wrap(new Table({
    width: { size: W, type: WidthType.DXA },
    layout: TableLayoutType.FIXED, borders: INSIDE,
    margins: { left: 10, right: 10 }, columnWidths: [700, 8087],
    rows: [new TableRow({
      cantSplit: true,
      children: [
        new TableCell({ width: { size: 700, type: WidthType.DXA }, children: [new Paragraph({ children: [] })] }),
        new TableCell({
          width: { size: 8087, type: WidthType.DXA },
          margins: { top: 0, left: 0, bottom: 0, right: 0 },
          children: kids,
        }),
      ],
    })],
  }));
}

/** 4.12 Barras comparativas — linhas = [{label, valor, exibicao, destaque?}] */
function barras(linhas, fonte) {
  const max = Math.max(...linhas.map((l) => l.valor));
  const GW = 3900;
  const rows = linhas.map((l) => {
    const cheio = Math.max(60, Math.round((l.valor / max) * GW));
    const vazio = GW - cheio;
    const seg = (w, fill) => new TableCell({
      width: { size: w, type: WidthType.DXA },
      margins: { top: 0, left: 0, bottom: 0, right: 0 },
      shading: fill ? { type: ShadingType.CLEAR, color: "auto", fill } : undefined,
      children: [new Paragraph({ spacing: { line: 200 }, children: [new TextRun({ text: "", font: F, size: 12 })] })],
    });
    // barra preenchida: navy no destaque, bege nas demais; restante sem preenchimento
    const cor = l.destaque ? NAVY : FILL;
    const cols = vazio > 0 ? [cheio, vazio] : [cheio];
    const cells = vazio > 0 ? [seg(cheio, cor), seg(vazio, null)] : [seg(cheio, cor)];
    const grafico = new Table({
      width: { size: GW, type: WidthType.DXA }, layout: TableLayoutType.FIXED,
      borders: INSIDE, margins: { left: 10, right: 10 }, columnWidths: cols,
      rows: [new TableRow({ cantSplit: true, height: { value: 200, rule: "atLeast" }, children: cells })],
    });
    return new TableRow({
      cantSplit: true,
      children: [
        new TableCell({
          width: { size: 2500, type: WidthType.DXA },
          margins: { top: 80, left: 0, bottom: 80, right: 200 }, verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ keepLines: true, spacing: { line: 260 }, children: [new TextRun({ text: l.label, font: F, size: 18, color: SEPIA })] })],
        }),
        new TableCell({
          width: { size: GW, type: WidthType.DXA },
          margins: { top: 70, left: 0, bottom: 70, right: 0 }, verticalAlign: VerticalAlign.CENTER,
          children: [grafico],
        }),
        new TableCell({
          width: { size: 2387, type: WidthType.DXA },
          margins: { top: 80, left: 100, bottom: 80, right: 0 }, verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({
            keepLines: true, alignment: AlignmentType.RIGHT, spacing: { line: 260 },
            children: [new TextRun({ text: l.exibicao, font: F, size: 18, bold: !!l.destaque, color: l.destaque ? NAVY : BODY })],
          })],
        }),
      ],
    });
  });
  const tabela = wrap(new Table({
    width: { size: W, type: WidthType.DXA }, layout: TableLayoutType.FIXED,
    borders: INSIDE, margins: { left: 10, right: 10 },
    columnWidths: [2500, GW, 2387], rows,
  }));
  return fonte
    ? [tabela, new Paragraph({
        keepLines: true, alignment: AlignmentType.JUSTIFIED, spacing: { before: 90, line: 260 },
        children: [new TextRun({ text: fonte, font: F, size: 16, color: SEPIA })],
      })]
    : [tabela];
}

/** 4.13 Cards de KPI — cards = [{label, valor, destaque?, grande?}]
 *  Duas fileiras: rotulos em cima, valores embaixo. Garante que os valores
 *  fiquem sempre na mesma linha de base, ainda que um rotulo quebre em duas linhas.
 */
function kpi(cards) {
  const n = cards.length;
  const GAP = 280;   // calha entre cartoes
  const PAD = 240;   // respiro depois do filete
  const cw = Math.floor((W - GAP * (n - 1)) / n);

  const grid = [];
  cards.forEach((_, i) => { if (i > 0) grid.push(GAP); grid.push(cw); });

  const vazia = () => new TableCell({
    width: { size: GAP, type: WidthType.DXA },
    margins: { top: 0, left: 0, bottom: 0, right: 0 },
    children: [new Paragraph({ children: [] })],
  });

  const celula = (i, paragrafo, vAlign) => new TableCell({
    width: { size: cw, type: WidthType.DXA },
    borders: i > 0 ? { left: { style: BorderStyle.SINGLE, size: 4, color: BEIGE } } : undefined,
    margins: { top: 0, left: i > 0 ? PAD : 0, bottom: 0, right: 60 },
    verticalAlign: vAlign,
    children: [paragrafo],
  });

  const linhaRotulos = [], linhaValores = [];
  cards.forEach((c, i) => {
    if (i > 0) { linhaRotulos.push(vazia()); linhaValores.push(vazia()); }
    linhaRotulos.push(celula(i, new Paragraph({
      keepLines: true, spacing: { before: 120, after: 60, line: 260 },
      children: [new TextRun({ text: c.label, font: F, size: 14, color: TEAL, characterSpacing: 60 })],
    }), VerticalAlign.BOTTOM));
    linhaValores.push(celula(i, new Paragraph({
      keepLines: true, spacing: { after: 130, line: 260 },
      children: [new TextRun({ text: c.valor, font: F, size: c.grande ? 30 : 26, color: c.destaque ? NAVY : BODY })],
    }), VerticalAlign.TOP));
  });

  return wrap(new Table({
    width: { size: W, type: WidthType.DXA }, layout: TableLayoutType.FIXED,
    borders: NOBORDERS, margins: { left: 10, right: 10 }, columnWidths: grid,
    rows: [
      new TableRow({ cantSplit: true, children: linhaRotulos }),
      new TableRow({ cantSplit: true, children: linhaValores }),
    ],
  }));
}

/** Nota de fonte solta */
const fonte = (t) => new Paragraph({
  keepLines: true, alignment: AlignmentType.JUSTIFIED, spacing: { before: 90, line: 260 },
  children: [new TextRun({ text: t, font: F, size: 16, color: SEPIA })],
});

// ═══ BUILD ═══════════════════════════════════════════
function build(children, opts) {
  if (opts.escritorio) ESC = typeof opts.escritorio === "string" ? carregarEscritorio(opts.escritorio) : opts.escritorio;
  const logoPath = opts.logo || ESC.logo;
  let logo = null;
  if (logoPath) { try { logo = fs.readFileSync(path.isAbsolute(logoPath) ? logoPath : path.join(process.cwd(), logoPath)); } catch (e) { logo = null; } }
  const doc = new Document({
    creator: ESC.nome || "Escritório",
    title: opts.title || "",
    description: opts.description || "",
    styles: { default: { document: { run: { font: F, size: 24, color: BODY } } } },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1836, right: 1418, bottom: 1700, left: 1701, header: 450, footer: 500 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, space: 8, color: BEIGE } },
            children: logo
              ? [new ImageRun({ data: logo, transformation: { width: (ESC.logo_largura || 165), height: (ESC.logo_altura || 69) } })]
              : [new TextRun({ text: String(ESC.nome || "Escritório").toUpperCase(), font: F, size: 22, bold: true, color: NAVY, characterSpacing: 60 })],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER, spacing: { after: 40 },
              border: { top: { style: BorderStyle.SINGLE, size: 3, space: 6, color: BEIGE } },
              children: [],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: ESC.endereco || "", font: F, size: 14, color: SEPIA, characterSpacing: 20 })],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: ESC.contatos || "", font: F, size: 14, color: SEPIA, characterSpacing: 20 })],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER, spacing: { before: 60 },
              children: [
                new TextRun({ text: "— ", font: F, size: 14, color: BEIGE }),
                new TextRun({ children: [PageNumber.CURRENT], font: F, size: 14, color: BEIGE }),
                new TextRun({ text: " —", font: F, size: 14, color: BEIGE }),
              ],
            }),
          ],
        }),
      },
      children,
    }],
  });
  return Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync(opts.out, buf);
    return opts.out;
  });
}

module.exports = {
  NAVY, TEAL, BODY, SEPIA, BEIGE, FILL, F, W, ADVOGADOS,
  enderecamento, ref, titulo, subtitulo, topico, sub, p, item, gap,
  resumo, callout, cronologia, julgado, barras, kpi, fonte,
  fecho, assinatura, assinaturas, build, runs,
};
