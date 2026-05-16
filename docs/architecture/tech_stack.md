Author : Aphiwe Sibusiso Mntambo(Tester)

# Technology Stack


## Frontend Technology

### React.js

The frontend of CRMRS will be developed using **React.js**.

**Purpose:**
React.js will be used to build a responsive and interactive user interface for students, maintenance staff, and administrators.

**Features of the Frontend:**
- Student registration and login pages
- Complaint submission forms
- Maintenance tracking dashboard
- Complaint status viewing
- Staff management dashboard
- Responsive design for desktop and mobile devices

### Why React.js?
- Supports **component-based development**
- Makes the interface easier to manage and maintain
- Allows reusable UI components
- Improves user experience through dynamic updates
- Scalable for future system improvements

React.js is suitable for CRMRS because the system requires multiple interactive interfaces for reporting and tracking maintenance issues.

---

## Backend Technology

### Python (Flask)

The backend of CRMRS will be developed using **Flask**, a lightweight Python framework.

**Purpose:**
Flask will handle the core business logic of the system, including:

- User authentication
- Complaint submission and management
- Maintenance issue assignment
- Complaint tracking
- Notifications and updates
- Communication with the database

### Why Flask?
- Lightweight and easy to use
- Suitable for **small to medium-sized applications**
- Faster development process
- Easy integration with React.js
- Flexible and customizable
- Supports REST API development

Flask is appropriate for CRMRS because it provides a simple structure while remaining powerful enough to manage complaint workflows and user interactions.

---

## Database Technology

### MySQL

CRMRS will use **MySQL** as the primary database system.

**Purpose:**
MySQL will store structured data such as:

- Student information
- User login credentials
- Residence details
- Room numbers
- Maintenance complaints
- Complaint categories
- Complaint statuses
- Maintenance records
- Feedback and reports

### Why MySQL?
- Reliable relational database system
- Efficient storage of structured data
- Easy to manage and maintain
- Strong data consistency
- Good performance for university-scale systems

MySQL is suitable because CRMRS manages highly structured information that benefits from relational database design.

---

## Version Control

### GitHub

The project will use **GitHub** for version control and team collaboration.

**Purpose:**
GitHub will help the team:

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
| Frontend | React.js |
| Backend | Python (Flask) |
| Database | MySQL |
| Version Control | GitHub |

---

## Justification

### React.js (Frontend)
**Why selected:**
- Supports reusable UI components
- Makes the interface interactive and responsive
- Easier to scale and maintain

CRMRS requires dashboards, forms, and real-time updates, making React.js an effective frontend solution.

---

### Flask (Backend)
**Why selected:**
- Lightweight and flexible
- Suitable for small-to-medium systems
- Easy integration with frontend frameworks

Flask simplifies backend development while still supporting CRMRS business processes such as complaint management and authentication.

---

### MySQL (Database)
**Why selected:**
- Reliable relational database
- Easy to manage
- Supports structured complaint and user data

CRMRS stores organized information, making MySQL an ideal choice.

---

### GitHub (Version Control)
**Why selected:**
- Enables team collaboration
- Tracks changes efficiently
- Supports issue management and documentation

GitHub ensures proper project organization and teamwork throughout CRMRS development.

---

## Planned Technology Architecture

```text
+--------------------------------------------------+
|                  Frontend Layer                  |
|                    React.js                      |
| (Student Portal / Staff Dashboard / Complaint   |
|                  Submission UI)                  |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
|                   Backend Layer                  |
|                Python (Flask API)                |
| (Authentication, Complaint Logic, Tracking,     |
| Assignment, Notifications)                       |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
|                   Database Layer                 |
|                      MySQL                       |
| (Users, Complaints, Statuses, Feedback, Rooms)  |
+--------------------------------------------------+
                        |
                        v
+--------------------------------------------------+
|                Version Control                   |
|                     GitHub                       |
| (Collaboration, Code Management, Versioning)    |
+--------------------------------------------------+
```
