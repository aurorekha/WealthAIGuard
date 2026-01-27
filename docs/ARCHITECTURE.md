# Architecture

## System Purpose

WealthAIGuard is a reference implementation demonstrating architectural patterns for integrating AI capabilities into wealth-grade, multi-tenant SaaS systems. The system serves as a documented artifact of architectural decisions, not a production application.

The primary goal is to establish clear boundaries, explicit contracts, and auditable patterns that can be referenced when building similar systems. All design decisions prioritize explicitness, auditability, and maintainability over rapid feature development.

## Tenant Model

A tenant represents an organization that uses the system. Each tenant is an isolated boundary containing:

- Organizational identity and configuration
- User accounts belonging to that organization
- Data scoped to that organization
- Access controls and permissions

Tenant isolation is enforced at all system boundaries: data storage, API requests, and business logic execution. No data or operation may cross tenant boundaries without explicit, auditable authorization.

Tenants are identified by a tenant identifier that must be present in all requests and validated before any operation proceeds.

## Role Model

The system defines three primary roles:

### Admin
- Manages tenant-level configuration
- Manages user accounts within the tenant
- Accesses tenant-wide reports and analytics
- Cannot access individual client data beyond aggregate views

### Advisor
- Manages client relationships within the tenant
- Accesses client data for assigned clients only
- Performs advisory operations that result in system state changes, subject to authorization and audit.
- Cannot modify tenant configuration or manage other users

### Client
- Accesses only their own data
- Views reports and recommendations prepared by advisors
- Cannot access other clients' data or tenant configuration

Role-based access control is enforced at the API boundary. Each request must include both tenant context and user role, and authorization is verified before any operation proceeds.

## AI Boundaries

### Where AI Will Live

AI capabilities will exist as a non-mutating explanation layer. This layer will:

- Analyze existing data and produce explanations or insights
- Generate reports and summaries from structured data
- Surface non-binding suggestions derived from pre-computed data and explicitly configured heuristics.
- Operate in read-only mode with respect to core business data

AI components will be isolated in a dedicated service boundary with explicit interfaces to the core system. All AI operations will be logged and auditable.

### Where AI Will Never Live

AI will not exist in:

- Authentication and authorization logic
- Data persistence operations
- Transaction processing
- Tenant isolation enforcement
- Role-based access control
- Core business logic that modifies state

The core system must function correctly and securely without any AI components present. AI is an optional enhancement layer, not a dependency for system operation.

## System Boundaries

The system is organized into three primary applications:

- **apps/backend**: Backend service handling business logic, authentication, and data operations
- **apps/frontend**: Frontend application providing user interface
- **infra**: Infrastructure as Code definitions for deployment and configuration

Each application maintains clear boundaries and communicates through well-defined interfaces. Cross-cutting concerns such as authentication, logging, and monitoring are handled at the infrastructure layer.

