document.addEventListener('DOMContentLoaded', () => {
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const plan = e.target.dataset.plan;
            const amount = e.target.dataset.amount;

            const options = {
                key: 'rzp_live_SLSXfQRNG3Pdfb', // Your live Razorpay key
                amount: amount,
                currency: 'INR',
                name: 'Work Side',
                description: `Subscription for ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`,
                image: 'logo.png', // Optional
                handler: function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    // You should now verify the payment on your server using the secret key.
                },
                prefill: {
                    name: 'Test User', // Optional
                    email: 'test.user@example.com', // Optional
                    contact: '9999999999' // Optional
                },
                notes: {
                    plan: plan
                },
                theme: {
                    color: '#007bff'
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
        });
    });
});
