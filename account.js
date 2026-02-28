document.addEventListener('DOMContentLoaded', () => {
    // --- Populate User Info (Static for now) ---
    const studentName = document.getElementById('student-name');
    const studentEmail = document.getElementById('student-email');

    if (studentName) {
        studentName.textContent = 'Student'; // Placeholder name
    }
    if (studentEmail) {
        studentEmail.textContent = 'Student@gmail.com';
    }

    // --- Password Change Logic ---
    const passwordChangeForm = document.getElementById('password-change-form');

    if (passwordChangeForm) {
        passwordChangeForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Basic validation
            if (!currentPassword || !newPassword || !confirmPassword) {
                alert('Please fill in all password fields.');
                return;
            }
            
            // In a real application, you would verify the current password against the server.
            // For this demo, we'll just check if the new passwords match.

            if (newPassword !== confirmPassword) {
                alert('New password and confirm password do not match.');
                return;
            }

            if (newPassword.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }

            // If all checks pass
            alert('Password changed successfully! (This is a demo)');
            passwordChangeForm.reset();
        });
    }
});
