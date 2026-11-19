#!/usr/bin/env python3
"""
fix_docx.py — pós-processamento obrigatório dos DOCX gerados com docx-js.

Corrige:
  1. Bug do docx-js que grava mídia com extensão `.undefined`
     (renomeia para .png e atualiza as referências em .rels)
  2. Metadados: creator e lastModifiedBy -> nome do escritório (escritorio.json da pasta atual)

Uso:  python3 fix_docx.py arquivo.docx
"""
import os
import re
import sys
import zipfile

import json
FIRMA = "Escritório"
for _c in (os.environ.get("NR_ESCRITORIO"), "escritorio.json",
           os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "escritorio.exemplo.json")):
    try:
        FIRMA = json.load(open(_c, encoding="utf-8")).get("nome", FIRMA); break
    except Exception:
        pass
EXT = {b"\x89PNG": ".png", b"\xff\xd8\xff": ".jpg", b"GIF8": ".gif"}


def sniff(data: bytes) -> str:
    for magic, ext in EXT.items():
        if data.startswith(magic):
            return ext
    return ".png"


def fix(path: str) -> None:
    with zipfile.ZipFile(path) as z:
        items = {i.filename: z.read(i.filename) for i in z.infolist()}

    rename = {}
    for name in list(items):
        if name.startswith("word/media/") and name.endswith(".undefined"):
            new = name[: -len(".undefined")] + sniff(items[name])
            rename[os.path.basename(name)] = os.path.basename(new)
            items[new] = items.pop(name)

    for name in list(items):
        if not (name.endswith(".xml") or name.endswith(".rels")):
            continue
        text = items[name].decode("utf-8")
        original = text
        for old, new in rename.items():
            text = text.replace(old, new)
        if name == "docProps/core.xml":
            text = re.sub(r"<dc:creator>.*?</dc:creator>",
                          f"<dc:creator>{FIRMA}</dc:creator>", text)
            if "<cp:lastModifiedBy>" in text:
                text = re.sub(r"<cp:lastModifiedBy>.*?</cp:lastModifiedBy>",
                              f"<cp:lastModifiedBy>{FIRMA}</cp:lastModifiedBy>", text)
            else:
                text = text.replace("</cp:coreProperties>",
                                    f"<cp:lastModifiedBy>{FIRMA}</cp:lastModifiedBy></cp:coreProperties>")
        if text != original:
            items[name] = text.encode("utf-8")

    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
        for name, data in items.items():
            z.writestr(name, data)

    print(f"OK  midia renomeada: {len(rename)}  |  metadados: {FIRMA}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("uso: fix_docx.py arquivo.docx")
    fix(sys.argv[1])
