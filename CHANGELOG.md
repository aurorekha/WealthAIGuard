# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added - 2025-01-26
- **Milestone 3: Minimal Authority Surface (Overview Board)**
  - Set up frontend application with React, TypeScript, Vite, and Tailwind CSS
  - Configured Redux store for tenant/role/actor state management
  - Implemented React Router for navigation
  - Added shadcn/ui configuration and utilities
  - Created four read-only, role-aware pages:
    - Overview (Tenant Home): Shows tenant context, actor role, system status
    - Portfolio Overview: Role-scoped portfolio display (client/advisor/admin views)
    - Activity / Audit View: Read-only audit log of system actions
    - Access & Role Context: Explicit permission display derived from role
  - Implemented role-based navigation filtering
  - Added mock data layer for portfolios and activities
  - Created permission utility for deriving effective permissions from roles
  - Set up testing framework (Vitest, Testing Library)
  - Updated build-log.md with Milestone 3 architectural decisions
  
  **Design pivot:**
  - Initial approach: Futuristic aesthetic with bright neon colors (cyan, purple, pink) and heavy glow effects
  - Pivoted to: Professional, enterprise-grade color scheme prioritizing readability and contrast
  - Rationale: Reference implementation for wealth management requires trust and clarity over flashy aesthetics
  - Changes:
    - Replaced neon palette with cohesive blue/indigo/violet gradient system
    - Increased glass effect opacity (0.7/0.85) for better text visibility
    - Improved text contrast (white/gray-300 instead of gray-400/500)
    - Reduced background animation intensity for subtlety
    - Focused on professional appearance appropriate for financial services context

### Added - 2025-01-26
- **Milestone: Define system boundary and scaffold Phase 1 skeleton**
  - Created monorepo structure with `apps/backend`, `apps/frontend`, and `infra`
  - Added placeholder source files organized in `src/` directories
  - Documented system architecture, tenant model, role model, and AI boundaries in `docs/ARCHITECTURE.md`
  - Established `docs/build-log.md` for architectural decision tracking
  - Added base configuration: `package.json`, `tsconfig.json`, `.gitignore`
  - Clarified AI recommendations as non-binding suggestions from pre-computed data
  - Clarified advisor operations as state-changing actions subject to authorization and audit


