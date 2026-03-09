document.addEventListener('DOMContentLoaded', () => {
    const razorpayKey = 'rzp_live_SLSXfQRNG3Pdfb'; // Your live Razorpay key
    const paymentButtons = document.querySelectorAll('.book-now-btn, #pay-btn');

    paymentButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const plan = button.dataset.plan;
            const amount = button.dataset.amount;

            const options = {
                key: razorpayKey,
                amount: amount * 100, // Amount in paise
                currency: 'INR',
                name: 'Work Side',
                description: plan,
                image: 'logo.png', // Add your logo here
                handler: function (response) {
                    if (plan === 'Udyam Registration') {
                        window.location.href = 'https://udyamregistration.gov.in/UdyamRegistration.aspx';
                    } else if (plan === 'GST Registration') {
                        window.location.href = 'https://forms.gle/mpARcKaKpJjJjppx9';
                    } else if (plan === 'Trade License') {
                        window.location.href = 'https://silpasathi.wb.gov.in/';
                    } else if (plan === 'ITR Filing') {
                        window.location.href = 'https://forms.gle/2YbCiQnpp1kAP65i6';
                    } else if (plan === 'Gumasta License') {
                        window.location.href = 'https://lms.mahaonline.gov.in/';
                    } else {
                        // On payment success, redirect to the Google Form for other plans
                        window.location.href = 'https://forms.gle/6V338xgwimbi13WE8';
                    }
                },
                prefill: {
                    name: '', // Prefill user's name
                    email: '', // Prefill user's email
                    contact: '' // Prefill user's phone number
                },
                notes: {
                    address: 'Work Side Office'
                },
                theme: {
                    color: '#0072ff'
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
        });
    });
});