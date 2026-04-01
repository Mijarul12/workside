document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentPanels = document.querySelectorAll('.content-panel');
    const pageTitle = document.getElementById('current-page-title');
    const productList = document.querySelector('.glass-table tbody');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Deactivate all links and panels
            navLinks.forEach(l => l.classList.remove('active'));
            contentPanels.forEach(p => p.classList.remove('active'));

            // Activate the clicked link
            link.classList.add('active');

            // Activate the corresponding panel
            const targetId = link.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }

            // Update the page title
            pageTitle.textContent = link.textContent.trim();
        });
    });

    if (productList) {
        let pendingBalance = 0;
        let availableBalance = 0;

        const pendingBalanceValue = document.querySelector('#wallet-section .stat-card:nth-child(3) h2');
        const availableBalanceValue = document.querySelector('#wallet-section .balance-card h2');
        const withdrawBtn = document.querySelector('#wallet-section .balance-card .action-btn');

        const updateBalances = () => {
            pendingBalanceValue.textContent = `Rs. ${pendingBalance.toFixed(2)}`;
            availableBalanceValue.textContent = `Rs. ${availableBalance.toFixed(2)}`;
        };

        productList.addEventListener('click', (e) => {
            if (e.target.classList.contains('accept-btn')) {
                const row = e.target.closest('tr');
                const statusBadge = row.querySelector('.badge');
                const acceptBtn = row.querySelector('.accept-btn');
                const rejectBtn = row.querySelector('.reject-btn');
                const downloadBtn = row.querySelector('.download-btn');
                const productPrice = parseFloat(row.querySelector('td:nth-child(3)').textContent.replace('Rs. ', ''));

                statusBadge.textContent = 'Live';
                statusBadge.classList.remove('warning');
                statusBadge.classList.add('success');

                acceptBtn.classList.add('hidden');
                rejectBtn.classList.add('hidden');
                downloadBtn.classList.remove('hidden');

                pendingBalance += productPrice;
                if (pendingBalance >= 1000) {
                    availableBalance += pendingBalance;
                    pendingBalance = 0;
                }
                updateBalances();
            }

            if (e.target.classList.contains('reject-btn')) {
                const row = e.target.closest('tr');
                row.remove();
            }

            if (e.target.classList.contains('download-btn')) {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();

                const row = e.target.closest('tr');
                const productId = row.querySelector('td:nth-child(1)').textContent;
                const productName = row.querySelector('td:nth-child(2)').textContent;
                const productPrice = row.querySelector('td:nth-child(3)').textContent;

                doc.setFontSize(22);
                doc.text("Product Details", 20, 20);

                doc.setFontSize(16);
                doc.text(`ID: ${productId}`, 20, 30);
                doc.text(`Name: ${productName}`, 20, 40);
                doc.text(`Price: ${productPrice}`, 20, 50);

                doc.setFontSize(22);
                doc.text("Multiple Works", 20, 70);

                doc.setFontSize(16);
                doc.text("- Web Design", 20, 80);
                doc.text("- Content Creation", 20, 90);
                doc.text("- SEO Optimization", 20, 100);

                doc.setFontSize(22);
                doc.text("Questions", 20, 120);

                doc.setFontSize(16);
                doc.text("1. What is the main purpose of this product?", 20, 130);
                doc.text("2. How can this product be improved?", 20, 140);

                doc.save(`${productName.replace(/ /g, '_')}.pdf`);
            }
        });

        withdrawBtn.addEventListener('click', () => {
            if (availableBalance > 0) {
                alert(`Withdrawing Rs. ${availableBalance.toFixed(2)}`);
                availableBalance = 0;
                updateBalances();
            } else {
                alert('No funds available for withdrawal.');
            }
        });
    }
});
