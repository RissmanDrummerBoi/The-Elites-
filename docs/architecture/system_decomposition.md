Author : Aphiwe Sibusiso Mntambo(Tester)

# System Decomposition


## Modules

### 1. User Management Module
### 2. Authentication & Authorization Module
### 3. Complaint Management Module
### 4. Maintenance Assignment Module
### 5. Notification Module
### 6. Issue Tracking Module
### 7. Feedback Management Module
### 8. Residence & Room Management Module
### 9. Admin Dashboard Module
### 10. Database Management Module

---

## Component Responsibilities

### User Management Module
Responsible for handling student and maintenance staff information.

**Responsibilities:**
- Student registration
- User profile management
- Residence information storage
- Room number management
- Update user details

**Users involved:**
- Students
- Maintenance staff
- Residence administrators

---

### Authentication & Authorization Module
Responsible for securing access to the system.

**Responsibilities:**
- User login and logout
- Password validation
- Authentication of users
- Role-based access control
- Permission management

**Example Roles:**
- Student
- Maintenance Staff
- Residence Administrator

---

### Complaint Management Module
Responsible for managing maintenance complaints submitted by students.

**Responsibilities:**
- Complaint submission
- Complaint categorization
- Complaint editing (if allowed)
- Complaint storage
- Complaint retrieval

**Complaint Categories:**
- Electrical
- Plumbing
- Carpentry / Repairs
- General Maintenance

---

### Maintenance Assignment Module
Responsible for assigning reported issues to the correct maintenance department.

**Responsibilities:**
- Route complaints to departments
- Assign maintenance personnel
- Update work allocation
- Manage task ownership

**Example Assignment Flow:**
Electrical issue → Electrical Department

---

### Notification Module
Responsible for communication between students and maintenance staff.

**Responsibilities:**
- Notify maintenance teams of new complaints
- Send complaint status updates
- Inform students when issues are resolved
- Generate alerts and reminders

**Notification Types:**
- New complaint alerts
- Status updates
- Resolution confirmation

---

### Issue Tracking Module
Responsible for tracking complaint progress.

**Responsibilities:**
- Monitor complaint status
- Display issue progress
- Update repair stages
- Track maintenance history

**Status Examples:**
- Pending
- In Progress
- Resolved

---

### Feedback Management Module
Responsible for collecting user feedback after issue resolution.

**Responsibilities:**
- Allow students to submit feedback
- Store ratings/comments
- Measure service quality
- Improve accountability

---

### Residence & Room Management Module
Responsible for residence-related information.

**Responsibilities:**
- Store residence details
- Manage room allocations
- Link students to residences
- Validate residence information

---

### Admin Dashboard Module
Responsible for administrative system oversight.

**Responsibilities:**
- Monitor complaints
- View system statistics
- Manage users
- Oversee maintenance performance
- Generate reports

**Admin Features:**
- Complaint monitoring
- User management
- Issue analytics

---

### Database Management Module
Responsible for storing and retrieving system data.

**Responsibilities:**
- Data storage
- CRUD operations
- Database security
- Backup and recovery
- Data retrieval optimization

**Stored Data Includes:**
- Student details
- Maintenance complaints
- Complaint categories
- Issue statuses
- Notifications
- Feedback records
- Maintenance logs

---

## Component Interaction Overview

The modules interact as follows:

```text
+----------------------+
|   User Management    |
+----------------------+
           |
           v
+----------------------+
| Authentication       |
| & Authorization      |
+----------------------+
           |
           v
+----------------------+
| Complaint Management |
+----------------------+
           |
           v
+----------------------+
| Maintenance          |
| Assignment           |
+----------------------+
           |
           v
+----------------------+
| Notification Module  |
+----------------------+
           |
           v
+----------------------+
| Issue Tracking       |
+----------------------+
           |
           v
+----------------------+
| Feedback Management  |
+----------------------+
           |
           v
+----------------------+
| Database Management  |
+----------------------+
```

---

## Justification for Decomposition

The CRMRS system is decomposed into modules because:

- It improves **maintainability** by separating responsibilities.
- It supports **team collaboration**, allowing developers to work independently on different modules.
- It improves **scalability**, making it easier to add future features.
- It reduces system complexity through modular organization.
- It improves **testing and debugging** since modules can be tested separately.

This modular decomposition ensures that CRMRS remains organized, efficient, and easy to expand as university maintenance needs grow.

