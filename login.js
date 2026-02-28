// --- Login Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way

            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const deletedEmails = JSON.parse(localStorage.getItem('deletedEmails')) || [];
            const deletedStudentEmails = JSON.parse(localStorage.getItem('deletedStudentEmails')) || [];

            if (emailInput && passwordInput) {
                const email = emailInput.value.toLowerCase();
                const password = passwordInput.value;

                if (deletedEmails.includes(email) || deletedStudentEmails.includes(email)) {
                    alert('This user has been deleted and cannot log in.');
                    return;
                }

                // Check for admin credentials
                if (email === 'admin@gmail.com' && password === 'Admin123') {
                    window.location.href = 'admin_dashboard.html';
                    return;
                }

                // Check for dynamically created students
                const students = JSON.parse(localStorage.getItem('students')) || [];
                const student = students.find(s => s.email.toLowerCase() === email && s.password === password);

                if (student) {
                    window.location.href = 'dashboard.html';
                    return;
                }

                // Check for dynamically created workers
                const workers = JSON.parse(localStorage.getItem('workers')) || [];
                const worker = workers.find(w => w.email.toLowerCase() === email && w.password === password);

                if (worker) {
                    window.location.href = 'worker_dashboard.html';
                    return;
                }

                // Fallback for hardcoded student/worker (optional, can be removed)
                if (email === 'student@gmail.com' && password === 'Student123') {
                    window.location.href = 'dashboard.html';
                    return;
                } 

                alert('Invalid email or password. Please try again.');
            }
        });
    }

    // --- Password Toggle ---
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function (e) {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});
