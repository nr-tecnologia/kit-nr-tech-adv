# Protocolo de Verificação

Complementa a skill `anti-alucinacao` com o que se aprendeu na prática.
Vale para toda peça produzida com `peticao`.

---

## 1. Leitura dos autos — antes de qualquer tese

**Ler o processo inteiro, não só o índice.** Índices de movimentação exportados
do PJe frequentemente vêm truncados: o arquivo pode conter documentos posteriores
ao último movimento listado. Conferir sempre as últimas páginas do PDF, e não
apenas o sumário.

```bash
pdfinfo arquivo.pdf                       # nº de páginas
pdftotext -layout arquivo.pdf saida.txt   # ou em segmentos de 150 páginas
tail -150 saida.txt                       # <- passo que não pode ser pulado
grep -n "Num. 2[0-9]\{8\}" saida.txt      # IDs mais recentes
```

**Documentos escaneados não saem no `pdftotext`.** Autos de infração, DOFs,
laudos e certidões costumam ser imagem. Localizar a página física e rasterizar:

```bash
pdftoppm -jpeg -r 130 -f PAG -l PAG arquivo.pdf saida
```

Nunca afirmar que um documento não existe, ou que nada consta dele, sem tê-lo
aberto. Se não foi possível ler, usar formulação técnica — "as razões recursais
não individualizam", "na ausência de demonstração a partir do ID X".

**Verificar sempre se existe processo conexo em outro Estado ou esfera.** Exemplo
fictício: o mesmo fato gera ação penal em um Estado e termo circunstanciado em
outro, já com transação penal homologada. A litispendência só aparece se o
cliente for perguntado e enviar o segundo processo.

---

## 2. Jurisprudência — cobertura mínima

Consultar o TribuJus em **três frentes**, não apenas uma:

| Frente | Por quê |
|---|---|
| **Tribunal do caso** | Tribunal competente. Define a probabilidade real. |
| **TRF1** | Matéria ambiental, tributária e federal. Frequentemente traz a tese melhor construída. |
| **STJ** | Precedente-guia, sobretudo em consunção, dosimetria e nulidades. |

Rodar também `jurimetria` para a estimativa de êxito, e registrar os avisos
que o próprio sistema devolve (amostra pequena, divergência entre recortes).

**Buscar por tese, não por tipo penal.** Consultas por "art. 299 CP" devolvem
catálogo; consultas por "ausência de laudo pericial de identificação de espécie
florestal" devolvem o precedente útil.

---

## 3. Citações — o que pode e o que não pode

| Situação | Conduta |
|---|---|
| Acórdão do tribunal local com número CNJ, órgão e data | Citar em **discurso indireto**, sem aspas |
| Trecho literal | Só entre aspas após conferência do inteiro teor assinado no PJe |
| TribuJus devolve número interno, sem formato CNJ | **Não citar.** Buscar o número correto na fonte ou omitir |
| Precedente citado dentro de outro acórdão | Pode ser usado, atribuindo a origem, e sinalizando conferência |
| Súmula ou tema repetitivo | Conferir número e teor antes de escrever |

Máximo de **2 precedentes por tópico**, com análise. Conferir se o tribunal
mencionado no texto corresponde ao órgão do julgado citado.

Ao entregar a peça, listar ao usuário todos os julgados citados com a
recomendação expressa de conferência antes do protocolo.

---

## 4. Números e datas

Conferir aritmética contra os documentos, e apontar divergências —
elas costumam ser argumento.

Exemplo fictício: a soma dos lançamentos de um documento resulta em 26,074 m³,
mas os autos trazem ainda 26,06 m³ e 26,74 m³ para o mesmo volume. Três valores
para o mesmo fato viram capítulo da defesa.

Cronologias devem ser montadas a partir das datas de assinatura eletrônica,
não das datas mencionadas no corpo dos documentos.

---

## 5. Antes de entregar

- [ ] Últimas páginas de todos os PDFs lidas
- [ ] Documentos escaneados relevantes rasterizados e vistos
- [ ] TribuJus consultado no tribunal do caso, no TRF/TRT da região e no STJ
- [ ] Jurimetria rodada e avisos do sistema repassados ao usuário
- [ ] Todo julgado com número CNJ completo
- [ ] Nenhuma aspas em precedente não conferido no inteiro teor
- [ ] Aritmética conferida contra os documentos
- [ ] Nada afirmado como ausente sem que o ID tenha sido aberto
- [ ] Pontos deixados de fora comunicados ao usuário, com o motivo
