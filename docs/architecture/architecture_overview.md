Author : Aphiwe Sibusiso Mntambo(Tester)

# System Architecture Overview

## Architectural Style
Layered Architecture

The **Campus Residence Maintenance Reporting System (CRMRS)** adopts a **Layered Architecture** because it provides a clear separation of responsibilities between the user interface, business processes, and database operations. This architecture is suitable for systems that involve structured workflows such as complaint submission, maintenance assignment, issue tracking, and feedback management.

---

## Alternative Options Considered

### Monolithic Architecture
- **Advantages**:
  - Simple to design and deploy.
  - Suitable for small systems with limited functionality.
  - Faster initial development.

- **Disadvantages**:
  - Harder to scale as the system grows.
  - Maintenance becomes difficult when adding new features.
  - Changes in one module can affect the entire system.

**Why not selected for CRMRS?**  
Although simple, a monolithic structure may become difficult to maintain as more residences, students, and maintenance services are added.

---

### Microservices Architecture
- **Advantages**:
  - Highly scalable.
  - Independent deployment of services.
  - Better fault isolation.

- **Disadvantages**:
  - More complex to implement.
  - Requires API communication between services.
  - Increased infrastructure and management overhead.

**Why not selected for CRMRS?**  
CRMRS is a university-based system and does not currently require the complexity of distributed services. Microservices would increase development difficulty unnecessarily.

---

## Trade-offs

CRMRS uses **Layered Architecture** because it balances **simplicity, maintainability, and modularity**.

### Benefits of the Selected Architecture
- Easy to understand and implement.
- Supports separation of concerns.
- Easier testing and debugging.
- Improves maintainability through modular layers.
- Suitable for a university system with structured operations.

### Acceptable Trade-offs
- Less scalable than microservices for very large systems.
- Possible communication delays between layers.
- Requires strict separation to avoid dependencies between layers.

For the current CRMRS scope, these trade-offs are acceptable because simplicity and maintainability are prioritized over extreme scalability.

---

## Layers

### Presentation Layer
Responsible for user interaction through the **web or mobile interface**.

Functions include:
- Student registration and login
- Complaint submission forms
- Complaint tracking dashboard
- Maintenance staff dashboard
- Status viewing and feedback

---

### Application Layer
Handles the **business logic** of the system.

Functions include:
- User authentication
- Complaint validation
- Categorization of maintenance issues
- Assignment to maintenance departments
- Notification handling
- Complaint status management
- Feedback processing

---

### Data Layer
Responsible for **database interactions and storage**.

Stores:
- Student details
- Residence and room information
- Complaint records
- Maintenance categories
- Complaint statuses
- Staff updates
- User feedback

---

## Justification

The Layered Architecture was selected because:

- It supports **separation of concerns**, making the system easier to maintain.
- Each layer can be developed and tested independently.
- It reduces complexity by separating user interface logic from business processes and database operations.
- It aligns well with the planned CRMRS workflow:
  
  **Login → Submit Complaint → Department Assignment → Status Tracking → Resolution → Feedback**

- It is practical for a university-scale system and suitable for student development teams.

---

## Potential Architectural Issues

### Tight Coupling Between Layers
There is a risk that layers may become overly dependent on each other.

**Mitigation:**
- Maintain strict responsibilities for each layer.
- Use modular classes and interfaces.

---

### Performance Bottlenecks
Heavy traffic from multiple students submitting complaints simultaneously may slow the system.

**Mitigation:**
- Optimize database queries.
- Use efficient data indexing.

---

### Database Overload
Large numbers of complaint records may reduce system performance.

**Mitigation:**
- Archive resolved complaints.
- Optimize storage and retrieval methods.

---

### Notification Failures
Maintenance teams may fail to receive updates.

**Mitigation:**
- Implement notification logging.
- Provide fallback communication methods.

---

### Security Risks
Student details such as room numbers and student IDs may be exposed.

**Mitigation:**
- Password encryption
- Authentication and authorization
- Secure database access

---

## High-Level Architecture Diagram

```text
+------------------------------------------------------+
|                 Presentation Layer                   |
|                                                      |
|  Student Portal / Maintenance Staff Dashboard       |
|  (Web or Mobile User Interface)                     |
+------------------------------------------------------+
                           |
                           v
+------------------------------------------------------+
|                 Application Layer                    |
|                                                      |
|  - User Authentication                               |
|  - Complaint Submission                              |
|  - Issue Categorization                              |
|  - Maintenance Assignment                            |
|  - Notifications                                     |
|  - Status Tracking                                   |
|  - Feedback Processing                               |
+------------------------------------------------------+
                           |
                           v
+------------------------------------------------------+
|                     Data Layer                       |
|                                                      |
|  - Database Communication                            |
|  - CRUD Operations                                   |
|  - Data Retrieval and Storage                        |
+------------------------------------------------------+
                           |
                           v
+------------------------------------------------------+
|                     Database                         |
|                                                      |
|  Users | Complaints | Categories | Statuses         |
|  Maintenance Records | Feedback                    |
+------------------------------------------------------+
```

### Explanation of Diagram

- **Presentation Layer:** Handles all user interactions for students and maintenance staff.
- **Application Layer:** Processes business rules and coordinates complaint handling and tracking.
- **Data Layer:** Manages communication between the application and database.
- **Database:** Stores all CRMRS information including users, complaints, statuses, and feedback.

---


