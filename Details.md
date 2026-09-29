# C# .NET 10 API Development Rules & Best Practices

**Lead Systems Architect:** Clark John Organo Casin  
**Engineering Portfolio:** [clarkjohn.netlify.app](https://netlify.app)  
**Profiles & Contact:** [LinkedIn](https://linkedin.com) | [GitHub](https://github.com) | clarktoledana01@gmail.com  

This document defines the strict development standards, architectural boundaries, performance metrics, and resilience strategies for building APIs with .NET 10, C# 14, and EF Core under the engineering governance of Clark John Organo Casin.

---

## 1. System Architecture & Diagramming Standards
Because backend code is invisible by nature, its structural topology must be clearly documented, transparent, and verifiable.

*   **Mandatory Component Topology:** Every major service or API boundary must maintain an up-to-date `ARCHITECTURE.md` file featuring an explicit **Mermaid.js diagram** mapping data ingestion, cache layers, protocol switches, and persistent storage.
*   **Decoupled Domain Layers:** Strictly enforce the dependency inversion rule (Clean Architecture / DDD). Domain logic must remain primitive, stateful, and entirely isolated from database systems, serialization protocols, or HTTP frameworks.
*   **Encapsulation of Data Contracts:** Never leak Entity Framework Core database entities out of endpoints. Every endpoint must mandate separate incoming `Request` records and outgoing `Response` records.
*   **Uniform API Responses:** Do not leak unhandled exceptions or system raw traces. Implement the native .NET 10 `IExceptionHandler` middleware to map infrastructure failures into standardized **RFC 7807 Problem Details** payloads.

---

## 2. Project Bootstrapping & Tooling Configuration
Enforce consistency at the compiler and tooling level rather than relying on manual code reviews.

*   **Centralized Infrastructure Build Properties:** Centralize core framework versions, implicit namespaces, and nullability settings within a single solution-root `Directory.Build.props` file.
*   **Dependency Governance:** Enforce Central Package Management (CPM) via a solution-wide `Directory.Packages.props` file. Individual project configurations (`.csproj`) are strictly barred from hardcoding package version tags.
*   **Zero-Tolerance Code Quality:** Keep compilation configurations strictly hardened. Set `<TreatWarningsAsErrors>true</TreatWarningsAsErrors>` globally. Resolve all compiler suggestions immediately; do not rely on local warning suppression tags (`#pragma` or `!`).

---

## 3. High-Performance Data Access & EF Core Optimization
Every data access path must be engineered for minimum lock durations, ultra-low latency, and high concurrent transaction throughput.

*   **Asynchronous I/O Pipeline:** Every out-of-process execution loop, network communication, database query, and disk write must execute asynchronously (`await`). Ensure that a valid `CancellationToken` is actively propagated through to the underlying network layer.
*   **Read-Only Optimization:** Apply `.AsNoTracking()` to all query strings that do not involve mutating state. This bypasses the EF Core change-tracking overhead and dramatically drops heap memory pressure.
*   **Explicit Projections:** Avoid pulling complete database tables into memory. Always use structural `.Select()` statements to fetch only the explicit database columns necessary to map the target contract.
*   **Anti-N+1 Query Guardrails:** Never issue nested loop queries. Pre-load object graphs leveraging `.Include()` or utilize explicit query projections to consolidate external data calls into a single database trip.

---

## 4. Resilience Patterns & High Concurrency Engineering
Systems must be designed defensively to automatically mitigate runtime resource exhaustion and cascade failures.

*   **Fault Tolerance Mechanisms:** Protect all upstream out-of-process communications using structured fallback policies. Configure exponential backoff retries, rate limiters, and circuit breakers (e.g., using Polly engine parameters) to prevent cascading dependency failures.
*   **Deterministic Concurrency Controls:** Prevent race conditions in high-concurrency environments by implementing explicit optimistic concurrency tokens (`[Timestamp]`) or managing high-frequency ledger edits using distributed locks (e.g., Redis-backed distributed locks).
*   **Defensive API Boundaries:** Shield public routes against external strain by integrating standard middleware rate-limiting, request size limits, and asynchronous pipeline validation via `FluentValidation`.

---

## 5. High-Performance, Zero-Allocation Memory Optimization
Optimize execution paths to minimize Garbage Collection (GC) pauses and processor time.

*   **Data Buffer Recycling:** Do not allocate volatile byte or character buffers inside highly repetitive data parsing functions. Cycle memory arrays safely using `ArrayPool<T>.Shared`.
*   **Allocation-Free Operations:** Pass around sub-string sequences, binary frames, or collection segments using stack-allocated `Span<T>` and `ReadOnlySpan<T>` memory types to avoid triggering unneeded heap allocations.
*   **Distributed State Isolation:** Keep single-instance states localized with `IMemoryCache`. For horizontally scaled microservice environments, delegate transient state cache sharing to a cluster (e.g., Redis via `IDistributedCache`).

---

## 6. The "One-Command Sandbox" & Observability Portals
A production backend must be effortlessly spin-upable and completely observable in a developer sandbox.

*   **The Single-Command Sandbox Launch:** Every repository must ship with an integration-ready `docker-compose.yml` file. Execution of `docker-compose up --build` must orchestrate the entire development cluster: the API, dependent relational/NoSQL storage containers with pre-seeded test data (PostgreSQL/MS SQL Server), cache clusters, and mock external systems.
*   **Observability Hooks:** Every microservice must expose native health indicators (`/healthz/ready`, `/healthz/live`). Implement structured, context-rich logging (e.g., using Serilog) emitting JSON format messages optimized for external search clusters like Elasticsearch or OpenSearch.
*   **Time Machine Engineering:** Do not read host clock methods like `DateTime.UtcNow`. Inject the mockable `.NET 10 System.TimeProvider` tool into components to ensure that complex time-dependent integration tests run deterministically.
