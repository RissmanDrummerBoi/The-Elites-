# The-Elites-🏠 Campus Residence Maintenance Reporting System (CRMRS)

A digital platform streamlining maintenance issue reporting for on-campus student residences at IWS

📖 **Table of Contents**

Problem Statement

Solution

Features

User Workflow

Target Audience

Tech Stack

Contributors

🎯 **Problem Statement**


Students living in on-campus residences frequently encounter maintenance issues including:

🔧 Plumbing faults

⚡ Electrical failures

🪑 Broken furniture

🏚️ Poor room conditions

**Current Challenges:**


❌ Inefficient manual reporting (verbal complaints/paperwork)

⏰ Delayed response times

📢 Poor communication between students and maintenance teams

😔 Reduced student satisfaction with campus living conditions


💡**Solution**

CRMRS is a centralized digital platform (web/mobile application) that enables students to report maintenance issues directly to relevant campus departments, creating a seamless communication bridge between students and maintenance teams.

**Key Benefits**

✅ Streamlined complaint submission process

✅ Automatic routing to appropriate departments

✅ Real-time status tracking

✅ Improved accountability and response times

✅ Enhanced student satisfaction


✨ **Features**


**For Students**

🔐 Secure Authentication	Register and login with student credentials

📋 Category Selection	Choose from Electrical, Plumbing, Carpentry, or General Maintenance

📝 Complaint Submission	Easy-to-use form with all required details

👁️ Status Tracking	Real-time updates on complaint progress

🔔 Notifications	Receive alerts when issue status changes


**For Maintenance Staff**

📊 Dashboard	View all reported issues in one place

🏷️ Status Management	Update issue status (Pending → In Progress → Resolved)

🔍 Filter & Search	Sort issues by category, status, or residence

📈 Analytics	Track response times and resolution metrics


**For Administrators**

👥 User Management	Manage student and staff accounts

🏢 Residence Management	Configure residence and room details

📑 Reports	Generate maintenance activity reports

🔄 User Workflow


**Step	Action	Description**

1	Registration/Login	Students create account using student number and personal details

2	Dashboard View	Categorized maintenance options displayed

3	Submit Complaint	Fill in details: Name, Student #, Residence, Room #, Description

4	Auto-Assignment	System routes to appropriate department (Plumbing, Electrical, etc.)

5	Staff Management	Maintenance team updates status and tracks progress

6	Resolution	Student receives confirmation and can provide feedback


👥 **Target Audience**

Type	Users:

Primary	Students living in on-campus residences at IWS

Secondary	Campus maintenance staff, University housing/residence management


🛠️ **Tech Stack**

🌐 _Frontend (TypeScript)_

React 18 — UI framework

TypeScript — type safety

Vite — build tool & dev server

React Router v6 — client-side routing

TanStack React Query — server state management

Tailwind CSS — utility-first styling

shadcn/ui — component library

Lucide React — icons

Google Fonts — Playfair Display (headings) + Inter (body)

🖥️ _Backend (Python)_

FastAPI — web framework

SQLAlchemy — ORM for database models

PostgreSQL — database

Alembic — (likely) for migrations

python-jose — JWT token creation & verification

passlib + bcrypt — password hashing

python-dotenv — environment variable management

python-multipart — file/image uploads


_DevOps & Tools_


Git & GitHub

Docker (Containerization)

GitHub Actions (CI/CD)


**_Contributors_**

