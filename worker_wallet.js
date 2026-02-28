document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTS ---
    const pendingAmountEl = document.getElementById('pending-amount');
    const withdrawableAmountEl = document.getElementById('withdrawable-amount');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const transactionListEl = document.getElementById('transaction-list');

    // --- STATE ---
    const WITHDRAWAL_THRESHOLD = 1499;

    // --- FUNCTIONS ---

    const getAmountFromElement = (element) => {
        if (!element) return 0;
        const text = element.textContent.replace(/[^\d.]/g, '');
        return parseFloat(text);
    };

    const checkBalance = () => {
        const currentWithdrawableAmount = getAmountFromElement(withdrawableAmountEl);
        if (currentWithdrawableAmount >= WITHDRAWAL_THRESHOLD) {
            withdrawBtn.disabled = false;
            withdrawBtn.textContent = 'Request Withdrawal';
        } else {
            withdrawBtn.disabled = true;
            withdrawBtn.textContent = `Reach ₹${WITHDRAWAL_THRESHOLD} to Withdraw`;
        }
    };
    
    const updatePendingBalance = () => {
        const pendingBalance = localStorage.getItem('pendingBalance') ? parseFloat(localStorage.getItem('pendingBalance')) : 0;
        if (pendingAmountEl) {
            pendingAmountEl.textContent = `₹${pendingBalance.toFixed(2)}`;
        }
    };

    // --- EVENT LISTENERS ---
    if (withdrawBtn) {
        withdrawBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            if (!withdrawBtn.disabled) {
                window.location.href = 'https://forms.gle/XNXK56vjrwA7HYFN8';
            }
        });
    }

    // --- INITIALIZATION ---
    updatePendingBalance();
    checkBalance();

});