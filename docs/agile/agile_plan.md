# Agile Development Plan - CRMRS
## Agile Methodology Chosen

**Scrum** - We have selected Scrum as our Agile methodology because:
- It provides structured ceremonies for planning, tracking, and reflection
- It allows for iterative delivery of working software every 2 weeks
- It clearly defines roles and responsibilities
- It supports our team size

## Roles and Responsibilities

| Role | Team Member | Responsibilities |
|------|-------------|-------------------|
| **Product Owner** | Welcome Khayeni (Backend Developer) & Bathabile Nghxishe (Project Managers) | Define and prioritize product backlog, ensure development aligns with stakeholder needs, validate completed work |
| **Scrum Master** | Brilliant Temollo Maloma | Facilitate all Scrum ceremonies, remove impediments, track progress, maintain meeting logs, manage GitHub Project Board |
| **Development Team** | Risana Kelly Siweya (Frontend Developer) | Implement UI components, integrate with backend APIs, ensure responsive design |
| **Development Team** | Welcome Khayeni (Backend Developer) | Design database schema, develop REST APIs, implement business logic |
| **Development Team** | Jabu Sithole (Researcher) | Gather user feedback, validate features against user needs, assist with user acceptance testing |
| **Development Team** | Aphiwe Sibusiso Mntambo (Tester) | Write and execute test cases, perform quality assurance, report bugs |

## Sprint Schedule

| Sprint | Duration | Dates | Focus | Key Deliverables |
|--------|----------|-------|-------|------------------|
| Sprint 0 | 1 week | March 23 - March 29, 2026 | Setup & Foundation | Development environment, database schema |
| Sprint 1 | 2 weeks | March 30 - April 12, 2026 | User Authentication | Registration, login, student dashboard |
| Sprint 2 | 2 weeks | April 13 - April 26, 2026 | Complaint Submission | Complaint form, categories, image upload |
| Sprint 3 | 2 weeks | April 27 - May 10, 2026 | Staff Management | Staff dashboard, task assignment, status updates |
| Sprint 4 | 1 week | May 11 - May 16, 2026 | Testing & Polish | Bug fixes, final testing, documentation |

## Scrum Ceremonies Schedule

| Ceremony | Frequency | Day/Time | Duration | Facilitator |
|----------|-----------|----------|----------|-------------|
| Daily Stand-up | Daily | Monday-Friday, 10:00 AM | 15 mins | Scrum Master (Brilliant) |
| Sprint Planning | Start of each sprint | Monday, 2:00 PM | 2 hours | Scrum Master (Brilliant) |
| Sprint Review | End of each sprint | Friday, 2:00 PM | 1 hour | Product Owner |
| Sprint Retrospective | End of each sprint | Friday, 3:00 PM | 1 hour | Scrum Master (Brilliant) |
| Backlog Refinement | Mid-sprint | Wednesday, 3:00 PM | 1 hour | Product Owner |

## Communication Tools

| Tool | Purpose |
|------|---------|
| GitHub | Source control, issue tracking, project board |
| GitHub Projects | Sprint backlog tracking, task management |
| WhatsApp | Daily stand-ups, quick questions, blocker alerts |
| Google Meet | Sprint planning, review, retrospective meetings |

## Definition of Ready (DoR)

A user story is ready for a sprint when:
- [ ] Clear acceptance criteria defined
- [ ] Dependencies identified and resolved
- [ ] Effort estimated in story points (1, 2, 3, 5, 8)
- [ ] UI/UX designs approved (if applicable)

## Definition of Done (DoD)

A user story is done when:
- [ ] Code implemented and passes local tests
- [ ] Code reviewed by at least one team member
- [ ] Merged to main branch
- [ ] Functionally tested by Tester (Aphiwe)
- [ ] Documentation updated
- [ ] Product Owner approval received

## Story Point Estimation Scale

| Story Points | Effort | Example |
|--------------|--------|---------|
| 1 | Trivial | Fix typo, update text |
| 2 | Small | Add a simple button, minor CSS change |
| 3 | Medium | Create login form with validation |
| 5 | Large | Implement full authentication with JWT |
| 8 | Extra Large | Complete user registration with email verification |

## Team Working Agreement

1. **Commit Messages:** Use format: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
2. **Branch Naming:** `feature/description`, `bugfix/description`, `hotfix/description`
3. **Pull Requests:** Minimum 1 reviewer approval before merging
4. **Code Reviews:** Provide feedback within 24 hours
5. **Daily Stand-up:** Update WhatsApp by 10:00 AM with: What I did yesterday, What I'll do today, Any blockers

---

**Prepared by:** Brilliant (Scrum Master)
**Date:** April 5, 2026
