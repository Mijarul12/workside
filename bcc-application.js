document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flatpickr for the date of birth field
    flatpickr("#dob", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        maxDate: "today"
    });

    document.getElementById('bcc-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = "user@example.com"; // Placeholder, as email is not in the form
        const phone = "9999999999"; // Placeholder, as phone is not in the form

        // BCC plan details
        const plan = "Basic Computer Course (BCC)";
        const amount = 2999;

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
                color: "#004d40"
            },
            notes: {
                plan: plan
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
    });
});
