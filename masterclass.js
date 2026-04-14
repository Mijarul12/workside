document.addEventListener('DOMContentLoaded', () => {
    const payBtn = document.getElementById('pay-btn');
    const form = document.querySelector('.application-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    payBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!nameInput.value || !emailInput.value || !phoneInput.value) {
            alert('Please fill in all fields before proceeding to payment.');
            return;
        }

        const options = {
            "key": "rzp_live_SLSXfQRNG3Pdfb",
            "amount": 14900, // Amount in paise (149 * 100)
            "currency": "INR",
            "name": "Work Side",
            "description": "Masterclass Registration Fee",
            "image": "https://i.ibb.co/C9dY8J2/logo-white.png",
            "handler": function (response){
                const popup = document.createElement('div');
                popup.classList.add('popup', 'visible');
                popup.textContent = 'Successfully submitted';
                document.body.appendChild(popup);

                setTimeout(() => {
                    popup.remove();
                }, 3000);

                form.reset();
            },
            "prefill": {
                "name": nameInput.value,
                "email": emailInput.value,
                "contact": phoneInput.value
            },
            "notes": {
                "service": "Free Masterclass"
            },
            "theme": {
                "color": "#00F2FF"
            }
        };
        const rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
            alert("Payment Failed: " + response.error.reason);
        });
        rzp1.open();
    });
});
