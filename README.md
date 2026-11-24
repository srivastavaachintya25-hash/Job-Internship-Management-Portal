# Job & Internship Management Portal

A web-based platform designed to help students and job seekers explore job opportunities, discover internships, submit applications, manage their profiles, and track application progress in one place.

## About the Project

The **Job & Internship Management Portal** aims to simplify the job search and internship application process by providing a centralized platform for discovering opportunities and managing applications.

Users can explore available jobs and internships, submit applications, update their personal profiles, and monitor the progress of their applications through an interactive progress tracking system.

This project is developed as a team collaboration project using frontend web technologies.

## Key Features

### 1. Home Page
- Professional landing page.
- Navigation to different sections of the portal.
- Explore Jobs and Explore Internships options.
- Career category cards.
- Application progress bars displayed on the home page.

### 2. Jobs Management
- Browse available job opportunities.
- View job descriptions and company details.
- Explore job requirements and eligibility.
- Apply for available positions.

### 3. Internship Management
- Dynamic internship cards.
- Search internships by title or company.
- Filter internships by category.
- View internship details.
- Apply for internships.

### 4. Application Management
- User-friendly application form.
- Collect applicant details and qualifications.
- Submit job and internship applications.
- Store and manage application records.

### 5. Profile Management
- View personal information.
- Edit profile details.
- Update educational qualifications.
- Manage skills and professional information.
- Save profile changes.

### 6. Application Records
- View submitted applications.
- Search applications by name, email, or position.
- Filter applications by status.
- Update application statuses.

### 7. Application Progress Tracking
- Display application progress on the home page.
- Visual progress bars based on application status.
- Track the stages of submitted applications.

### 8. Authentication
- Login page.
- User registration page.
- Form validation.
- Login and registration interface.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layouts |
| JavaScript | Dynamic functionality and interactions |
| JSON Server | Local REST API and data management (integration) |
| LocalStorage | Browser-based profile data persistence |
| Git | Version control |
| GitHub | Team collaboration and repository management |
| VS Code | Development environment |
| Live Server | Local frontend development |

## Application Progress System

The portal uses different application statuses to represent the progress of an application.

| Application Status | Progress |
|---|---:|
| Applied | 20% |
| Under Review | 40% |
| Shortlisted | 60% |
| Interview | 80% |
| Final Result | 100% |

The progress bar updates according to the latest application status.

## Project Structure

```text
Job-Internship-Management-Portal/
│
├── Achintya_Srivastava/
│   ├── home.html
│   ├── home.css
│   └── home.js
│
├── Job/
│   ├── jobs.html
│   ├── jobs.css
│   ├── jobs.js
│   ├── application-form.html
│   ├── application-form.css
│   └── application-form.js
│
├── Internships Page/
│   ├── Internships.html
│   ├── internships.css
│   ├── internships.js
│   └── internship-details.html
│
├── Application and profile/
│   ├── profile.html
│   ├── profile.css
│   ├── profile.js
│   ├── user-list.html
│   ├── user-list.css
│   └── user-list.js
│
├── Authentication/
│   ├── login.html
│   ├── login.css
│   ├── login.js
│   ├── register.html
│   ├── register.css
│   └── register.js
│
├── assets/
│   └── css/
│       └── common.css
│
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

*Note: The structure represents the planned integrated project. Adjust filenames and folders to match the final merged repository.*

## Getting Started

### Prerequisites

Install the following before running the project:

- Visual Studio Code
- Node.js and npm
- Live Server extension
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/srivastavaachintya25-hash/Job-Internship-Management-Portal.git
```

### 2. Navigate to the Project

```bash
cd Job-Internship-Management-Portal
```

### 3. Install Dependencies

If JSON Server is configured in the project:

```bash
npm install
```

### 4. Start JSON Server

```bash
npm run server
```

The local API will be available at:

```text
http://localhost:3000
```

### 5. Run the Frontend

1. Open the project in Visual Studio Code.
2. Open the `home.html` file inside `Achintya_Srivastava`.
3. Right-click the file.
4. Select **Open with Live Server**.

The application will open in your browser.

## Team Members and Responsibilities

| Team Member | Responsibilities |
|---|---|
| Aamir Haque | Dynamic Internship Cards |
| Aditya Kumar | Application Form |
| Aditya Singh | Profile Management and Application Records |
| Achintya Srivastava | Home Page, Common UI Theme and Application Progress Tracking |

## Team Collaboration

The project follows a branch-based GitHub workflow.

- Each team member works on an individual branch.
- Changes are committed and pushed to the respective branches.
- Pull requests are created to merge completed work into the `Dev` branch.
- The integrated project is tested after merging.

### Main Development Branch

`Dev`

## Future Enhancements

- Secure user authentication.
- Role-based access for students and administrators.
- Backend database integration.
- Resume upload functionality.
- Email notifications for application updates.
- Advanced job and internship filtering.
- Admin dashboard.
- Deployment on a cloud hosting platform.

## Learning Outcomes

Through this project, we aim to gain practical experience in:

- Frontend web development.
- HTML, CSS and JavaScript.
- DOM manipulation and event handling.
- Fetch API and REST API integration.
- CRUD operations.
- Git and GitHub collaboration.
- Responsive web design.
- Team-based software development.

## Repository

**GitHub:** https://github.com/srivastavaachintya25-hash/Job-Internship-Management-Portal

## License

This project is developed for educational and academic purposes.

---

**Job & Internship Management Portal**

*Explore Opportunities. Build Skills. Track Your Career Journey.*
