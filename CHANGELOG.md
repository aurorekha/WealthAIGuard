# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added - 2025-01-26
- **Milestone: Define system boundary and scaffold Phase 1 skeleton**
  - Created monorepo structure with `apps/backend`, `apps/frontend`, and `infra`
  - Added placeholder source files organized in `src/` directories
  - Documented system architecture, tenant model, role model, and AI boundaries in `docs/ARCHITECTURE.md`
  - Established `docs/build-log.md` for architectural decision tracking
  - Added base configuration: `package.json`, `tsconfig.json`, `.gitignore`
  - Clarified AI recommendations as non-binding suggestions from pre-computed data
  - Clarified advisor operations as state-changing actions subject to authorization and audit

