document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const aadhar = document.getElementById('aadhar').value;
            const referCode = document.getElementById('referCode').value;

            const options = {
                key: "rzp_live_SLSXfQRNG3Pdfb", // Your Live Key ID
                amount: 19900, // Amount in paise (199 * 100)
                currency: "INR",
                name: "Registration Fee",
                description: "One-time registration fee",
                handler: function (response) {
                    console.log('--- Registration Data ---');
                    console.log('Full Name:', fullName);
                    console.log('Mobile Number:', phone);
                    console.log('Email Address:', email);
                    console.log('Aadhar Number:', aadhar);
                    console.log('Referral Code:', referCode);
                    console.log('Payment ID:', response.razorpay_payment_id);

                    alert('Registration and payment successful! Check the console for the form data.');
                    registrationForm.reset();
                },
                prefill: {
                    name: fullName,
                    email: email,
                    contact: phone
                },
                theme: {
                    color: "#007bff"
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
            
            rzp.on('payment.failed', function (response){
                    alert("Payment failed. Please try again.");
                    console.error('Payment failed:', response.error);
            });
        });
    }
});
