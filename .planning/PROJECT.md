# Storage Unit Quote Calculator

## What This Is

A responsive, web-based quote calculator for "Bamboo Bob's" storage in Danang, Vietnam. It allows the facility owner to send a single link to prospective clients, who can then input their storage needs to generate an instant, itemized quote with automated discount and balance calculations.

## Core Value

Clients can generate accurate, self-service quotes in real-time, reducing administrative effort for the facility owner.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Build responsive calculator UI based on the worksheet structure.
- [ ] Implement calculation logic (Services * Qty → Gross → 15% Discount → Net → Balance).
- [ ] Ensure calculator is fully functional as a static site.
- [ ] Configure for GitHub Pages deployment.

### Out of Scope

- [ ] Backend database/API — Static site requested for simplicity.
- [ ] User authentication — Calculator should be accessible to anyone with the link.
- [ ] Automated email sending — Quote generation is client-side only.

## Context

- **Environment:** Vanilla HTML5, CSS3, JavaScript. No build pipeline or package managers.
- **Goal:** Replace manual quote creation with a simple, sharable URL.

## Constraints

- **Type:** Tech Stack — Must be vanilla JS/HTML/CSS for hosting on GitHub Pages without a build step.
- **Type:** Portability — Must work correctly when deployed to GitHub Pages (relative paths for all assets).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vanilla JS/HTML/CSS | Ease of deployment to GitHub Pages, no maintenance required. | — Pending |

---
*Last updated: 2026-05-27 after initialization*
