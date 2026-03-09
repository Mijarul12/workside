# **Work Side Application Blueprint**

## **1. Overview**

Work Side is a web application designed to connect workers and students with job opportunities and provide assistance with various business and financial services. The platform features user-facing interfaces for service agreements, job searches, and an admin dashboard for management.

- **Service Pages:** Detailed agreement pages for services like ITR Filing, Gumasta License, and JanSamarth Loans.
- **User Portals:** Separate, secure login and dashboard experiences for Students, Workers, and Administrators.

## **2. Core Features & Design**

### **Homepage (`index.html`)**

- **Modern Redesign (`style.css`):** The homepage has been completely overhauled with a modern and professional design. It features a clean layout, a consistent color palette defined by CSS variables, responsive design for different screen sizes, and subtle animations to improve user interactivity.
- **Header:** The header has a split design. The logo area has a solid white background, while the navigation area has a two-color gradient background (from #00b4d8 to #0077b6). The navigation area has a rounded shape on the left side, creating a smooth, curved transition from the logo section.
- **Welcome Section:** The welcome section has a light blue background color (`#caf0f8`). The main heading has been updated to a more visually engaging and decorative version: "✴.·´¯`·.·★ 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓦𝓸𝓻𝓴 𝓢𝓲𝓭𝓮 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓦𝓸𝓻𝓴 𝓢𝓲𝓭𝓮 ★·.·`¯´·.✴" and its color changed to #00b4d8.
- **Welcome Message & Ticker:** The welcome message describes the site as: "Workside.shop is a versatile digital platform serving as a bridge for career and academic success. For students, it provides essential tools and project inspiration for assignments, simplifying complex research. For workers, it offers resources for professional skill-building and efficient task management. By blending practical training with digital convenience, the site empowers users to enhance their productivity, refine their technical skills, and achieve their goals in a modern workspaces."
- **Scrolling Ticker:** The ticker at the top of the page has a background color of `#caf0f8`. The text within it now scrolls horizontally across the screen in a continuous loop, providing a dynamic visual element. The text is: "It is an affordable, Indian-based resource hub (as indicated by the "Rs" currency) for individuals looking to boost their IT skills or find ready-made inspiration for academic and professional projects."
- **Animated Welcome Image:** The main image in the welcome section (`man.png`) has rounded corners, a subtle shadow, and a floating animation, giving it a polished and modern look.
- **Vibrant Animated Gradient Buttons:** The "Choose Your Plan," "Registration," "BOOK NOW," and "Apply" buttons have been enhanced with a more dynamic and eye-catching design. They now feature a three-color gradient (`#00b4d8`, `#0077b6`, `#ade8f4`), a continuous "glow" animation, and a more pronounced shadow and scaling effect on hover, making them more interactive and visually appealing.
- **Courses Heading:** The heading for the courses section has been updated to "𝒪𝓊𝓇 𝓋𝒶𝓁𝓊𝒶𝒷𝓁𝑒 𝒞𝑒𝓇𝓉𝒾𝒻𝒾𝒸𝒶𝓉𝒾𝑜𝓃 𝒸𝑜𝓊𝓇𝓈𝑒𝓈" and its color changed to `#00b4d8`.
- **Digital Marketing Course Description:** A detailed description has been added to the "Digital Marketing" course, including information on Social Media Marketing, SEO, Content Creation, and E-commerce Basics.
- **Course Name Change & Description:** The "Computer Operator" course has been renamed to "Basic Computer Course (BCC)" and a detailed description has been added, including price, duration, fundamentals, operating systems, MS Office, and internet skills.
- **Ethical Hacking Course Description:** A detailed description has been added to the "Ethical Hacking" course, including price, duration, information on Web App Hacking, System Hacking, and AI in Hacking.
- **Course Description Font Size:** The font size for all course descriptions has been set to 11px for a more compact and readable appearance.
- **GoalBest Certification Table:** A new section has been added to the homepage to display the "GoalBest Certification" courses in a styled table. The table has a header with a gradient background and alternating row colors for readability.
- **Section Order:** The "Our Plans" section has been moved to appear after the "Our Services" section.
- **Footer:** The footer has a clean, modern design with a white background. It is split into two sections: the "Term & Condition" link is aligned to the left, and the copyright notice is aligned to the right for a balanced and professional look.
- **Back to Top Button:** A "Back to Top" button has been added to the bottom right of the page. It appears on scroll and allows users to quickly return to the top of the page.

### **User Authentication**

- **Multi-Role Login Pages (`login.html`, `worker_login.html`, `admin_login.html`):** The application provides three distinct, styled login pages for Students, Workers, and Admins. A shared top navigation bar allows for easy switching between the different login roles.
- **Modern UI (`login.css`):** The login pages feature a modern and visually appealing design, with a header image, improved form elements, a responsive layout, and a consistent color scheme. The copyright year has been updated to 2026.
- **Removed Sign-Up Link:** The "Not a member? Sign Up" link has been removed from the student and worker login pages to streamline the user experience, as user creation is handled by the administrator.

### **Service Agreement Pages**

- **General Structure (`agreement.css`):** A consistent and professional layout for service-specific pages. The design focuses on clarity, providing detailed information, document checklists, and clear calls to action.
- **ITR Filing (`itr-filing.html`):** A detailed guide on the documents required for filing Income Tax Returns. It includes an agreement checkbox for the non-refundable fee and a payment button.
- **Gumasta License (`gumasta-license.html`):** Comprehensive information on obtaining a Gumasta License in Maharashtra, including document checklists for different business types and the legal importance of the license.
- **JanSamarth Loan Assistance (`jansamarth.html`):** A guide to applying for government-backed loans via the JanSamarth portal, outlining personal, business, and loan-specific document requirements.
- **Udyam Registration (`udyam-registration.html`):** A styled table has been added to the Udyam Registration page to clearly display the classification criteria for Micro, Small, and Medium enterprises based on investment and turnover.

### **Application Forms**

- **Digital Marketing Course Application (`digital-marketing-application.html`):** A new, modern application form has been created for the Digital Marketing course. It includes fields for Name, D.O.B, Phone Number, Email, Address, and Highest Qualification. The form is styled with `digital-marketing-application-modern.css` and includes a "Pay & Submit" button that initiates a Razorpay payment. After a successful payment, the user is redirected to a `thank-you.html` page.
    - **Gender Selection:** A "Gender" selection field has been added to the form.
    - **Desktop View:** The form's CSS has been updated to be wider on desktop screens for an improved user experience.
    - **Modern UI & Date Picker:** The form has been updated with a more modern aesthetic using `digital-marketing-application-modern.css`. The "Date of Birth" field now uses the Flatpickr library to provide a stylish and user-friendly calendar-style date picker.

- **Basic Computer Course (BCC) Application (`bcc-application.html`):** A comprehensive application form for the BCC diploma. It features a modern design consistent with the Digital Marketing form, including a calendar-style date picker. The form collects detailed student information: Name, D.O.B, Gender, Father's Name, Address, Enrollment Type (Regular/Unregular), Highest Qualification, School Name, and Prior Computer Knowledge. It is styled with `bcc-application.css` and uses `bcc-application.js` to handle the Razorpay payment.

- **Ethical Hacking Course Application (`ethical-hacking-application.html`):** A new application form for the Ethical Hacking course with a distinct, tech-inspired dark theme. It collects the applicant's Name, D.O.B, Mobile Number, Email, Gender, Father's Name, Address, Enrollment Type, School/College Name, and Prior Computer Knowledge. The form is styled with `ethical-hacking-application.css` and uses `ethical-hacking-application.js` for payment processing via Razorpay.

### **User-Specific Dashboards**

- **Student Dashboard (`dashboard.html`):** The main hub for students, featuring a clean grid layout and easy navigation.
- **Worker Pro Dashboard (`worker_dashboard.html`):** A professional and modern dashboard for workers, styled with `worker_create.css`. It features a sidebar with navigation, a main content area with a welcome message, user profile, statistics cards (Tasks Finished, Total Hours, Efficiency), and a table of current projects with their status and progress.
- **Admin Dashboard (`admin_dashboard.html`):** A detailed dashboard for platform management, including real-time user counts and user management features.

## **3. Technical Implementation**

- **Frontend:** The application is built with modern, framework-less HTML, CSS, and JavaScript.
- **Styling:**
  - **`style.css`**: Provides the modern design for the main homepage (`index.html`).
  - **`worker_create.css`**: A refined, variable-based stylesheet for the Worker Pro Dashboard.
- **Payment Gateway Integration:**
  - **Razorpay:** Utilizes Razorpay's checkout script (`checkout.js`) for handling secure online payments.
  - **`razorpay.js`:** A centralized script to handle payment initiation for different services. It dynamically retrieves the plan name and amount from the button's `data-` attributes and redirects the user to a specific URL (e.g., a Google Form or government portal) upon successful payment.
  - **`agreement.js`:** A script that enhances user interaction by enabling the "Pay & Continue" button only after the user agrees to the terms and conditions by checking a checkbox.
  - **`digital-marketing-application.js`:** Handles the form submission for the Digital Marketing course, initiates the Razorpay payment, and redirects to a thank you page.
  - **`bcc-application.js`:** Handles the form submission for the Basic Computer Course, initiates the Razorpay payment, and redirects to a thank you page.
  - **`ethical-hacking-application.js`:** Handles the form submission for the Ethical Hacking course, initiates the Razorpay payment, and redirects to a thank you page.
- **User Management & Authentication:**
  - **`admin_dashboard.js`:** Handles the functionality of creating new workers and students, saving the data to `localStorage`.
  - **`delete_worker.js` / `delete_student.js`:** Manages the deletion of users and updates `localStorage` to prevent deleted users from logging in.
  - **`login.js`:** Authenticates users by checking credentials stored in `localStorage`. The script is context-aware and determines the user type (student, worker, or admin) based on the current page URL, applying the correct validation logic.
- **External Libraries:** Font Awesome is used for iconography. Flatpickr is used for the modern date picker.

## **4. Current Sprint: Key Changes**

-   **UI/UX Overhaul:**
    -   **Homepage Redesign:** The homepage (`index.html`) received a complete CSS overhaul with a new, modern `style.css` for a professional and responsive user experience.
    -   **Worker Dashboard Update:** The Worker Pro Dashboard (`worker_dashboard.html`) was updated to use the new `worker_create.css` stylesheet, providing a more polished and consistent design. 
    -   **Login Experience Restructure:** The login system was split into three distinct pages for Students, Workers, and Admins, with a modern UI and improved navigation.

-   **New Features:**
    -   **Service Agreement & Payment Pages:** Created dedicated pages for ITR Filing, Gumasta License, and JanSamarth Loan Assistance, with detailed information and document checklists.
    -   **Razorpay Integration:** Implemented Razorpay for secure online payments across all services, with a dynamic payment handling system.
    -   **Digital Marketing Application Form:** Created a dedicated application form for the Digital Marketing course with payment integration and a modern UI.
    -   **Basic Computer Course Application Form:** Created a new, comprehensive application form for the BCC course, complete with a modern design and payment integration.
    -   **Ethical Hacking Application Form:** Created a new, comprehensive application form for the Ethical Hacking course, complete with a tech-inspired dark theme and payment integration.

-   **Backend & Logic:**
    -   **Dynamic User Management:** The admin dashboard now supports creating and deleting worker and student accounts, with data persisted in `localStorage`.
    -   **Context-Aware Login:** The `login.js` script was refactored to handle authentication for different user roles based on the page context.