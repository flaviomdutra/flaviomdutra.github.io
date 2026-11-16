---
layout: ../../layouts/Layout.astro
title: Conceitos essenciais de microsserviços - Flávio Dutra
description: Conceitos fundamentais para entender a arquitetura de microsserviços.
tags:
  - microservices
  - software-architecture
  - distributed-systems
---

<div class="wrap page prose">

# Conceitos essenciais de microsserviços

Microsserviços são serviços modelados em torno de capacidades de negócio e que
podem ser desenvolvidos, implantados e evoluídos de forma independente. Cada
serviço deve ocultar os detalhes de sua implementação e expor, por meio de
interfaces bem definidas, apenas o necessário para que outros serviços o
utilizem.

Ao projetar uma arquitetura de microsserviços, alguns princípios merecem
atenção:

- **Implantação independente**: A ideia é publicar uma alteração em um serviço
  sem exigir mudanças ou uma nova implantação dos demais. Para isso, é importante
  manter baixo o acoplamento entre serviços e preservar contratos compatíveis.
- **Modelagem orientada ao domínio de negócio**: Práticas de Domain-Driven Design
  (DDD) podem ajudar a identificar limites e responsabilidades dos serviços. O
  objetivo é que cada serviço represente uma capacidade de negócio coesa e que
  mudanças nessa capacidade sejam feitas com o mínimo de impacto nas demais.
- **Responsabilidade pelos próprios dados**: Em geral, cada serviço deve
  controlar seus dados e ser a autoridade sobre eles. Isso não exige que cada
  serviço use um banco de dados separado, mas os demais não devem acessar
  diretamente seu armazenamento. Quando precisam de dados pertencentes a outro
  serviço, devem recorrer à interface oferecida por esse serviço. Assim, cada
  equipe pode evoluir seu modelo de dados sem expor detalhes internos.

Ao definir os limites e a implementação de um serviço, considere o acoplamento e
a coesão. Buscamos baixo acoplamento entre serviços e alta coesão dentro de cada
um. Uma regra prática é manter juntos os elementos que mudam juntos.

Também é importante escolher como os serviços se comunicam. Uma chamada síncrona
cria uma dependência em tempo de execução: o serviço que faz a chamada precisa
aguardar uma resposta, e a indisponibilidade ou lentidão do destino pode afetá-
lo. A comunicação assíncrona, por exemplo por meio de mensagens, pode reduzir
essa dependência temporal, mas traz desafios próprios, como consistência eventual
e tratamento de mensagens repetidas. Nenhuma opção é sempre a melhor; a escolha
deve considerar as necessidades do fluxo de negócio.

Adotar microsserviços também exige uma mudança de perspectiva. Em vez de pensar
em um sistema como um quebra-cabeça de componentes que dependem fortemente uns
dos outros, pense em serviços autônomos que colaboram para atender a uma jornada
ou a um objetivo de negócio. Essa autonomia, porém, não significa ausência de
dependências: elas precisam ser explícitas, limitadas e bem administradas.
</div>
