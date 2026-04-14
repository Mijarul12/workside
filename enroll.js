document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.application-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Create and display the popup
        const popup = document.createElement('div');
        popup.classList.add('popup', 'visible');
        popup.textContent = 'Successfully submitted';
        document.body.appendChild(popup);

        // Remove the popup after 3 seconds
        setTimeout(() => {
            popup.remove();
        }, 3000);

        // Reset the form
        form.reset();
    });
});
