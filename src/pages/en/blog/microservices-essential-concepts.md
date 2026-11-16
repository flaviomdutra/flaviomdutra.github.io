---
layout: ../../../layouts/Layout.astro
title: Essential Microservices Concepts - Flávio Dutra
description: Fundamental concepts for understanding microservices architecture.
listingTitle: Essential microservices concepts
summary: An overview of service autonomy, domain boundaries, data ownership, and communication choices.
category: architecture
pubDate: 2026-11-16
tags:
  - microservices
  - software-architecture
  - distributed-systems
---

<div class="wrap page prose">

# Essential Microservices Concepts

Microservices are services modeled around business capabilities that can be
developed, deployed, and evolved independently. Each service should hide its
implementation details and expose only what other services need through
well-defined interfaces.

When designing a microservices architecture, keep a few principles in mind:

- **Independent deployment**: The goal is to release a change to one service
  without requiring changes or a new deployment of the others. Keeping services
  loosely coupled and preserving compatible contracts helps make this possible.
- **Business domain modeling**: Domain-Driven Design (DDD) practices can help
  identify service boundaries and responsibilities. Each service should
  represent a cohesive business capability, so changes to that capability have
  as little impact as possible on others.
- **Ownership of data**: In general, each service should control its data and be
  its source of truth. This does not require a separate database for every
  service, but other services should not access its storage directly. When they
  need data owned by another service, they should use the interface that service
  provides. This lets each team evolve its data model without exposing internal
  details.

When defining a service's boundaries and implementation, consider coupling and
cohesion. We want low coupling between services and high cohesion within each
one. A useful rule of thumb is to keep together the things that change together.

It is also important to choose how services communicate. A synchronous call
creates a runtime dependency: the calling service must wait for a response, and
the destination's slowness or unavailability can affect it. Asynchronous
communication, such as messaging, can reduce this temporal dependency, but it
brings its own challenges, including eventual consistency and duplicate message
handling. Neither option is always best; the choice should reflect the needs of
the business flow.

Adopting microservices also calls for a shift in perspective. Instead of
thinking of a system as a puzzle of components that depend heavily on one
another, think of autonomous services that collaborate to support a business
journey or goal. Autonomy does not mean there are no dependencies: they should
be explicit, limited, and well managed.

</div>
