document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');
    const submitBtn = document.querySelector('.login-now-btn');

    // Store credentials in localStorage for demonstration
    localStorage.setItem('worker_email', 'masumreja472@gmail.com');
    localStorage.setItem('worker_password', 'Masum!@#$!1');

    // Toggle Password Visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            if (type === 'text') {
                togglePassword.classList.remove('fa-eye-slash');
                togglePassword.classList.add('fa-eye');
            } else {
                togglePassword.classList.remove('fa-eye');
                togglePassword.classList.add('fa-eye-slash');
            }
        });
    }

    // Form Submission with Loading Animation and Authentication
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const enteredEmail = emailInput.value;
            const enteredPassword = passwordInput.value;
            
            const storedEmail = localStorage.getItem('worker_email');
            const storedPassword = localStorage.getItem('worker_password');

            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" style="margin-right: 8px;"></i> Authenticating...';
            submitBtn.style.opacity = '0.8';
            submitBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
                    alert('Login Successful! Welcome to your dashboard.');
                    window.location.href = "worker_dashboard.html";
                } else {
                    alert('Invalid email or password. Please try again.');
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.pointerEvents = 'auto';
                }
            }, 1500); 
        });
    }
});
