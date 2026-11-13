---
layout: ../../layouts/Layout.astro
title: Entendendo o acoplamento em microsserviços — Flávio Dutra
description:
  Um guia prático sobre as formas de acoplamento em sistemas distribuídos.
---

<div class="wrap page prose">

# Entendendo o acoplamento em microsserviços

Microsserviços não eliminam o acoplamento. Eles o deslocam para além dos limites
de processos e redes, onde pode ser mais difícil percebê-lo. O objetivo não é
remover todas as dependências, mas torná-las explícitas e manter as mudanças
administráveis.

Uma pergunta útil é: **o que precisa mudar, se coordenar ou pode falhar quando
este serviço muda?** A resposta costuma revelar vários tipos de acoplamento ao
mesmo tempo.

## Acoplamento de domínio

Serviços têm acoplamento de domínio quando suas responsabilidades e regras de
negócio se sobrepõem. Por exemplo, se um serviço de pedidos e outro de
faturamento decidirem independentemente se um pedido pode ser pago, uma mudança
na política pode exigir atualizações coordenadas.

Use limites de domínio para definir claramente quem é responsável por cada
regra. Conceitos de negócio compartilhados ainda exigem acordo, mas deve haver
um responsável identificável por seu comportamento.

## Acoplamento de contrato

Consumidores dependem da estrutura e do significado de uma API ou evento.
Renomear um campo, mudar seu significado ou introduzir um novo campo obrigatório
pode quebrar consumidores mesmo quando o serviço produtor é implantado com
sucesso.

Projete contratos para manter a compatibilidade, documente sua semântica e
evolua-os gradualmente. Testes de contrato orientados pelo consumidor ajudam a
detectar mudanças incompatíveis, mas não substituem o acordo sobre o significado
de negócio.

## Acoplamento em tempo de execução

Uma requisição síncrona cria uma dependência em tempo de execução: quem chama
precisa que outro serviço responda em tempo hábil. Um checkout que aguarda
serviços de estoque, preços e pagamentos pode ficar lento ou indisponível quando
qualquer uma dessas dependências apresenta problemas.

Use tempos limite, tentativas limitadas, circuit breakers e alternativas
apropriadas. Mensageria assíncrona pode reduzir a necessidade de disponibilidade
simultânea, mas introduz outras preocupações, como garantias de entrega e
consistência eventual.

## Acoplamento temporal

O acoplamento temporal ocorre quando componentes precisam estar disponíveis ou
agir ao mesmo tempo. Uma chamada HTTP direta é um exemplo evidente. Uma fila
durável pode permitir que produtor e consumidor trabalhem em momentos
diferentes, desde que o processamento adiado seja aceitável.

Escolha a interação conforme a necessidade do negócio: algumas decisões exigem
resposta imediata, enquanto outras toleram um estado pendente e conclusão
posterior.

## Acoplamento de dados

Serviços ficam fortemente acoplados quando compartilham tabelas de banco de
dados, dependem do esquema interno de outro serviço ou duplicam dados sem uma
estratégia clara de responsabilidade e sincronização. Uma migração de banco pode
então afetar consumidores que a equipe responsável não consegue identificar
facilmente.

Defina um responsável claro para cada dado e exponha-o por interfaces ou eventos
planejados. Replicação e modelos de leitura podem ser úteis, mas consumidores
precisam considerar dados desatualizados, correções e o custo de sincronização.

## Acoplamento de implantação

O acoplamento de implantação aparece quando vários serviços precisam ser
publicados juntos ou em uma ordem rígida. Por exemplo, um produtor e todos os
seus consumidores podem precisar de implantação simultânea por causa de uma
mudança incompatível no contrato.

Prefira mudanças retrocompatíveis e migrações em etapas: adicione um novo campo
ou endpoint, migre os consumidores e remova o comportamento antigo quando não
for mais necessário. Implantação independente é um objetivo, não uma prova de
que os serviços são independentes em todos os outros aspectos.

## Acoplamento de mudança e organizacional

Se uma pequena mudança de negócio exige regularmente trabalho em muitos serviços
e equipes, os limites podem não refletir a maneira como o negócio evolui. A
própria coordenação passa a ter um custo de entrega, mesmo quando os serviços se
comunicam por interfaces bem projetadas.

Observe o histórico real de mudanças e envolva as equipes responsáveis pelo
fluxo. Às vezes, a resposta é um contrato mais claro; em outros casos, é preciso
mover responsabilidades, dividir ou consolidar um serviço.

## Uma análise prática

Para um fluxo importante, mapeie chamadas, eventos, responsáveis pelos dados e
limites entre equipes. Depois, pergunte:

- Quais dependências precisam estar disponíveis para o fluxo funcionar?
- Quais mudanças exigem implantações coordenadas ou acordo entre equipes?
- Quem é responsável por cada regra de negócio e fonte de verdade?
- O que acontece quando mensagens chegam atrasadas, duplicadas ou fora de ordem?
- Onde a inconsistência temporária é aceitável e como ela é resolvida?

O nível adequado de acoplamento depende da capacidade de negócio. Torne as
escolhas e suas consequências visíveis e revise-as conforme o sistema e a
organização evoluem.

</div>
