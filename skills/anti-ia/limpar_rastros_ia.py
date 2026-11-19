#!/usr/bin/env python3
"""
limpar_rastros_ia.py
Varredura tipográfica automatizada da skill anti-ia.

Uso:
    python limpar_rastros_ia.py entrada.txt saida.txt
    python limpar_rastros_ia.py --docx entrada.docx saida.docx

Aplica somente o Passo 1 do protocolo (tipografia).
Passos 2 a 6 (lexical, ritmo, estrutural) exigem revisão humana.
"""

import re
import sys
from pathlib import Path


SUBSTITUICOES_TIPOGRAFICAS = [
    # em-dash e en-dash com espaços -> vírgula + espaço
    (r' — ', ', '),
    (r' – ', ', '),
    (r'—', ','),
    # travessão colado (raro) -> vírgula
    # reticências unicode -> três pontos
    (r'…', '...'),
    # aspas curvas -> aspas retas
    (r'[\u201c\u201d]', '"'),
    (r'[\u2018\u2019]', "'"),
    # setas -> remover (exige reescrita humana, mas marcamos)
    (r'[→⇒↔⟶]', '[REESCREVER]'),
    # bullets decorativos -> alínea genérica
    (r'^\s*[•●◦▪➤]\s+', 'a) '),
    # asteriscos de ênfase Markdown -> remover marcação (perde negrito, marcar)
    (r'\*\*([^*]+)\*\*', r'\1'),
    (r'(?<!\*)\*([^*]+)\*(?!\*)', r'\1'),
    # marcadores Markdown de título -> remover prefixo
    (r'^#{1,6}\s+', ''),
    # crases de código -> remover
    (r'`([^`]+)`', r'\1'),
    # espaços especiais -> espaço comum
    (r'[\u00a0\u2009\u200a\u202f]', ' '),
]


TERMOS_LEXICAIS_ALERTA = [
    r'\bé crucial\b',
    r'\bnavegar pelas complexidades\b',
    r'\brobusto\b',
    r'\bmultifacetado\b',
    r'\bhol[íi]stico\b',
    r'\bparadigma\b',
    r'\bsinergia\b',
    r'\bmeticuloso\b',
    r'\bmeticulosamente\b',
    r'\btessitura\b',
    r'\bé importante ressaltar\b',
    r'\bé importante destacar\b',
    r'\bcumpre destacar\b',
    r'\bvale ressaltar\b',
    r'\bem suma\b',
    r'\bem s[íi]ntese\b',
    r'\bdesvendar\b',
    r'\bmergulhar\b',
]


def limpar_texto(texto: str) -> tuple[str, list[str]]:
    """Aplica substituições tipográficas e retorna texto limpo + relatório."""
    relatorio = []
    original = texto

    for padrao, substituto in SUBSTITUICOES_TIPOGRAFICAS:
        ocorrencias = len(re.findall(padrao, texto, flags=re.MULTILINE))
        if ocorrencias:
            relatorio.append(f"[TIPO] {padrao!r} -> {substituto!r}: {ocorrencias} ocorrência(s)")
        texto = re.sub(padrao, substituto, texto, flags=re.MULTILINE)

    # Varredura lexical (não substitui, apenas alerta)
    for padrao in TERMOS_LEXICAIS_ALERTA:
        matches = re.findall(padrao, texto, flags=re.IGNORECASE)
        if matches:
            relatorio.append(f"[LEXICAL] revisar: {padrao} — {len(matches)} ocorrência(s)")

    return texto, relatorio


def processar_txt(entrada: Path, saida: Path):
    texto = entrada.read_text(encoding='utf-8')
    limpo, relatorio = limpar_texto(texto)
    saida.write_text(limpo, encoding='utf-8')
    print(f"✔ Texto limpo salvo em: {saida}")
    print("\n=== RELATÓRIO ===")
    for linha in relatorio:
        print(linha)
    if not relatorio:
        print("Nenhum rastro detectado.")


def processar_docx(entrada: Path, saida: Path):
    try:
        from docx import Document
    except ImportError:
        print("Instale python-docx: pip install python-docx", file=sys.stderr)
        sys.exit(1)

    doc = Document(str(entrada))
    relatorio_total = []

    for paragrafo in doc.paragraphs:
        for run in paragrafo.runs:
            if run.text:
                novo, rel = limpar_texto(run.text)
                run.text = novo
                relatorio_total.extend(rel)

    # Também nas tabelas
    for tabela in doc.tables:
        for linha in tabela.rows:
            for celula in linha.cells:
                for paragrafo in celula.paragraphs:
                    for run in paragrafo.runs:
                        if run.text:
                            novo, rel = limpar_texto(run.text)
                            run.text = novo
                            relatorio_total.extend(rel)

    doc.save(str(saida))
    print(f"✔ .docx limpo salvo em: {saida}")
    print("\n=== RELATÓRIO ===")
    for linha in relatorio_total:
        print(linha)
    if not relatorio_total:
        print("Nenhum rastro detectado.")


def main():
    args = sys.argv[1:]
    if not args or args[0] in ('-h', '--help'):
        print(__doc__)
        sys.exit(0)

    if args[0] == '--docx':
        if len(args) != 3:
            print("Uso: python limpar_rastros_ia.py --docx entrada.docx saida.docx")
            sys.exit(1)
        processar_docx(Path(args[1]), Path(args[2]))
    else:
        if len(args) != 2:
            print("Uso: python limpar_rastros_ia.py entrada.txt saida.txt")
            sys.exit(1)
        processar_txt(Path(args[0]), Path(args[1]))


if __name__ == '__main__':
    main()
