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

## Milestone: Minimal Authority Surface (Overview Board)

### Context

After establishing the system boundary, the next step is to create a tangible surface that demonstrates role-aware access patterns. This milestone introduces a conceptual dashboard that shows what exists, who can see what, and what actions are conceivable—all before implementing full authentication mechanisms.

The Overview Board serves as the anchor point for the system, establishing the foundation for future AI explanation capabilities. It must be read-only, role-aware, and tenant-scoped.

### Decision

Create four minimal but sufficient pages:

1. **Overview (Tenant Home)**: Anchor page showing tenant context, actor role, system status, and navigation. Answers "Where am I, and who am I here?"

2. **Portfolio Overview**: Defines what the system cares about. Shows portfolios with role-based scoping:
   - Client → their own portfolio
   - Advisor → assigned clients' portfolios
   - Admin → aggregate counts/totals only

3. **Activity / Audit View**: Establishes auditability early. Shows read-only list of recent actions with who did what, when, under which role. This is where AI will later explain "what happened."

4. **Access & Role Context**: Makes authority explicit. Shows tenant ID, actor ID, role, and effective permissions (derived, not configured). Prevents UI from lying about access.

All pages are read-only. No settings, editing, onboarding, login screens, charts, or actions (create/update/delete). Everything is a read-only authority projection.

### Trade-offs

**Chosen:**
- Four pages as minimum viable surface
- Role-aware navigation and content filtering
- Mocked data injected via Redux state
- Tailwind CSS for styling (no complex UI library yet)
- Redux for state management (explicit, auditable)
- React Router for navigation
- Vite for build tooling (fast, modern)

**Not Chosen:**
- Full authentication implementation (still mocked/injected)
- Real API integration (data is mocked)
- Charts or visualizations (tables/JSON blocks only)
- Settings or configuration UI
- Onboarding flows
- Action buttons (create/update/delete)

### Risks

1. **Mocked data may not reflect real patterns**: The mock data structure may not match eventual API responses. However, the structure is intentionally simple and can be adapted.

2. **Role-based filtering is client-side only**: Without backend enforcement, the UI could be manipulated. This is acceptable for this milestone as auth hardening comes later.

3. **No real tenant isolation yet**: All users see the same tenant context. Real multi-tenancy enforcement is deferred to later milestones.

4. **UI may feel incomplete**: The read-only, minimal nature may feel unfinished. This is intentional—the focus is on establishing boundaries, not polish.

### Next Boundary

The next boundary to define will be the API contract between `apps/backend` and `apps/frontend`. This will establish:
- Request/response formats for tenant and actor context
- Error handling patterns
- Tenant context propagation mechanisms
- Role-based data filtering at the API layer

