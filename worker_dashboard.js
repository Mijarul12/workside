// Dropdown Toggle Logic
const productDropdownButton = document.getElementById('product-dropdown-button');
const productDropdownContainer = document.getElementById('product-dropdown-container');
const dropdownIcon = document.getElementById('dropdown-icon');

productDropdownButton.addEventListener('click', () => {
    if (productDropdownContainer.style.display === 'flex') {
        productDropdownContainer.style.display = 'none';
        dropdownIcon.classList.remove('fa-chevron-up');
        dropdownIcon.classList.add('fa-chevron-down');
    } else {
        productDropdownContainer.style.display = 'flex';
        dropdownIcon.classList.remove('fa-chevron-down');
        dropdownIcon.classList.add('fa-chevron-up');
    }
});

// Notification Popup Logic
const notificationsButton = document.getElementById('notifications-button');
const notificationsPopup = document.getElementById('notifications-popup');

notificationsButton.addEventListener('click', () => {
    if (notificationsPopup.style.display === 'block') {
        notificationsPopup.style.display = 'none';
    } else {
        notificationsPopup.style.display = 'block';
    }
});

// Wallet Modal Logic
const walletButton = document.getElementById('wallet-button');
const walletModal = document.getElementById('walletModal');
const closeWalletButton = document.getElementById('close-wallet-button');

walletButton.addEventListener('click', () => {
    walletModal.style.display = 'flex';
});

closeWalletButton.addEventListener('click', () => {
    walletModal.style.display = 'none';
});

// Session Timer Logic
function startSessionTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;

    const interval = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Your session has expired. You will be logged out.");
            window.location.href = "index.html"; // Redirect to login page
        }
    }, 1000);
}

// View Switching Logic
const homeLink = document.getElementById('home-link');
const mockAnswerLink = document.getElementById('mock-answer-link');
const handWritingLink = document.getElementById('hand-writing-link');
const uploadLink = document.getElementById('upload-link');
const referCodeLink = document.getElementById('refer-code-link');
const dashboardHome = document.getElementById('dashboard-home');
const mockAnswerSection = document.getElementById('mock-answer-section');
const handWritingSection = document.getElementById('hand-writing-section');
const uploadSection = document.getElementById('upload-section');
const referCodeSection = document.getElementById('refer-code-section');

homeLink.addEventListener('click', () => {
    showSection(dashboardHome);
    setActiveLink(homeLink);
});

mockAnswerLink.addEventListener('click', () => {
    showSection(mockAnswerSection);
    setActiveLink(mockAnswerLink);
});

handWritingLink.addEventListener('click', () => {
    showSection(handWritingSection);
    setActiveLink(handWritingLink);
});

uploadLink.addEventListener('click', () => {
    showSection(uploadSection);
    setActiveLink(uploadLink);
    populateUploadTable();
});

referCodeLink.addEventListener('click', () => {
    showSection(referCodeSection);
    setActiveLink(referCodeLink);
});

function showSection(section) {
    [dashboardHome, mockAnswerSection, handWritingSection, uploadSection, referCodeSection].forEach(s => s.style.display = 'none');
    section.style.display = 'block';
}

function setActiveLink(link) {
    [homeLink, mockAnswerLink, handWritingLink, uploadLink, referCodeLink].forEach(l => l.classList.remove('active'));
    link.classList.add('active');
}

// Wallet Balance and Auto-Transfer Logic
let walletBalance = 420;
let pendingBalance = 0;
const transferThreshold = 500;
const questionValue = 60;
let acceptedTasks = [];

const topWalletBalance = document.getElementById('top-wallet-balance');
const topPendingBalance = document.getElementById('top-pending-balance');
const modalWalletBalance = document.getElementById('wallet-balance');
const modalPendingBalance = document.getElementById('pending-balance');

function updateBalances() {
    topWalletBalance.textContent = `₹ ${walletBalance}`;
    topPendingBalance.textContent = `₹ ${pendingBalance}`;
    modalWalletBalance.textContent = `₹ ${walletBalance}`;
    modalPendingBalance.textContent = `₹ ${pendingBalance}`;
}

function checkAndTransfer() {
    if (pendingBalance >= transferThreshold) {
        walletBalance += pendingBalance;
        pendingBalance = 0;
        updateBalances();
        alert('Pending balance has been transferred to your main wallet!');
    }
}

// Event Delegation for dynamically added buttons
document.addEventListener('click', function(event) {
    // Mock Answer Accept Button
    if (event.target.matches('#mock-answer-section .btn-accept')) {
        const row = event.target.closest('tr');
        if (row.classList.contains('processed')) return;

        row.classList.add('processed');
        row.querySelectorAll('button').forEach(btn => btn.disabled = true);
        row.querySelector('.action-buttons').innerHTML = `<strong>Processed</strong>`;

        pendingBalance += questionValue;
        updateBalances();
        checkAndTransfer();

        const questionId = row.cells[0].textContent;
        acceptedTasks.push({ sl: acceptedTasks.length + 1, amount: questionValue, id: questionId });
    }

    // Mock Answer Reject Button
    if (event.target.matches('#mock-answer-section .btn-reject')) {
        const row = event.target.closest('tr');
        if (row.classList.contains('processed')) return;

        row.classList.add('processed');
        row.querySelectorAll('button').forEach(btn => btn.disabled = true);
        row.querySelector('.action-buttons').innerHTML = `<strong>Processed</strong>`;
    }

    // Hand Writing Accept Button
    if (event.target.matches('#hand-writing-section .btn-accept')) {
        const row = event.target.closest('tr');
        if (row.classList.contains('processed')) return;

        row.classList.add('processed');
        row.querySelectorAll('button').forEach(btn => btn.disabled = true);
        row.querySelector('.action-buttons').innerHTML = `<strong>Processed</strong>`;

        const rate = parseInt(row.querySelector('.rate').textContent.replace('₹ ', ''));
        pendingBalance += rate;
        updateBalances();
        checkAndTransfer();

        const questionId = row.cells[0].textContent;
        acceptedTasks.push({ sl: acceptedTasks.length + 1, amount: rate, id: questionId });
    }

    // Hand Writing Reject Button
    if (event.target.matches('#hand-writing-section .btn-reject')) {
        const row = event.target.closest('tr');
        if (row.classList.contains('processed')) return;

        row.classList.add('processed');
        row.querySelectorAll('button').forEach(btn => btn.disabled = true);
        row.querySelector('.action-buttons').innerHTML = `<strong>Processed</strong>`;
    }
});

// Go to Products Button Logic
const goToProductsBtn = document.getElementById('go-to-products-btn');
goToProductsBtn.addEventListener('click', () => {
    window.open('https://forms.gle/mTr5DtqBv4y9G28w6', '_blank');
});


// PDF Download Logic
document.querySelectorAll('.btn-download').forEach(button => {
    button.addEventListener('click', () => {
        const allQuestions = Array.from(document.querySelectorAll('#mock-answer-section tbody tr'));
        const selectedQuestions = [];
        const numQuestionsToSelect = 10;

        // Select 10 unique random questions
        while (selectedQuestions.length < numQuestionsToSelect && allQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * allQuestions.length);
            const randomRow = allQuestions.splice(randomIndex, 1)[0];
            selectedQuestions.push({
                id: randomRow.cells[0].textContent,
                text: randomRow.cells[1].textContent
            });
        }

        window.downloadPDF(selectedQuestions);
    });
});

// Function to generate a random rate between 350 and 1390
function generateRandomRate() {
    return Math.floor(Math.random() * (1390 - 350 + 1)) + 350;
}

// Populate Hand Writing Section
const handWritingTbody = document.querySelector('#hand-writing-section tbody');
const mockQuestions = Array.from(document.querySelectorAll('#mock-answer-section tbody tr'));

mockQuestions.forEach(question => {
    const newRow = handWritingTbody.insertRow();
    const questionId = question.cells[0].textContent;
    const questionText = question.cells[1].textContent;

    newRow.innerHTML = `
        <td>${questionId}</td>
        <td>${questionText}</td>
        <td class="rate">₹ ${generateRandomRate()}</td>
        <td class="action-buttons">
            <button class="btn btn-accept"><i class="fas fa-check"></i> Accept</button>
            <button class="btn btn-reject"><i class="fas fa-times"></i> Reject</button>
        </td>
    `;
});

// Populate Upload Table
const uploadTableBody = document.getElementById('upload-table-body');
const submitAllButton = document.querySelector('.btn-submit-all');
function populateUploadTable() {
    uploadTableBody.innerHTML = ''; // Clear the table first

    if (acceptedTasks.length === 0) {
        uploadTableBody.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px;">No accepted tasks to upload.</td></tr>';
        submitAllButton.style.display = 'none';
        return;
    }

    acceptedTasks.forEach(task => {
        const newRow = uploadTableBody.insertRow();
        newRow.dataset.taskId = task.id;
        newRow.innerHTML = `
            <td>${task.sl}</td>
            <td>₹ ${task.amount}</td>
            <td><input type="file" accept=".pdf,.jpg,.jpeg" style="width: 100%;" data-task-id="${task.id}"></td>
        `;
    });

    submitAllButton.style.display = 'block';
}

// Upload Form Submission
const uploadForm = document.getElementById('upload-form');
uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fileInputs = uploadForm.querySelectorAll('input[type="file"]');
    let allFilesValid = true;
    let filesToUpload = [];

    fileInputs.forEach(input => {
        const file = input.files[0];
        const taskId = input.dataset.taskId;

        if (!file) {
            alert(`Please select a file for task ${taskId}.`);
            allFilesValid = false;
            return;
        }

        if (file.size > 20 * 1024 * 1024) {
            alert(`File for task ${taskId} exceeds the 20MB limit.`);
            allFilesValid = false;
            return;
        }

        filesToUpload.push({ taskId, file });
    });

    if (allFilesValid) {
        // Here, you would typically upload the files to a server.
        // For this demo, we'll just simulate a successful upload.
        alert('All files submitted successfully!');
        
        // Clear the accepted tasks and re-populate the table
        acceptedTasks = [];
        populateUploadTable();
    }
});

// Refer Code Logic
const referralCodeSpan = document.getElementById('referral-code');
const copyReferralCodeBtn = document.getElementById('copy-referral-code');
const shareReferralBtn = document.getElementById('share-referral-btn');

function generateReferralCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'NMHS';
    for (let i = 0; i < 7; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

const referralCode = generateReferralCode();
referralCodeSpan.textContent = referralCode;

copyReferralCodeBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(referralCode).then(() => {
        alert('Referral code copied to clipboard!');
    });
});

shareReferralBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Join me on Work Side!',
            text: `Use my referral code ${referralCode} to sign up and get a bonus!`,
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Web Share API not supported in your browser. You can manually copy the code.');
    }
});

// Razorpay Integration
const addMoneyBtn = document.getElementById('add-money-btn');
addMoneyBtn.addEventListener('click', () => {
    const options = {
        "key": "rzp_live_SLSXfQRNG3Pdfb", // Enter the Key ID generated from the Dashboard
        "amount": "10000", // Amount is in currency subunits. Default currency is INR. Hence, 10000 refers to 10000 paise = ₹100.
        "currency": "INR",
        "name": "Work Side",
        "description": "Add Money to Wallet",
        "image": "https://www.workside.in/assets/img/logo.png",
        "handler": function (response){
            alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
            walletBalance += 100;
            updateBalances();
        },
        "prefill": {
            "name": "Test User",
            "email": "test.user@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
});

// Withdraw Money Button Logic
const withdrawMoneyBtn = document.getElementById('withdraw-money-btn');
withdrawMoneyBtn.addEventListener('click', () => {
    window.open('https://forms.gle/DyTHcMqT9KiMAaUs5', '_blank');
});

// Logout Button Logic
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

window.onload = function () {
    // Start session timer
    const fourHours = 4 * 60 * 60;
    const display = document.querySelector('#time-left');
    startSessionTimer(fourHours, display);

    // Initialize balance displays
    updateBalances();
};


// Close modals and popups if the user clicks outside
window.addEventListener('click', function(event) {
    const walletModal = document.getElementById('walletModal');

    if (event.target === walletModal) {
        walletModal.style.display = 'none';
    }
});
