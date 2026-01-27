# Build Log

This document records architectural decisions, their context, trade-offs, and risks.

## Milestone: Defining the System Boundary

### Context

WealthAIGuard is a reference implementation, not a production application. The primary goal is to document architectural patterns for multi-tenant SaaS systems that may integrate AI capabilities. The system must demonstrate clear boundaries, explicit contracts, and auditable patterns.

The initial phase requires establishing the minimal structure needed to show system shape without implementing business logic, authentication, or AI capabilities.

### Decision

Establish a monorepo structure with three primary applications:
- `apps/backend`: Backend service (Node.js + TypeScript)
- `apps/frontend`: Frontend application (React + TypeScript)
- `infra`: Infrastructure definitions (CDK)

Each application contains only placeholder files. No dependencies, no business logic, no implementation details. The structure exists solely to demonstrate intended boundaries.

Documentation is created in `docs/` to explain:
- System purpose and constraints
- Tenant model and isolation requirements
- Role model and access control boundaries
- AI boundaries (where it will and will not exist)

### Trade-offs

**Chosen:**
- Minimal structure with placeholders
- Explicit documentation over code
- Deferred implementation of all features

**Not Chosen:**
- Full implementation of any component
- Dependency management at this stage
- Build tooling or CI/CD configuration
- Database schemas or data models

### Risks

1. **Structure may not reflect final architecture**: The placeholder structure represents intent, not final design. As implementation proceeds, the structure may need adjustment.

2. **Documentation may become outdated**: Without code to validate against, documentation may drift. Regular review and updates are required.

3. **Boundary decisions may be premature**: Defining AI boundaries before implementation may constrain future decisions. However, explicit boundaries are necessary for a reference implementation.

### Next Boundary

The next boundary to define will be the API contract between `apps/backend` and `apps/frontend`. This will establish:
- Request/response formats
- Authentication mechanism
- Error handling patterns
- Tenant context propagation

