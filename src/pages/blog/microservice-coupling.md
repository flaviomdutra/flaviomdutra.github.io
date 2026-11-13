---
layout: ../../layouts/Layout.astro
title: Understanding coupling in microservices — Flávio Dutra
description:
  A practical guide to the forms of coupling that shape distributed systems.
---

<div class="wrap page prose">

# Understanding coupling in microservices

Microservices do not eliminate coupling. They move it across process and network
boundaries, where it can be harder to see. The goal is not to remove every
dependency, but to make dependencies explicit and keep changes manageable.

A useful question is: **what has to change, coordinate, or fail when this
service changes?** The answer often reveals several kinds of coupling at once.

## Domain coupling

Services are domain-coupled when their responsibilities and business rules
overlap. For example, if both an order service and a billing service
independently decide whether an order is eligible for payment, a policy change
may require coordinated updates.

Use domain boundaries to give each service clear ownership of its rules. Shared
business concepts still need agreement, but their behavior should have an
identifiable owner.

## Contract coupling

Consumers depend on the shape and meaning of an API or event. Renaming a field,
changing its meaning, or introducing a new mandatory field can break consumers
even when the producing service deploys successfully.

Design contracts for compatibility, document their semantics, and evolve them
incrementally. Consumer-driven contract tests can help detect incompatible
changes; they do not replace agreement on business meaning.

## Runtime coupling

A synchronous request creates a runtime dependency: the caller needs another
service to respond within a useful time. A checkout that waits for inventory,
pricing, and payment services may become unavailable or slow when any dependency
struggles.

Use timeouts, bounded retries, circuit breakers, and appropriate fallbacks.
Asynchronous messaging can reduce simultaneous availability requirements, but it
introduces other concerns such as delivery guarantees and eventual consistency.

## Temporal coupling

Temporal coupling occurs when components must be available or act at the same
time. A direct HTTP call is an obvious example. A durable queue can allow a
producer and consumer to work at different times, provided delayed processing is
acceptable.

Choose the interaction based on the business need: some decisions require an
immediate response, while others can tolerate a pending state and later
completion.

## Data coupling

Services become tightly coupled when they share database tables, depend on
another service's internal schema, or duplicate data without a clear ownership
and synchronization strategy. A database migration can then affect consumers the
owning team cannot easily identify.

Give each piece of data a clear owner and expose it through deliberate
interfaces or events. Replication and read models can be useful, but consumers
must account for staleness, corrections, and the cost of synchronization.

## Deployment coupling

Deployment coupling appears when multiple services must be released together or
in a strict order. For example, a producer and all its consumers might need to
deploy simultaneously because a contract change is incompatible.

Favor backward-compatible changes and staged migrations: add a new field or
endpoint, migrate consumers, then remove the old behavior after it is no longer
needed. Independent deployment is a goal, not proof that services are
independent in every other respect.

## Change and organizational coupling

If a small business change routinely requires work across many services and
teams, the boundaries may not reflect the way the business evolves. Coordination
itself becomes a delivery cost, even when the services communicate through
well-designed interfaces.

Look at real change history and involve the teams that own the workflow.
Sometimes the answer is a clearer contract; sometimes responsibilities need to
move, or a service should be split or consolidated.

## A practical review

For an important workflow, map its calls, events, data ownership, and team
boundaries. Then ask:

- Which dependencies must be available for the workflow to succeed?
- Which changes require coordinated releases or agreement between teams?
- Who owns each business rule and source of truth?
- What happens when messages arrive late, twice, or out of order?
- Where is temporary inconsistency acceptable, and how is it resolved?

The right amount of coupling depends on the business capability. Make the
trade-offs visible, and revisit them as the system and organization change.

</div>
