# Architecture: Scaling a Production Vacation-Rental Marketplace

This document accompanies `architecture-diagram.png`. It describes how the
take-home clone's simple client-only approach would evolve into a
production-scale system (an "Airbnb-at-scale") across frontend, backend,
storage, search, and deployment.

## 1. Frontend

- **Framework:** Next.js (React) for the listing page and search results —
  server-side rendering for SEO-critical, first-load pages (listing detail,
  search) and client-side rendering for interactive overlays (photo tour,
  lightbox, booking flow), same pattern used in this take-home's React app.
- **Delivery:** Static assets and pre-rendered HTML are pushed to a global
  CDN / edge network (CloudFront, Vercel Edge, Fastly). Edge caching absorbs
  the vast majority of read traffic for popular listings and search pages,
  with short TTLs + stale-while-revalidate so pricing/availability stay close
  to real-time without hitting origin on every request.
- **Mobile:** React Native shares design tokens and API contracts with the
  web app to avoid duplicating business logic.

## 2. Backend

- **Pattern:** Domain-oriented microservices behind a single API Gateway
  (auth, rate limiting, request routing, request/response shaping for
  mobile vs. web). Each service owns its data and scales independently:
  Listings, Search, Booking & Availability, Payments, Users/Host Profiles,
  Reviews, Media Processing, Notifications.
- **Scaling:** Services are containerized (Docker) and run on an
  orchestrator (Kubernetes / ECS) with horizontal auto-scaling driven by
  CPU/queue-depth metrics. Stateless services scale out trivially; stateful
  concerns (booking locks, pricing calendars) are pushed into Redis/Postgres
  rather than kept in-process, so any instance can serve any request.
- **Resilience:** Circuit breakers and timeouts between services, plus
  multi-AZ deployment so a single zone failure doesn't take down booking or
  payments.

## 3. Data & Storage

- **Primary datastore:** PostgreSQL per bounded context, each with
  read replicas for read-heavy paths (listing details, reviews) and
  regional sharding for write scaling once a single region's write volume
  outgrows one primary.
- **Caching:** Redis cluster in front of Postgres for hot paths — computed
  pricing, availability calendars, session/auth tokens — cut latency and
  database load for the listing page's most-read data.
- **Media:** Photos and documents live in object storage (S3 or equivalent)
  behind the CDN, with a dedicated Media Processing service handling
  resizing/format conversion (e.g., WebP/AVIF variants) asynchronously on
  upload.
- **Consistency:** Booking/availability writes go through a service that
  enforces double-booking prevention (row-level locks or a reservation
  ledger), since this is the one place strict consistency matters more than
  raw throughput.

## 4. Search

- Listing search is offloaded from Postgres entirely into a dedicated
  search cluster (OpenSearch/Elasticsearch), indexed on location, price,
  amenities, and availability facets.
- The Listings/Booking services publish change events (new listing, price
  update, booking that affects availability) onto an event bus; a
  consumer re-indexes only the affected documents, keeping search near
  real-time without coupling the write path to indexing latency.
- Geo-search (map-based browsing) uses the search cluster's native
  geo-distance/geo-bounding-box queries rather than the primary database.

## 5. Async / Eventing

- A message bus (Kafka, or SQS+SNS on AWS) decouples side effects from the
  request path: search re-indexing, host/guest notifications, analytics
  pipelines, and fraud-review triggers on payments all subscribe to
  domain events instead of being called synchronously.
- This is what lets Booking, Reviews, and Listings scale and deploy
  independently of Search and Notifications.

## 6. Deployment & Operations

- **CI/CD:** Every service has its own pipeline — build, automated tests,
  canary or blue/green deploys — so one team's release doesn't block
  another's.
- **Observability:** Centralized metrics, logs, and distributed tracing
  (Prometheus/Grafana + OpenTelemetry) so a slow booking request can be
  traced across the gateway, booking service, and Postgres.
- **Multi-region:** As traffic grows internationally, the CDN, gateway, and
  read replicas expand into additional regions first (cheapest way to cut
  latency for reads), with write-region routing and cross-region
  replication added once regional write volume justifies it.

## Why this differs from the take-home implementation

The take-home app intentionally has **no backend** — all listing, photo,
and review data is static/mock data bundled with the frontend, per the
assignment's "backend is optional" guidance. This document describes how
that same UI would be served by the system above in production: the React
components wouldn't need to change shape, only the data-fetching layer
(swap static imports for API calls against the Listings/Search/Reviews
services).
