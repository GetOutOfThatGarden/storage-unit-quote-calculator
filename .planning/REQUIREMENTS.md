# Requirements: Storage Quote Calculator

**Defined:** 2026-05-27
**Core Value:** Self-service quote generation.

## v1 Requirements

### Calculation Logic
- [ ] **CALC-01**: Gross Invoice = Sum(Rate * Quantity for all services)
- [ ] **CALC-02**: Discount = 15% of Gross Invoice
- [ ] **CALC-03**: Net Invoice = Gross Invoice - Discount
- [ ] **CALC-04**: Balance = Net Invoice - Deposit Input

### UI
- [ ] **UI-01**: Input fields for quantities of all service items.
- [ ] **UI-02**: Real-time display of Gross, Discount, Net, and Balance totals.
- [ ] **UI-03**: Responsive design for mobile/desktop.

## v2 Requirements

(Deferred)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Persistence | Static app only |
| Email sending | Static app only |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CALC-01 | Phase 1 | Pending |
| CALC-02 | Phase 1 | Pending |
| CALC-03 | Phase 1 | Pending |
| CALC-04 | Phase 1 | Pending |
| UI-01 | Phase 1 | Pending |
| UI-02 | Phase 1 | Pending |
| UI-03 | Phase 1 | Pending |

**Coverage:**
- v1 requirements: 7 total
- Mapped to phases: 7
- Unmapped: 0 ✓
