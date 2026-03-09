document.addEventListener('DOMContentLoaded', () => {
    const agreeCheckbox = document.getElementById('agree-checkbox');
    const payBtn = document.getElementById('pay-btn');

    agreeCheckbox.addEventListener('change', () => {
        payBtn.disabled = !agreeCheckbox.checked;
    });
});