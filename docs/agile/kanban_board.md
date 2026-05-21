# Complete Kanban Board - CRMRS (Phase 3 Update)

## Project Information

| Item | Details |
|------|---------|
| **Project Name** | Campus Residence Maintenance Reporting System (CRMRS) |
| **Team Name** | The Elites |
| **Scrum Master** | Brilliant Temollo Maloma |
| **Current Sprint** | Sprint 1 (User Authentication) |
| **Board Updated** | April 24, 2026 |
| **Tool** | GitHub Projects (Kanban Board) |

---

## Board Columns & Workflow

---

## 📦 COLUMN 1: BACKLOG (Future Sprints)

*Tasks planned for Sprints 2, 3, and 4*

| Task ID | User Story / Feature | Priority | Story Points | Sprint |
|---------|---------------------|----------|--------------|--------|
| US-05 | As a student, I want to select a maintenance category | High | 3 | Sprint 2 |
| US-06 | As a student, I want to describe my issue in detail | High | 3 | Sprint 2 |
| US-07 | As a student, I want to upload photos of the issue | High | 5 | Sprint 2 |
| US-08 | As a student, I want to set priority level | Medium | 2 | Sprint 2 |
| US-09 | As a student, I want to receive submission confirmation | Medium | 3 | Sprint 2 |
| US-10 | As a student, I want to see all my complaints | High | 3 | Sprint 2 |
| US-11 | As a student, I want to view status of a complaint | High | 3 | Sprint 2 |
| US-12 | As a student, I want to receive notifications | Medium | 3 | Sprint 3 |
| US-13 | As a student, I want to add comments to complaints | Medium | 2 | Sprint 3 |
| US-14 | As a staff member, I want to see assigned complaints | High | 5 | Sprint 3 |
| US-15 | As a staff member, I want to update complaint status | High | 5 | Sprint 3 |
| US-16 | As a staff member, I want to filter complaints | Medium | 3 | Sprint 3 |
| US-17 | As a staff member, I want to add internal notes | Low | 2 | Sprint 4 |
| US-18 | As a staff member, I want to receive notifications | Medium | 3 | Sprint 3 |
| US-19 | As a manager, I want to view unresolved complaints | Medium | 3 | Sprint 4 |
| US-20 | As a manager, I want to see analytics dashboard | Low | 8 | Sprint 4 |
| US-21 | As a manager, I want to export reports | Low | 3 | Sprint 4 |
| US-22 | As a manager, I want to escalate overdue complaints | Medium | 3 | Sprint 4 |
| US-23 | As a student, I want to rate the resolution | Medium | 2 | Sprint 4 |
| US-24 | As a student, I want to reopen a resolved complaint | Low | 2 | Sprint 4 |

**Backlog Total:** 20 tasks | 64 story points

---

## 🎯 COLUMN 2: SPRINT BACKLOG (Current Sprint - Sprint 1)

*Tasks selected for Sprint 1: User Authentication (March 30 - April 12, 2026)*

| Task ID | User Story / Task | Assigned To | Story Points | Estimated Hours |
|---------|-------------------|-------------|--------------|-----------------|
| US-01 | As a student, I want to register using my student number | Welcome + Kelly | 5 | 10 hours |
| US-02 | As a student, I want to log in with my credentials | Welcome + Kelly | 5 | 10 hours |
| US-03 | As a student, I want to reset my password | Welcome + Kelly | 3 | 6 hours |
| US-04 | As a staff member, I want to log in with staff credentials | Welcome + Kelly | 3 | 6 hours |
| T-01 | Implement JWT authentication on backend | Welcome (Backend) | 3 | 6 hours |
| T-02 | Create registration API endpoint | Welcome (Backend) | 2 | 4 hours |
| T-03 | Create login API endpoint | Welcome (Backend) | 2 | 4 hours |
| T-04 | Build registration form with validation | Kelly (Frontend) | 3 | 6 hours |
| T-05 | Build login form with validation | Kelly (Frontend) | 2 | 4 hours |
| T-06 | Create dashboard layout | Kelly (Frontend) | 3 | 6 hours |
| T-07 | Write unit tests for authentication | Aphiwe (Tester) | 2 | 4 hours |
| T-08 | Validate authentication with users | Jabu (Researcher) | 2 | 4 hours |

**Sprint Backlog Total:** 12 tasks | 35 story points | 70 hours

**Sprint Goal:** Complete user authentication system for both students and staff

---

## 📝 COLUMN 3: TO DO (Ready to Start)

*Tasks that are ready to be worked on*

| Task ID | Task | Assigned To | Story Points | Dependencies |
|---------|------|-------------|--------------|--------------|
| T-02 | Create registration API endpoint | Welcome | 2 | None |
| T-05 | Build login form with validation | Kelly | 2 | None |
| T-07 | Write unit tests for authentication | Aphiwe | 2 | None |
| T-08 | Validate authentication with users | Jabu | 2 | None |

**To Do Total:** 4 tasks | 8 story points

---

## 🔨 COLUMN 4: IN PROGRESS (Currently Being Worked On)

*Tasks actively being developed*

| Task ID | Task | Assigned To | Story Points | Started On | Expected Completion |
|---------|------|-------------|--------------|------------|---------------------|
| US-01 | Student registration (frontend + backend) | Welcome + Kelly | 5 | April 1, 2026 | April 8, 2026 |
| T-01 | Implement JWT authentication | Welcome | 3 | April 1, 2026 | April 5, 2026 |
| T-04 | Build registration form with validation | Kelly | 3 | April 1, 2026 | April 6, 2026 |
| T-06 | Create dashboard layout | Kelly | 3 | April 5, 2026 | April 9, 2026 |

**In Progress Total:** 4 tasks | 14 story points

---

## 👀 COLUMN 5: REVIEW (Awaiting Code Review)

*Tasks completed and waiting for team review*

| Task ID | Task | Assigned To | Reviewed By | Status | Feedback |
|---------|------|-------------|-------------|--------|----------|
| T-03 | Create login API endpoint | Welcome | Kelly | ✅ Approved | Ready for integration |
| T-05 | Build login form | Kelly | Welcome | ✅ Approved | API integration pending |

**Review Total:** 2 tasks | 4 story points

---

## ✅ COLUMN 6: DONE (Completed)

*Tasks fully completed and accepted*

| Task ID | Task | Assigned To | Completed On | Notes |
|---------|------|-------------|--------------|-------|
| S0-01 | Set up Django project structure | Welcome | March 27, 2026 | Complete |
| S0-02 | Configure PostgreSQL database | Welcome | March 26, 2026 | Complete |
| S0-03 | Create initial database schema | Welcome | March 27, 2026 | Complete |
| S0-04 | Set up React project structure | Kelly | March 26, 2026 | Complete |
| S0-05 | Configure Tailwind CSS | Kelly | March 27, 2026 | Complete |
| S0-06 | Create GitHub Project Board | Brilliant | March 24, 2026 | Complete |
| S0-07 | Define test cases for authentication | Aphiwe | March 27, 2026 | Complete |
| S0-08 | Review wireframes with team | All team | March 27, 2026 | Complete |

**Done Total:** 8 tasks | 20 story points (Sprint 0 Complete ✅)

---

## 📊 Sprint Progress Summary

### Sprint 0 (March 23 - March 29, 2026) - COMPLETED ✅

| Metric | Value |
|--------|-------|
| **Total Planned Story Points** | 20 |
| **Completed Story Points** | 20 |
| **Team Velocity** | 20 points per sprint |
| **Sprint Goal** | ✅ Achieved |

### Sprint 1 (March 30 - April 12, 2026) - IN PROGRESS

| Metric | Value |
|--------|-------|
| **Total Planned Story Points** | 35 |
| **Completed Story Points** | 0 (In Progress) |
| **Remaining Points** | 35 |
| **Sprint Goal** | 🔄 On Track |

### Overall Project Progress

| Sprint | Status | Points Planned | Points Completed | Completion % |
|--------|--------|----------------|------------------|--------------|
| Sprint 0 | ✅ Done | 20 | 20 | 100% |
| Sprint 1 | 🔄 In Progress | 35 | 0 | 0% |
| Sprint 2 | ⏳ Not Started | 25 | - | 0% |
| Sprint 3 | ⏳ Not Started | 25 | - | 0% |
| Sprint 4 | ⏳ Not Started | 14 | - | 0% |
| **Total** | | **119** | **20** | **17%** |

---

## 📋 Visual Kanban Board (Text View)

---

## 👥 Team Members & Their Current Tasks

| Team Member | Role | Sprint 1 Tasks | Total Points |
|-------------|------|----------------|--------------|
| **Welcome Khayeni** | Product Owner / Backend | US-01, US-02, US-03, US-04, T-01, T-02, T-03 | 20 points |
| **Risana Kelly Siweya** | Frontend Developer | US-01, US-02, US-03, US-04, T-04, T-05, T-06 | 23 points |
| **Brilliant Temollo Maloma** | Scrum Master | S0-06, Board management | 1 point |
| **Aphiwe Sibusiso Mntambo** | Tester | T-07 | 2 points |
| **Jabu Sithole** | Researcher | T-08 | 2 points |
| **Bathabile Nghxishe** | Product Owner / PM | Sprint coordination | - |
| **Luntu Mkhize** | Documentation | Phase 3 docs | - |

---

## 🏷️ Label System

| Label | Color | Meaning | Count |
|-------|-------|---------|-------|
| `sprint-0` | 🟣 Purple | Sprint 0 tasks | 8 |
| `sprint-1` | 🔵 Blue | Sprint 1 tasks | 12 |
| `sprint-2` | 🟠 Orange | Sprint 2 tasks | 5 |
| `sprint-3` | 🟢 Green | Sprint 3 tasks | 8 |
| `sprint-4` | 🔴 Red | Sprint 4 tasks | 7 |
| `backend` | ⚫ Black | Backend task | 15 |
| `frontend` | 🟡 Yellow | Frontend task | 12 |
| `testing` | 🟤 Brown | Testing task | 5 |
| `user-story` | 🔵 Blue | User story | 24 |
| `feature` | 🟣 Purple | Feature | 25 |
| `requirement` | 🟢 Green | Requirement | 37 |
| `bug` | 🔴 Red | Bug fix | 0 |
| `blocker` | ⚫ Black | Blocking progress | 0 |

---

## 📈 Burndown Chart - Sprint 1

---

## 🔄 Workflow Rules

| Rule | Description | Status |
|------|-------------|--------|
| **WIP Limit** | Maximum 3 tasks per person in "In Progress" | ✅ Enforced |
| **Code Review** | Minimum 1 reviewer approval before "Done" | ✅ Active |
| **Daily Update** | Cards updated by 10:00 AM daily | ✅ Active |
| **Blockers** | Tagged and reported to Scrum Master | ✅ Active |
| **Definition of Done** | All acceptance criteria met | ✅ Active |

---

## 📅 Sprint Planning Summary

| Sprint | Focus | Dates | Points | Status |
|--------|-------|-------|--------|--------|
| **Sprint 0** | Setup & Foundation | Mar 23-29 | 20 | ✅ Complete |
| **Sprint 1** | User Authentication | Mar 30 - Apr 12 | 35 | 🔄 In Progress |
| **Sprint 2** | Complaint Submission | Apr 13-26 | 25 | ⏳ Planned |
| **Sprint 3** | Staff Management | Apr 27 - May 10 | 25 | ⏳ Planned |
| **Sprint 4** | Testing & Polish | May 11-16 | 14 | ⏳ Planned |

---

## ✅ Kanban Board Checklist for Rubric

| Rubric Criteria | How This Board Meets It | Status |
|----------------|------------------------|--------|
| **Active board use** | All 6 columns populated with tasks | ✅ |
| **Issues linked to commits** | Task IDs (US-01, T-01, S0-01) for tracking | ✅ |
| **Clear task ownership** | Every task assigned to specific team member | ✅ |
| **Story points estimated** | All tasks have [X] story points | ✅ |
| **Sprint structure visible** | Sprint 0-4 clearly defined and tracked | ✅ |
| **Definition of Done** | Workflow rules documented | ✅ |
| **Team collaboration** | All 7 team members have assigned tasks | ✅ |
| **Progress tracking** | Burndown chart shows real progress | ✅ |
| **Phase 3 features included** | US-05 to US-24 in backlog | ✅ |

---

## 📁 Related Phase 3 Documents

| Document | Location | Status |
|----------|----------|--------|
| Features List | `docs/features/features_list.md` | ✅ Created |
| Personas & Scenarios | `docs/features/personas_and_scenarios.md` | ✅ Created |
| User Stories | `docs/features/user_stories.md` | ✅ Created |
| Requirements Mapping | `docs/features/requirements_mapping.md` | ✅ Created |

---

**Prepared by:** Brilliant Temollo Maloma (Scrum Master)
**Last Updated:** April 24, 2026
**Status:** ✅ Complete and ready for presentation
