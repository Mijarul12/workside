document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');

    const handleLogin = (userType) => {
        const email = emailInput.value.toLowerCase();
        const password = passwordInput.value;
        const deletedEmails = JSON.parse(localStorage.getItem('deletedEmails')) || [];
        const deletedStudentEmails = JSON.parse(localStorage.getItem('deletedStudentEmails')) || [];

        if (deletedEmails.includes(email) || deletedStudentEmails.includes(email)) {
            alert('This user has been deleted and cannot log in.');
            return;
        }

        switch (userType) {
            case 'student':
                const students = JSON.parse(localStorage.getItem('students')) || [];
                const student = students.find(s => s.email.toLowerCase() === email && s.password === password);
                if (student) {
                    window.location.href = 'dashboard.html';
                } else {
                    alert('Invalid student email or password.');
                }
                break;

            case 'worker':
                const workers = JSON.parse(localStorage.getItem('workers')) || [];
                const worker = workers.find(w => w.email.toLowerCase() === email && w.password === password);
                if (worker) {
                    window.location.href = 'worker_dashboard.html';
                } else {
                    alert('Invalid worker email or password.');
                }
                break;

            case 'admin':
                if (email === 'admin@gmail.com' && password === 'Admin123') {
                    window.location.href = 'admin_dashboard.html';
                } else {
                    alert('Invalid admin email or password.');
                }
                break;

            default:
                alert('Invalid login type specified.');
                break;
        }
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const path = window.location.pathname;

            if (path.includes('worker_login.html')) {
                handleLogin('worker');
            } else if (path.includes('admin_login.html')) {
                handleLogin('admin');
            } else {
                handleLogin('student');
            }
        });
    }

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
            this.classList.toggle('fa-eye');
        });
    }
});
