## **Project Overview**

This project is a modern web application for **Work Side**, a platform that provides IT training and career services to students and professionals in India. The application features a public-facing website with information about courses and services, as well as a private worker portal for freelancers and employees to manage their tasks and earnings.

## **Design and Features**

### **Visual Design**

*   **Aesthetics:** The application uses a modern and visually appealing design with a dark theme, gradient text effects, and smooth animations.
*   **Layout:** The layout is clean, spacious, and responsive, ensuring a seamless user experience across all devices.
*   **Typography:** The application uses the "Plus Jakarta Sans" font, which is a modern and readable sans-serif font.

### **Features**

*   **Public Website:**
    *   **Homepage:** A landing page with a hero section, a stats bar, a list of flagship programs, and a section for expert services.
    *   **Services Pages:** Individual pages for each service, with detailed information and an application form.
    *   **Contact Page:** A contact form for users to get in touch with the Work Side team.
    *   **Worker Portal:** A login page for workers to access their private dashboard.
*   **Worker Dashboard:**
    *   **At-a-Glance Information:** The dashboard displays the worker's total earnings, tasks completed, and pending work, as well as their current wallet balance.
    *   **Task Management:** A table of recent transactions provides a summary of the worker's completed and pending tasks.
    *   **Navigation:** A sidebar with links to different sections of the worker portal, including a product dropdown, an upload section, a meeting section, a team lead section, a refer code section, and an account section.
    *   **Notifications:** A notification pop-up that displays important system notices, such as working hours, server maintenance schedules, and wallet processing times.
    *   **Wallet Modal:** A modal that allows workers to view their wallet balance and initiate transactions, such as adding or withdrawing money. It also displays the pending amount.
    *   **Session Timer:** A 4-hour countdown timer that automatically logs the user out and redirects them to the login page when the session expires.
    *   **Mock Answer Section:** A dedicated section that displays a list of over 200 questions with options to download a PDF and accept or reject each question. When a question is accepted or rejected, the row is marked as "Processed" and disabled.
    *   **Hand Writing Product Section:** A new section that displays the same questions as the Mock Answer section but includes a "Rate" column with randomly generated amounts between ₹350 and ₹1390. When a worker accepts a project, the rate is added to their pending balance.
    *   **Upload Form:** A form where workers can upload all their completed assignments at once. It displays a list of accepted tasks with columns for SL and Amount, along with a file input for each task. The form validates that all files are selected and within the 20MB size limit before submission.
    *   **"Go" Button:** A "Go" button has been added to the "Upload" section. When clicked, it opens a Google Form in a new tab, allowing workers to easily access the form to submit their work.
    *   **Referral Program:** A new "Refer Code" section has been added to the dashboard. It displays a unique, automatically generated referral code (e.g., NMHS4565AEA) that workers can share with their friends. For every successful registration using their code, the worker receives a ₹149 bonus. The section includes buttons to copy the code to the clipboard and to share it via the Web Share API.
    *   **Razorpay Integration:** The "Add Money" feature in the wallet is now powered by Razorpay. When a worker clicks the "Add Money" button, a Razorpay checkout opens, allowing them to add ₹100 to their account. Upon successful payment, the worker's wallet balance is automatically updated. The Razorpay integration is now using the live API key `rzp_live_SLSXfQRNG3Pdfb`.
    *   **Withdraw Money:** When a worker clicks the "Withdraw Money" button in their wallet, they are redirected to a Google Form to submit their withdrawal request.
    *   **Worker Login:** The worker login page now includes both Google Sign-In and a traditional email/password sign-in form. When a worker successfully signs in with either method, they are automatically redirected to the `worker_dashboard.html` page.
    *   **Pending Amount Display:** The top navigation bar now includes a "Pending Amount" badge next to the wallet icon, providing workers with an at-a-glance view of their pending earnings.
    *   **Automatic Wallet Transfer:** When the pending amount reaches or exceeds ₹500, it is automatically transferred to the main wallet.
    *   **Redesigned PDF Download:** Workers can download a redesigned PDF containing 10 unique, randomly selected coding questions. The PDF includes a professional header with the company logo, name, and address, as well as the download date and time, a QR code with the PDF details, and a notice about the 2-day deadline.
    *   **Dropdown Menu and Functionality Fix:** The issues with the "Product" dropdown menu not opening, and the wallet and timer not functioning have been resolved. The code has been updated to remove ES module syntax, and ensure all JavaScript is executed correctly.

## **Current Plan**

This is the initial version of the application. The current plan is to continue to develop and improve the application based on user feedback and new feature requests. The next step is to add functionality to the worker dashboard to allow workers to manage their tasks and earnings in more detail.