/**
 * Work Side - Premium Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {

    // Data for Flagship Programs and Expert Services
    const flagshipPrograms = [
        {
            title: 'Full Stack Web Development',
            description: 'Master the MERN stack and build real-world projects.',
            icon: 'fas fa-code'
        },
        {
            title: 'Data Science & Machine Learning',
            description: 'Learn Python, SQL, and advanced ML algorithms.',
            icon: 'fas fa-brain'
        },
        {
            title: 'Cloud Computing & DevOps',
            description: 'Become an expert in AWS, Azure, and CI/CD pipelines.',
            icon: 'fas fa-cloud-upload-alt'
        }
    ];

    const expertServices = [
        {
            title: 'Resume Building',
            description: 'Craft a professional resume that gets you noticed.',
            icon: 'far fa-file-alt'
        },
        {
            title: 'Mock Interviews',
            description: 'Practice with industry experts and get valuable feedback.',
            icon: 'fas fa-users'
        },
        {
            title: 'Career Counseling',
            description: 'Get personalized guidance to achieve your career goals.',
            icon: 'fas fa-comments'
        }
    ];

    // Function to create and inject program cards
    function createProgramCards() {
        const container = document.querySelector('.program-cards');
        if (container) {
            flagshipPrograms.forEach(program => {
                const card = document.createElement('div');
                card.className = 'bento-card';
                card.innerHTML = `
                    <i class="${program.icon} s-icon"></i>
                    <h3>${program.title}</h3>
                    <p>${program.description}</p>
                    <a href="#" class="link-arrow">Learn More &rarr;</a>
                `;
                container.appendChild(card);
            });
        }
    }

    // Function to create and inject service cards
    function createServiceCards() {
        const container = document.querySelector('.service-cards');
        if (container) {
            expertServices.forEach(service => {
                const card = document.createElement('div');
                card.className = 'service-item';
                card.innerHTML = `
                    <i class="${service.icon} s-icon"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                `;
                container.appendChild(card);
            });
        }
    }

    createProgramCards();
    createServiceCards();

    // Navbar Scroll Effect
    const header = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 8%';
            header.style.background = 'rgba(5, 5, 5, 0.9)';
        } else {
            header.style.padding = '1.5rem 8%';
            header.style.background = 'rgba(5, 5, 5, 0.3)';
        }
    });

    // Back to Top Button Logic
    const createBackToTop = () => {
        const btn = document.createElement('button');
        btn.innerHTML = '↑';
        btn.className = 'back-to-top';
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };
    createBackToTop();

    // Worker Portal Modal Logic
    const modal = document.getElementById("worker-portal-modal");
    const btn = document.getElementById("worker-portal-btn");
    const span = document.getElementsByClassName("close-button")[0];
    const confirmBtn = document.getElementById("confirm-key-btn");
    const keyInput = document.getElementById("secret-key-input");
    const modalError = document.getElementById("modal-error");

    const correctKey = "732202";

    if(btn) {
        btn.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
            keyInput.focus();
        }
    }

    if(span) {
        span.onclick = function() {
            modal.style.display = "none";
            modalError.style.display = "none";
            keyInput.value = "";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalError.style.display = "none";
            keyInput.value = "";
        }
    }

    if(confirmBtn) {
        confirmBtn.onclick = function() {
            if (keyInput.value === correctKey) {
                window.location.href = "worker_dashboard.html";
            } else {
                modalError.style.display = "block";
                keyInput.value = "";
                keyInput.focus();
            }
        }
    }
    
    if(keyInput) {
        keyInput.addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                confirmBtn.click();
            }
        });
    }
});