Author : Aphiwe Sibusiso Mntambo(Tester)

# Technology Stack

## Overview

The technology stack refers to the combination of programming languages, frameworks, libraries, and tools that are used to build and run the application. It includes choices for frontend development, backend development, databases, hosting platforms, and third-party integrations. A well-chosen technology stack ensures system performance, scalability, and ease of maintenance.

The CRMRS technology stack was selected based on the following criteria:

- **Backend technology** — the server-side framework and libraries that handle business logic, authentication, and data processing
- **Frontend framework** — the client-side technology responsible for the user interface and user experience
- **Database** — the system used to store, retrieve, and manage all application data
- **Hosting** — the platform used to deploy and serve the application to end users

---

## Frontend Technology

### React.js

The frontend of CRMRS is developed using **React.js** with **TypeScript**.

**Purpose:**
React.js is used to build a responsive and interactive user interface for students and administrators.

**Features of the Frontend:**
- Student registration and login pages
- Complaint submission forms with image upload support
- Maintenance tracking dashboard
- Complaint status viewing
- Admin management dashboard
- Responsive design for desktop and mobile devices

### Why React.js?
- Supports **component-based development**
- Makes the interface easier to manage and maintain
- Allows reusable UI components
- Improves user experience through dynamic updates
- Scalable for future system improvements

React.js is suitable for CRMRS because the system requires multiple interactive interfaces for reporting and tracking maintenance issues.

---

## Frontend Tooling & Libraries

### Vite
Used as the build tool and development server for fast hot module replacement and optimized production builds.

### TypeScript
Adds static type checking to JavaScript, reducing runtime errors and improving code maintainability across the project.

### Tailwind CSS
A utility-first CSS framework used for styling all components. Enables rapid UI development with consistent spacing, colors, and responsive breakpoints.

### shadcn/ui
A component library built on Radix UI primitives, providing accessible and customizable UI components such as toasts, tooltips, and form elements.

### TanStack React Query
Handles server state management, including data fetching, caching, and synchronization between the frontend and backend API.

### React Router v6
Manages client-side routing and navigation between pages such as Login, Dashboard, My Complaints, and the Admin Panel.

### Lucide React
Provides consistent and lightweight SVG icons used throughout the interface.

---

## Backend Technology

### Python (FastAPI)

The backend of CRMRS is developed using **FastAPI**, a modern high-performance Python framework.

**Purpose:**
FastAPI handles the core business logic of the system, including:

- User authentication and authorization
- Complaint submission and management
- Complaint status tracking and updates
- Image file uploads and storage
- Communication with the database

### Why FastAPI?
- High performance with asynchronous support
- Automatic interactive API documentation (Swagger UI)
- Built-in data validation using Pydantic
- Suitable for **small to large-sized applications**
- Easy integration with React.js frontend
- Supports REST API development with minimal boilerplate

FastAPI is appropriate for CRMRS because it provides a clean and efficient structure while remaining powerful enough to manage complaint workflows, user authentication, and file uploads.

---

## Backend Libraries

### SQLAlchemy
An ORM (Object Relational Mapper) used to define and interact with database models in Python, without writing raw SQL.

### Pydantic
Used for request and response data validation and serialization through schemas.

### python-jose
Handles JWT (JSON Web Token) creation and verification for secure user authentication.

### passlib + bcrypt
Used for secure password hashing and verification during registration and login.

### python-multipart
Enables file upload support, allowing students to attach photos when submitting complaints.

### python-dotenv
Loads environment variables from a `.env` file to keep sensitive configuration such as database URLs and secret keys out of the codebase.

---

## Database Technology

### PostgreSQL

CRMRS uses **PostgreSQL** as the primary database system.

**Purpose:**
PostgreSQL stores structured data such as:

- Student information
- User login credentials
- Residence details
- Room numbers
- Maintenance complaints
- Complaint categories
- Complaint statuses
- Uploaded image references
- Maintenance records

### Why PostgreSQL?
- Powerful and reliable relational database system
- Efficient storage of structured data
- Advanced support for enums, constraints, and relationships
- Strong data consistency and ACID compliance
- Good performance for university-scale systems
- Excellent compatibility with SQLAlchemy

PostgreSQL is suitable because CRMRS manages highly structured information that benefits from relational database design.

---

## Hosting & Deployment

### Overview

Hosting refers to the platform and infrastructure used to deploy the CRMRS application so that it is accessible to students and administrators over the internet. A reliable hosting solution ensures that the system remains available, secure, and performant at all times.

---

### Frontend Hosting — Vercel

The React.js frontend of CRMRS is hosted on **Vercel**, a cloud platform optimized for modern frontend frameworks.

**Purpose:**
Vercel serves the compiled React application to users through a global Content Delivery Network (CDN), ensuring fast load times regardless of location.

**Features:**
- Automatic deployments triggered by GitHub commits
- Global CDN for fast content delivery
- Free SSL/HTTPS certificate for secure connections
- Preview deployments for testing before going live
- Zero-configuration setup for Vite and React projects

### Why Vercel?
- Purpose-built for React and Vite projects
- Seamless GitHub integration for continuous deployment
- Free tier suitable for university projects
- Automatic HTTPS out of the box
- Simple and fast to configure

---

### Backend Hosting — Render

The FastAPI backend of CRMRS is hosted on **Render**, a cloud platform for deploying backend services and APIs.

**Purpose:**
Render runs the FastAPI server and makes the REST API accessible to the frontend application over HTTPS.

**Features:**
- Automatic deployments from GitHub
- Managed PostgreSQL database hosting
- Free SSL certificates
- Environment variable management for secure configuration
- Persistent disk storage for uploaded complaint images

### Why Render?
- Supports Python and FastAPI with minimal configuration
- Offers managed PostgreSQL database hosting in one platform
- Free tier available for development and small-scale deployment
- Automatic HTTPS and environment variable support
- Reliable uptime suitable for university-scale usage

---

### Database Hosting — Render PostgreSQL

The PostgreSQL database is hosted as a **managed database service on Render**, running alongside the backend.

**Purpose:**
Render's managed PostgreSQL service handles database provisioning, backups, and connection management, removing the need to manually configure a database server.

**Features:**
- Automatic backups
- Secure connection strings
- Easy integration with the FastAPI backend hosted on the same platform
- Scalable storage as data grows

---

### Deployment Architecture

```text
+-------------------------------+       +-------------------------------+
|        Student / Admin        |       |        Student / Admin        |
|        (Web Browser)          |       |        (Mobile Browser)       |
+-------------------------------+       +-------------------------------+
               |                                       |
               +-------------------+-------------------+
                                   |
                                   v
                    +------------------------------+
                    |     Vercel (Frontend CDN)    |
                    |   React.js + TypeScript App  |
                    |   Global Content Delivery    |
                    +------------------------------+
                                   |
                          HTTPS API Requests
                                   |
                                   v
                    +------------------------------+
                    |    Render (Backend Server)   |
                    |    Python FastAPI REST API   |
                    |  Authentication, Complaints, |
                    |       File Uploads           |
                    +------------------------------+
                                   |
                                   v
                    +------------------------------+
                    |  Render (Managed PostgreSQL) |
                    |  Users, Complaints, Statuses |
                    |  Images, Residences, Rooms   |
                    +------------------------------+
```

---

## Version Control

### GitHub

The project uses **GitHub** for version control and team collaboration.

**Purpose:**
GitHub helps the team:

- Collaborate on project development
- Track code changes
- Manage different versions of the project
- Store project documentation
- Monitor development progress

### Why GitHub?
- Supports teamwork and collaboration
- Provides version history
- Helps avoid code conflicts
- Enables issue tracking
- Supports project management through boards and tasks

GitHub ensures that the CRMRS team can work efficiently while maintaining organized and trackable development.

---

## Technology Stack Summary

| Layer | Technology |
|--------|------------|
| Frontend Framework | React.js (TypeScript) |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| State Management | TanStack React Query |
| Routing | React Router v6 |
| Backend | Python (FastAPI) |
| Database ORM | SQLAlchemy |
| Authentication | JWT (python-jose) + bcrypt |
| Database | PostgreSQL |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |
| Database Hosting | Render (Managed PostgreSQL) |
| Version Control | GitHub |

---

## Justification

### React.js + TypeScript (Frontend)
**Why selected:**
- Supports reusable UI components
- Makes the interface interactive and responsive
- TypeScript adds type safety, reducing bugs during development
- Easier to scale and maintain

CRMRS requires dashboards, forms, and dynamic status updates, making React.js an effective frontend solution.

---

### FastAPI (Backend)
**Why selected:**
- High performance with async support
- Automatic API documentation via Swagger UI
- Built-in request validation with Pydantic
- Easy integration with frontend frameworks

FastAPI simplifies backend development while still supporting CRMRS business processes such as complaint management, authentication, and image uploads.

---

### PostgreSQL (Database)
**Why selected:**
- Reliable and powerful relational database
- Supports enums and complex relationships natively
- ACID-compliant for data integrity
- Pairs well with SQLAlchemy ORM

CRMRS stores organized, relational information, making PostgreSQL an ideal choice.

---

### GitHub (Version Control)
**Why selected:**
- Enables team collaboration
- Tracks changes efficiently
- Supports issue management and documentation

GitHub ensures proper project organization and teamwork throughout CRMRS development.

---

### Vercel + Render (Hosting)
**Why selected:**
- Vercel is purpose-built for React and Vite frontends with zero configuration
- Render supports Python and FastAPI backends with managed PostgreSQL in one platform
- Both platforms offer free tiers suitable for a university project
- Automatic GitHub deployments on both platforms enable continuous delivery
- HTTPS is provided out of the box on both platforms, ensuring secure communication

Vercel and Render together provide a reliable, low-cost, and easy-to-manage hosting solution for CRMRS.

---

## Technology Architecture

```text
+--------------------------------------------------+
|                  Frontend Layer                  |
|           React.js + TypeScript + Vite           |
| (Student Portal / Admin Dashboard / Complaint   |
|          Submission UI / Status Tracking)        |
|             Hosted on: Vercel (CDN)              |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
|                   Backend Layer                  |
|              Python (FastAPI REST API)           |
| (Authentication, Complaint Logic, Tracking,     |
|  File Uploads, Status Updates)                  |
|              Hosted on: Render                   |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
|                   Database Layer                 |
|                    PostgreSQL                    |
| (Users, Complaints, Statuses, Images, Rooms)    |
|       Hosted on: Render Managed PostgreSQL       |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
|                Version Control                   |
|                     GitHub                       |
| (Collaboration, Code Management, Versioning,    |
|        Continuous Deployment Triggers)           |
+--------------------------------------------------+
```
