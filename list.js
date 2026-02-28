document.addEventListener('DOMContentLoaded', () => {
    const projectTableBody = document.querySelector('.project-table tbody');

    const generateRandomDate = (start, end) => {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toISOString().split('T')[0];
    };

    const questions = {
        "MCA": {
            title: "MCA (Master of Computer Applications)",
            focus: "Software Engineering & System Design",
            question: "Design a comprehensive Architecture and Deployment Strategy for a scalable, cloud-native E-commerce platform. Your answer must include:",
            points: [
                "System Architecture: A detailed comparison between Microservices and Monolithic architectures in this context.",
                "Database Design: Justification for using a Polyglot persistence model (SQL vs. NoSQL).",
                "SDLC Methodology: An explanation of why the Agile-DevOps framework is preferred for continuous integration and delivery (CI/CD)."
            ]
        },
        "MBA (Information Technology)": {
            title: "MBA (Information Technology)",
            focus: "IT Strategy & Digital Transformation",
            question: "Analyze the role of Enterprise Resource Planning (ERP) systems in driving organizational digital transformation. Address the following:",
            points: [
                "Strategic Alignment: How does ERP integration bridge the gap between business operations and IT infrastructure?",
                "Change Management: Discuss the critical success factors and common pitfalls during the implementation phase.",
                "ROI Analysis: Evaluate how a company measures the tangible and intangible benefits of a multi-million dollar IT investment."
            ]
        },
        "BCA (Cyber Security)": {
            title: "BCA (Cyber Security)",
            focus: "Network Security & Threat Mitigation",
            question: "Critically examine the Defense-in-Depth strategy for securing a corporate network against Advanced Persistent Threats (APTs). Your response should detail:",
            points: [
                "Layered Security: The specific roles of Firewalls, IDS/IPS, and Endpoint Detection and Response (EDR).",
                "Cryptographic Protocols: The application of SSL/TLS and PKI in securing data-in-transit.",
                "Incident Response: A step-by-step breakdown of the NIST Incident Handling Guide (Preparation to Lessons Learned)."
            ]
        },
        "B.Sc (Physics)": {
            title: "B.Sc (Physics)",
            focus: "Quantum Mechanics or Electromagnetism",
            question: "Derive and discuss the significance of the Time-Independent Schrödinger Equation for a particle in a one-dimensional infinite square well. In your derivation, ensure you cover:",
            points: [
                "Boundary Conditions: Application of boundary conditions to find the wave function $\\psi(x)$.",
                "Energy Quantization: The mathematical proof showing that energy levels are discrete:\n\n$$E_n = \\\\frac{n^2 \\\\pi^2 \\\\hbar^2}{2mL^2}$$",
                "Physical Interpretation: The concept of probability density and why the particle cannot be at rest (Zero-point energy)."
            ]
        }
    };

    const generateProjects = (count) => {
        const projects = [];
        const projectNames = ['MCA', 'MBA (Information Technology)', 'BCA (Cyber Security)', 'B.Sc (Physics)'];
        
        const currentYear = new Date().getFullYear();
        const previousYear = currentYear - 1;

        const submissionStartDate = new Date(currentYear, 4, 19); // May 19
        const submissionEndDate = new Date(currentYear, 11, 30); // Dec 30

        const uploadStartDate = new Date(previousYear, 7, 25); // Aug 25 of previous year
        const uploadEndDate = new Date(currentYear, 2, 2);     // Mar 2 of current year

        for (let i = 1; i <= count; i++) {
            const projectName = projectNames[Math.floor(Math.random() * projectNames.length)];
            const projectId = `#${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;
            
            const lastDate = generateRandomDate(submissionStartDate, submissionEndDate);
            const uploadDate = generateRandomDate(uploadStartDate, uploadEndDate);
            
            const rate = Math.floor(Math.random() * 1000) + 300;
            
            projects.push({
                projectName,
                projectId,
                lastDate,
                uploadDate,
                rate
            });
        }
        return projects;
    };

    const renderProjects = (projects) => {
        projectTableBody.innerHTML = ''; 
        projects.forEach(project => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td data-project-name="${project.projectName}">${project.projectName}</td>
                <td>${project.projectId}</td>
                <td>${project.lastDate}</td>
                <td>${project.uploadDate}</td>
                <td>₹${project.rate}</td>
                <td><button class="download-question-btn"><img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="Download PDF"></button></td>
                <td><a href="#" class="download-answer-btn disabled"><img src="https://img.icons8.com/ios-filled/50/000000/download.png" alt="Download Answer"></a></td>
                <td><button class="accept-btn">Accept</button></td>
            `;
            projectTableBody.appendChild(row);
        });
    };

    const projects = generateProjects(1000);
    renderProjects(projects);

    projectTableBody.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.download-question-btn')) {
            const row = target.closest('tr');
            const projectName = row.querySelector('td[data-project-name]').dataset.projectName;
            const questionData = questions[projectName];
            
            if (questionData) {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();

                doc.setFontSize(18);
                doc.text(questionData.title, 20, 20);
                
                doc.setFontSize(14);
                doc.text(`Focus: ${questionData.focus}`, 20, 30);
                
                doc.setFontSize(12);
                doc.text('Marks: 90', 170, 30);

                doc.setLineWidth(0.5);
                doc.line(20, 35, 190, 35);

                doc.setFontSize(12);
                const splitQuestion = doc.splitTextToSize(questionData.question, 170);
                doc.text(splitQuestion, 20, 45);

                let y = 60; // Start position for the points
                questionData.points.forEach((point, index) => {
                    const splitPoint = doc.splitTextToSize(point, 160);
                    doc.text(`${index + 1}.`, 25, y);
                    doc.text(splitPoint, 35, y);
                    y += (splitPoint.length * 5) + 10; // Adjust y position for the next point
                });

                doc.save(`${projectName}_Question.pdf`);
            }
        }

        if (target.classList.contains('accept-btn')) {
            const button = target;
            const row = button.closest('tr');
            const downloadAnswerBtn = row.querySelector('.download-answer-btn');
            const rateCell = row.querySelector('td:nth-child(5)');
            const rate = parseFloat(rateCell.textContent.replace('₹', ''));

            button.textContent = 'Pending';
            button.disabled = true;
            button.classList.add('pending');

            downloadAnswerBtn.classList.remove('disabled');

            let pendingBalance = localStorage.getItem('pendingBalance') ? parseFloat(localStorage.getItem('pendingBalance')) : 0;
            pendingBalance += rate;
            localStorage.setItem('pendingBalance', pendingBalance);
        }
    });
});