# Política de Privacidade — Kit NR Tech Adv

Última atualização: 19 de novembro de 2026.

O Kit NR Tech Adv é um conjunto de instruções (skills) e um agente para o Claude. Ele não tem servidor, banco de dados ou serviço próprio, e a NR Tecnologia não recebe nenhum dado de quem usa o plugin.

## O que o plugin lê

Os documentos que o próprio advogado fornece na sessão do Claude: autos, peças, documentos de clientes e as peças autorais usadas na Alma Jurídica. Esses documentos podem conter dados pessoais, inclusive de terceiros.

## O que o plugin grava

Arquivos de trabalho na pasta do próprio usuário, por exemplo o mapa de provas, a cronologia, os arquivos da Alma Jurídica (ALMA.md, VOZ.md, MEMORIA.md), a ficha de protocolo e o escritorio.json (nome do escritório, advogados e inscrições na OAB). Esses arquivos ficam sob controle do usuário, que pode apagá-los a qualquer momento.

## O que sai da sessão

- Buscas na web em fontes oficiais (sites dos tribunais e do Planalto) para conferir citações jurídicas. As buscas usam termos jurídicos e não devem conter dados de clientes.
- Instalação de bibliotecas públicas (npm, pip) quando o Claude precisa gerar ou conferir documentos.
- Se o usuário tiver um conector de jurisprudência instalado (ex.: TribuJus), as consultas a ele seguem a política de privacidade daquele conector.

O tratamento dos dados dentro do Claude segue a política de privacidade da Anthropic e as configurações da conta do usuário.

## Retenção

O plugin não retém dados. A NR Tecnologia não armazena nada do que é processado nas sessões.

## Responsabilidade do advogado

O advogado é o controlador dos dados dos seus clientes e decide o que enviar ao Claude, observando a LGPD e o sigilo profissional.

## Contato

Dúvidas e solicitações: abra uma issue em https://github.com/nr-tecnologia/kit-nr-tech-adv/issues
