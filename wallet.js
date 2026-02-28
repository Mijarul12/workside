document.addEventListener('DOMContentLoaded', () => {
    const addMoneyForm = document.getElementById('add-money-form');
    const walletAmount = document.getElementById('wallet-amount');
    const transactionList = document.getElementById('transaction-list');
    const amountToAddInput = document.getElementById('amount-to-add');

    const formatToINR = (number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(number);
    };

    // --- Razorpay Payment Logic ---
    if (addMoneyForm) {
        addMoneyForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const amountToAdd = parseFloat(amountToAddInput.value);

            if (isNaN(amountToAdd) || amountToAdd <= 0) {
                alert('Please enter a valid amount.');
                return;
            }

            const options = {
                key: 'rzp_test_VsPhfMdFll6sN3', // Replace with your actual Test Key ID
                amount: amountToAdd * 100, // Amount in paise (e.g., 10000 for ₹100)
                currency: 'INR',
                name: 'Work Side Wallet',
                description: 'Add Money to Your Wallet',
                image: 'https://img.icons8.com/color/96/000000/wallet.png', // A logo for the checkout form
                handler: function (response) {
                    // --- Update Wallet Balance on Successful Payment ---
                    const currentBalanceText = walletAmount.textContent.replace(/[₹,]/g, '');
                    const currentBalance = parseFloat(currentBalanceText);
                    const newBalance = currentBalance + amountToAdd;
                    walletAmount.textContent = formatToINR(newBalance);

                    // --- Add to Transaction History ---
                    const listItem = document.createElement('li');
                    const descSpan = document.createElement('span');
                    descSpan.className = 'transaction-desc';
                    descSpan.textContent = `Added via Razorpay`;
                    const amountSpan = document.createElement('span');
                    amountSpan.className = 'transaction-amount positive';
                    amountSpan.textContent = `+${formatToINR(amountToAdd)}`;
                    listItem.appendChild(descSpan);
                    listItem.appendChild(amountSpan);
                    transactionList.prepend(listItem);

                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    addMoneyForm.reset();
                },
                prefill: {
                    name: 'Student', // Prefill user details
                    email: 'student@example.com',
                },
                theme: {
                    color: '#0072ff' // Theme color
                },
                modal: {
                    ondismiss: function(){
                        alert('Payment was cancelled.')
                    }
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
        });
    }
});
