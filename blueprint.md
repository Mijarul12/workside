# **Work Side Application Blueprint**

## **1. Overview**

Work Side is a web application designed to connect workers with job opportunities and provide assistance with various business and financial services. The platform features user-facing interfaces for service agreements, job searches, and a worker dashboard for management.

- **Service Pages:** Detailed agreement pages for services like ITR Filing and Gumasta License.
- **User Portals:** A secure login and dashboard experience for Workers.

## **2. Core Features & Design**

### **Homepage (`index.html`)**

- **Modern Redesign (`style.css`):** The homepage has been completely overhauled with a modern and professional design. It features a clean layout, a consistent color palette defined by CSS variables, responsive design for different screen sizes, and subtle animations to improve user interactivity.
- **Header:** The header has a split design. The logo area has a solid white background, while the navigation area has a two-color gradient background (from #00b4d8 to #0077b6). The navigation area has a rounded shape on the left side, creating a smooth, curved transition from the logo section. The navigation bar contains links to "Home", "Services", "Contact", and "Login". The "Login" link now directs users to the `worker_login.html` page.
- **Welcome Section:** The welcome section has a light blue background color (`#caf0f8`). The main heading has been updated to a more visually engaging and decorative version: "✴.·´¯`·.·★ 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓦𝓸𝓻𝓴 𝓢𝓲𝓭𝓮 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓦𝓸𝓻𝓴 𝓢𝓲𝓭𝓮 ★·.·`¯´·.✴" and its color changed to #00b4d8.
- **Welcome Message & Ticker:** The welcome message describes the site as: "Workside.shop is a versatile digital platform serving as a bridge for career and academic success. For students, it provides essential tools and project inspiration for assignments, simplifying complex research. For workers, it offers resources for professional skill-building and efficient task management. By blending practical training with digital convenience, the site empowers users to enhance their productivity, refine their technical skills, and achieve their goals in a modern workspaces."
- **Scrolling Ticker:** The ticker at the top of the page has a background color of `#caf0f8`. The text within it now scrolls horizontally across the screen in a continuous loop, providing a dynamic visual element. The text is: "It is an affordable, Indian-based resource hub (as indicated by the "Rs" currency) for individuals looking to boost their IT skills or find ready-made inspiration for academic and professional projects."
- **Animated Welcome Image:** The main image in the welcome section (`man.png`) has rounded corners, a subtle shadow, and a floating animation, giving it a polished and modern look.
- **Vibrant Animated Gradient Buttons:** The "Registration," "BOOK NOW," and "Apply" buttons have been enhanced with a more dynamic and eye-catching design. They now feature a three-color gradient (`#00b4d8`, `#0077b6`, `#ade8f4`), a continuous "glow" animation, and a more pronounced shadow and scaling effect on hover, making them more interactive and visually appealing.
- **Courses Heading:** The heading for the courses section has been updated to "𝒪𝓊𝓇 𝓋𝒶𝓁𝓊𝒶𝒷𝓁𝑒 𝒞𝑒𝓇𝓉𝒾𝒻𝒾𝒸𝒶𝓉𝒾𝑜𝓃 𝒸𝑜𝓊𝓇𝓈𝑒𝓈" and its color changed to `#00b4d8`.
- **Digital Marketing Course Description:** A detailed description has been added to the "Digital Marketing" course, including information on Social Media Marketing, SEO, Content Creation, and E-commerce Basics.
- **Course Name Change & Description:** The "Computer Operator" course has been renamed to "Basic Computer Course (BCC)" and a detailed description has been added, including price, duration, fundamentals, operating systems, MS Office, and internet skills.
- **Ethical Hacking Course Description:** A detailed description has been added to the "Ethical Hacking" course, including price, duration, information on Web App Hacking, System Hacking, and AI in Hacking.
- **Course Description Font Size:** The font size for all course descriptions has been set to 11px for a more compact and readable appearance.
- **Ticket Booking Redirect:** The "Ticket Booking" service button now redirects to the external site `https://rahabar-in.netlify.app/`.
- **GoalBest Certification Table:** A new section has been added to the homepage to display the "GoalBest Certification" courses in a styled table. The table has a header with a gradient background and alternating row colors for readability.
- **Footer:** The footer has a clean, modern design with a white background. It is split into two sections: the "Term & Condition" link is aligned to the left, and the copyright notice is aligned to the right for a balanced and professional look.
- **Back to Top Button:** A "Back to Top" button has been added to the bottom right of the page. It appears on scroll and allows users to quickly return to the top of the page.

### **User Authentication**

- **Worker Login Page (`worker_login.html`):** The application provides a single, styled login page for Workers, accessible via the main navigation's "Login" link. The login credentials are: **Email:** `masumreja472@gmail.com` and **Password:** `Masum!@#$!1`.
- **Modern UI (`login.css`):** The login page features a modern and visually appealing design, with a header image, improved form elements, a responsive layout, and a consistent color scheme.

### **User-Specific Dashboards**

- **Worker Dashboard (`worker_dashboard.html`):** The worker dashboard has been completely redesigned with a futuristic, glassmorphism aesthetic. It features a persistent sidebar for navigation and a main content area where different sections (My Account, Wallet, Products, etc.) are displayed in translucent, glass-like panels. This modern, multi-panel interface is styled with `dashboard.css` and its interactivity is powered by `dashboard.js`.
  - **Futuristic Design:** The entire dashboard uses a dark, animated gradient background, with UI elements styled as floating glass panels, creating a sense of depth and a high-tech feel.
  - **Sidebar Navigation:** Allows the worker to switch between different views: My Account, Wallet & Earnings, Product List, Upload Product, and Change Password.
  - **My Account:** Displays an overview of the worker's profile information in glass-like cards. The worker's name is now "Masum Reja" and their email is "masumreja472@gmail.com".
  - **Wallet & Earnings:** Shows the available balance, total earnings, and pending clearance in a series of glass-effect cards. The wallet functionality is now fully implemented:
    - **Pending Clearance:** When a worker accepts a product, the product's price is added to the "Pending Clearance" balance.
    - **Automatic Transfer:** When the "Pending Clearance" balance reaches Rs. 1000 or more, the entire pending amount is automatically transferred to the "Available Balance."
    - **Withdrawal:** Workers can withdraw their "Available Balance" by clicking the "Withdraw Funds" button.
  - **Product List:** A table displaying the worker's uploaded products with their status. The action column now contains "Accept" and "Reject" buttons. When a product is accepted, the status changes to "Live", and a "Download PDF" button appears. If a product is rejected, it is removed from the list.
  - **Enhanced PDF Generation:** When the "Download PDF" button is clicked, a PDF is generated using `jsPDF`. The PDF now has a more professional layout with improved margins and styling. It contains the product's details, a "Multiple Works" section with a list of potential tasks, and a "Questions" section with questions about the product. The PDF is then downloaded with a filename corresponding to the product name.
  - **Upload Product:** A form for adding new products, including a drag-and-drop file upload zone, styled to match the glassmorphism theme.
  - **Change Password:** A secure form for updating the worker's password.

### **Service Agreement Pages**

- **General Structure (`agreement.css`):** A consistent and professional layout for service-specific pages. The design focuses on clarity, providing detailed information, document checklists, and clear calls to action.
- **ITR Filing (`itr-filing.html`):** A detailed guide on the documents required for filing Income Tax Returns. It includes an agreement checkbox for the non-refundable fee and a payment button.
- **Gumasta License (`gumasta-license.html`):** Comprehensive information on obtaining a Gumasta License in Maharashtra, including document checklists for different business types and the legal importance of the license.
- **Udyam Registration (`udyam-registration.html`):** A styled table has been added to the Udyam Registration page to clearly display the classification criteria for Micro, Small, and Medium enterprises based on investment and turnover.
- **Ticket Booking (`ticket-booking.html`):** This page has been effectively replaced by a direct link on the homepage to an external site.
- **Train Ticket Booking (`train-ticket-booking.html`):** A detailed page that replicates a real-world train booking experience. 
    - The header section has been simplified by removing the "Bookings," "Help," and "Account" links, and the promotional coupon banner has also been removed for a cleaner interface.
    - **Modern Calendar:** The date selection has been upgraded using the Flatpickr library, providing a stylish and user-friendly calendar interface. The calendar is themed to match the site's design. 
    - **Cute Date Buttons:** The "Tomorrow" and "Day After" buttons have been restyled to be smaller and more visually appealing, with a modern, subtle look and hover effect.
    - **Removed Announcements:** The "Announcements" section, which previously displayed information about linking Aadhar for Tatkal bookings, has been removed to further streamline the page.
    - **Simplified Quick Links:** The "Quick Links" section has been streamlined by removing the "Order Food" and "Link Aadhaar" options to focus on the most essential services.
    - **Redesigned Search Form:** The search form has been restructured for a cleaner and more intuitive user experience. The "From" and "To" fields are now on the same row, and the "Free Cancellation" toggle and "Search Trains" button are grouped together at the bottom, creating a more organized and visually balanced layout.

### **Application Forms**

- **Registration Form (`application.html`):** The multi-step application form has been replaced with a single-step registration form. The new form collects the user's Full Name, Mobile Number, Email Address, Aadhar Number, and an optional Refer Code. A one-time registration fee of Rs. 199 is collected upon submission via Razorpay.

- **Digital Marketing Course Application (`digital-marketing-application.html`):** A new, modern application form has been created for the Digital Marketing course. It includes fields for Name, D.O.B, Phone Number, Email, Address, and Highest Qualification. The form is styled with `digital-marketing-application-modern.css` and includes a "Pay & Submit" button that initiates a Razorpay payment. After a successful payment, the user is redirected to a `thank-you.html` page.
    - **Gender Selection:** A "Gender" selection field has been added to the form.
    - **Desktop View:** The form's CSS has been updated to be wider on desktop screens for an improved user experience.
    - **Modern UI & Date Picker:** The form has been updated with a more modern aesthetic using `digital-marketing-application-modern.css`. The "Date of Birth" field now uses the Flatpickr library to provide a stylish and user-friendly calendar-style date picker.

- **Basic Computer Course (BCC) Application (`bcc-application.html`):** A comprehensive application form for the BCC diploma. It features a modern design consistent with the Digital Marketing form, including a calendar-style date picker. The form collects detailed student information: Name, D.O.B, Gender, Father's Name, Address, Enrollment Type (Regular/Unregular), Highest Qualification, School Name, and Prior Computer Knowledge. It is styled with `bcc-application.css` and uses `bcc-application.js` to handle the Razoray payment.

- **Ethical Hacking Course Application (`ethical-hacking-application.html`):** A new application form for the Ethical Hacking course with a distinct, tech-inspired dark theme. It collects the applicant's Name, D.O.B, Mobile Number, Email, Gender, Father's Name, Address, Enrollment Type, School/College Name, and Prior Computer Knowledge. The form is styled with `ethical-hacking-application.css` and uses `ethical-hacking-application.js` for payment processing via Razorpay.

## **3. Technical Implementation**

- **Frontend:** The application is built with modern, framework-less HTML, CSS, and JavaScript.
- **Styling:**
  - **`style.css`**: Provides the modern design for the main homepage (`index.html`).
  - **`dashboard.css`**: Provides the futuristic, glassmorphism design for the new multi-panel worker dashboard. It now includes a `.hidden` class to control the visibility of the action buttons in the product list.
  - **`train-ticket-booking.css`**: Contains the styles for the detailed train ticket booking page, including a custom theme for the Flatpickr calendar.
- **Payment Gateway Integration:**
  - **Razorpay:** Utilizes Razorpay's checkout script (`checkout.js`) for handling secure online payments.
  - **`razorpay.js`:** A centralized script to handle payment initiation for different services. It dynamically retrieves the plan name and amount from the button's `data-` attributes and redirects the user to a specific URL (e.g., a Google Form or government portal) upon successful payment.
  - **`agreement.js`:** A script that enhances user interaction by enabling the "Pay & Continue" button only after the user agrees to the terms and conditions by checking a checkbox.
  - **`digital-marketing-application.js`:** Handles the form submission for the Digital Marketing course, initiates the Razorpay payment, and redirects to a thank you page.
  - **`bcc-application.js`:** Handles the form submission for the Basic Computer Course, initiates the Razorpay payment, and redirects to a thank you page.
  - **`ethical-hacking-application.js`:** Handles the form submission for the Ethical Hacking course, initiates the Razorpay payment, and redirects to a thank you page.
- **User Management & Authentication:**
  - **`login.js`:** Authenticates users by checking credentials stored in `localStorage` and redirects them to the worker dashboard upon successful login. The credentials are: **Email:** `masumreja472@gmail.com` and **Password:** `Masum!@#$!1`.
  - **`dashboard.js`**: Manages the tab-like navigation within the new worker dashboard, showing and hiding content panels based on user selection. It now also handles the logic for the "Accept", "Reject", and "Download PDF" buttons in the product list, including the new wallet and withdrawal functionality and the enhanced PDF generation.
  - **`application.js`:** Handles the submission of the new single-step registration form. It initiates a Razorpay payment for Rs. 199. After a successful payment, the form data and payment ID are logged to the console, and the form is reset.
- **External Libraries:** Font Awesome is used for iconography. Flatpickr is used for the modern date picker. `jsPDF` is used for client-side PDF generation.

## **4. Current Sprint: Key Changes**

-   **UI/UX Overhaul:**
    -   **Homepage Redesign:** The homepage (`index.html`) received a complete CSS overhaul with a new, modern `style.css` for a professional and responsive user experience.
    -   **Worker Dashboard Redesign:** The Worker Dashboard (`worker_dashboard.html`) has been completely redesigned with a futuristic, glassmorphism aesthetic. The new design is implemented with the new `dashboard.css` and `dashboard.js` files, and the old `worker_create.css` has been removed.
    -   **Login Experience Simplification:** The login system was simplified to a single login page for Workers (`worker_login.html`), removing the student and admin login pages. The main navigation "Login" link was updated to point to this page.
    -   **Feature Removal:** The "Buy Plan," "How to Work," "Do's or Don't," "About," "JOIN TODAY", and "JanSamarth" features have been removed to streamline the application.
    -   **Train Ticket Booking Page Update:** The Train Ticket Booking page was significantly updated. The header and quick links were simplified, the announcements section was removed, the calendar was upgraded using Flatpickr, a new button was added to book a train ticket for the next day, the date selection buttons were restyled, and the search form was redesigned for a more intuitive layout.
    -   **Ticket Booking Redirect:** The "Ticket Booking" service button now redirects to the external site `https://rahabar-in.netlify.app/`.
    -   **Simplified Registration:** The multi-step application form was replaced with a single-step registration form with simplified fields.

-   **New Features:**
    -   **Service Agreement & Payment Pages:** Created dedicated pages for ITR Filing and Gumasta License, with detailed information and document checklists.
    -   **Razorpay Integration:** Implemented Razorpay for secure online payments across all services, with a dynamic payment handling system.
    -   **Digital Marketing Application Form:** Created a dedicated application form for the Digital Marketing course with payment integration and a modern UI.
    -   **Basic Computer Course Application Form:** Created a new, comprehensive application form for the BCC course, complete with a modern design and payment integration.
    -   **Ethical Hacking Application Form:** Created a new, comprehensive application form for the Ethical Hacking course, complete with a tech-inspired dark theme and payment integration.
    -   **Product List PDF Generation:** Implemented PDF generation for accepted products in the worker dashboard. When a worker clicks the "Download PDF" button, a PDF is generated with product details, a list of potential tasks ("Multiple Works"), and a set of questions related to the product.
    -   **Wallet & Withdrawal Functionality:** Implemented a wallet system in the worker dashboard. When a product is accepted, the amount is credited to a pending balance. Once the pending balance reaches Rs. 1000, it is automatically transferred to the available balance, which can then be withdrawn.
    -   **Registration Fee:** Added a one-time, non-refundable registration fee of Rs. 199 to the main registration form, collected via Razorpay.

-   **Backend & Logic:**
    -   **Simplified Login:** The `login.js` script was simplified to handle authentication for workers only, with the credentials stored in `localStorage`.
