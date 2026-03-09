document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flatpickr for the date of birth field
    flatpickr("#dob", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        maxDate: "today"
    });

    document.getElementById('hacking-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Ethical Hacking plan details
        const plan = "Ethical Hacking";
        const amount = 9998;

        const options = {
            key: "rzp_live_SLSXfQRNG3Pdfb", // Using live key
            amount: amount * 100, // Amount in paise
            currency: "INR",
            name: "Work Side",
            description: `Payment for ${plan}`,
            image: "logo.png",
            handler: function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                // Redirect to a thank you page
                window.location.href = 'thank-you.html';
            },
            prefill: {
                name: name,
                email: email,
                contact: phone
            },
            theme: {
                color: "#0f0"
            },
            notes: {
                plan: plan
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    });
});
