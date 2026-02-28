
# **Work Side Application Blueprint**

## **1. Overview**

Work Side is a web application designed to connect workers and students with job opportunities. The platform features two distinct user-facing interfaces: a student portal and an admin dashboard. The student portal allows users to find job listings, while the admin dashboard provides tools for managing workers, students, and system settings.

- **Student Portal:** A user-friendly interface for students to browse and apply for jobs.
- **Admin Dashboard:** A comprehensive dashboard for administrators to manage users, monitor activity, and oversee the platform.

## **2. Core Features & Design**

### **Student-Facing Application**

- **Login Page (`login.html`):** A simple and intuitive login page for students to access their accounts.
- **Dashboard (`dashboard.html`):** The main hub for students, featuring a clean grid layout and easy navigation. Key sections include:
  - **List:** Redirects to a Google Form for job listings.
  - **Documents:** A section for managing documents.
  - **Account:** User account settings.
  - **Wallet:** A feature for managing payments or credits.
- **Styling (`dashboard.css`):** A modern and visually appealing design with a dark theme, rounded corners, and clear iconography.

### **Admin-Facing Application**

- **Login Page (`admin_login.html`):** A secure login page for administrators.
- **Dashboard (`admin_dashboard.html`):** A detailed dashboard for platform management, including:
  - **Animated Background:** The background image now features a subtle panning animation for a more dynamic and engaging user experience.
  - **Real-Time User Counts:** Animated counters for active worker and student users.
  - **User Management:** 
    - **Worker Handle:** Dropdown menus for creating and deleting workers.
    - **Student Handle:** Dropdown menus for creating and deleting students.
  - **Create Worker Modal:** A popup modal for creating new workers with fields for name, email, and password. The worker count updates in real-time upon creation.
  - **Delete Worker Page:** A page for deleting workers, accessible from the admin dashboard. The page displays a list of workers with their details and a "Delete" button.
  - **Create Student Modal:** A popup modal for creating new students with fields for name, email, and password. The student count updates in real-time upon creation.
  - **Delete Student Page:** A page for deleting students, accessible from the admin dashboard. The page displays a list of students with their details and a "Delete" button.
- **Styling (`admin_dashboard.css`):** A professional and data-driven design with a dark, futuristic theme, bold colors, and clear data visualizations.

## **3. Technical Implementation**

- **Frontend:** The application is built with modern, framework-less HTML, CSS, and JavaScript.
- **JavaScript (`admin_dashboard.js`):** The admin dashboard includes real-time counters for active users. It also handles the functionality of the "Create Worker" and "Create Student" modals, saving new users to `localStorage`.
- **JavaScript (`delete_worker.js`):** This script populates the worker list on the "Delete Worker" page, handles the deletion of workers, and stores deleted worker emails in `localStorage` to prevent them from logging in.
- **JavaScript (`delete_student.js`):** This script populates the student list on the "Delete Student" page, handles the deletion of students, and stores deleted student emails in `localStorage` to prevent them from logging in.
- **JavaScript (`login.js`):** The login script now checks `localStorage` to authenticate workers and students based on their generated credentials, and to ensure that deleted workers and students cannot log in.
- **External Libraries:** Font Awesome is used for iconography.

## **4. Current Sprint: Key Changes**

- **Dynamic Student Login:**
  - The login system now dynamically authenticates students based on the credentials stored in `localStorage`. Any student created by an admin can now log in to the student portal.
- **Dynamic Worker Login:**
  - The login system now dynamically authenticates workers based on the credentials stored in `localStorage`. Any worker created by an admin can now log in to the worker portal.
- **Create and Delete Student Functionality:**
  - Implemented a "Create Student" modal and a "Delete Student" page, mirroring the functionality of the worker management system.
  - The student count on the admin dashboard now updates in real-time when a new student is created.
  - Deleted students are now prevented from logging in.
- **"Password Worker" and "Password Student" Removal:**
  - Removed the "Password Worker" and "Password Student" options from the admin dashboard's navigation menu to simplify the user interface.
- **Real-Time Worker List:**
  - The "Create Worker" feature is now connected to the "Delete Worker" page. New workers are saved to `localStorage` and will appear in the worker list in real-time.
- **Delete Worker Functionality:**
  - Created a new "Delete Worker" page with a table of workers and a "Delete" button.
  - Implemented logic to prevent deleted workers from logging in.
- **Create Worker Modal and Real-Time Counter:**
  - Implemented a popup modal for creating new workers.
  - The worker count now updates in real-time when a new worker is generated.
- **Animated Background:**
  - Added a subtle panning animation to the admin dashboard's background image.
- **Real-Time User Counters:**
  - Added dynamic counters to the admin dashboard to show active "Worker" and "Student" users.
- **User Management Dropdowns:**
  - Added a dropdown menu to the "WORKER HANDLE" navigation link with options for "Create Worker" and "Delete Worker."
  - Added a dropdown menu to the "STUDENT HANDLE" navigation link with options for "Create Student" and "Delete Student."
- **Student Dashboard Link Update:**
  - Modified the "List" link on the student dashboard to open a Google Form in a new tab.
- **Styling and UI Fixes:**
  - Removed the hardcoded "124 Active / 5 Idle" text from the "Worker Status" card.
  - Corrected the admin logout button to redirect to the correct login page.
