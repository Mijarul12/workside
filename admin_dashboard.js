document.addEventListener('DOMContentLoaded', function() {
    // MODALS
    const createWorkerBtn = document.getElementById('create-worker-btn');
    const createStudentBtn = document.getElementById('create-student-btn');
    const workerModal = document.getElementById('create-worker-modal');
    const studentModal = document.getElementById('create-student-modal');
    const closeBtns = document.querySelectorAll('.close-btn');
    const createWorkerForm = document.getElementById('create-worker-form');
    const createStudentForm = document.getElementById('create-student-form');

    createWorkerBtn.addEventListener('click', () => workerModal.style.display = 'block');
    createStudentBtn.addEventListener('click', () => studentModal.style.display = 'block');

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            workerModal.style.display = 'none';
            studentModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == workerModal) workerModal.style.display = 'none';
        if (event.target == studentModal) studentModal.style.display = 'none';
    });

    // COUNTERS
    const workerCountSpan = document.getElementById('worker-count');
    const studentCountSpan = document.getElementById('student-count');

    let workers = JSON.parse(localStorage.getItem('workers')) || [];
    let students = JSON.parse(localStorage.getItem('students')) || [];
    let workerCount = workers.length;
    let studentCount = students.length;

    function updateCounter(element, targetCount) {
        let currentCount = 0;
        const increment = Math.ceil(targetCount / 100);

        function animateCount() {
            currentCount += increment;
            if (currentCount >= targetCount) {
                element.textContent = targetCount + ' active now';
            } else {
                element.textContent = currentCount + ' active now';
                requestAnimationFrame(animateCount);
            }
        }
        animateCount();
    }

    updateCounter(workerCountSpan, workerCount);
    updateCounter(studentCountSpan, studentCount);

    createWorkerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = createWorkerForm.querySelector('input[type="text"]').value;
        const email = createWorkerForm.querySelector('input[type="email"]').value;
        const password = createWorkerForm.querySelector('input[type="password"]').value;

        const newWorker = {
            name: name,
            generatedDate: new Date().toLocaleString(),
            email: email,
            password: password
        };

        workers.push(newWorker);
        localStorage.setItem('workers', JSON.stringify(workers));

        workerCount = workers.length;
        updateCounter(workerCountSpan, workerCount);

        createWorkerForm.reset();
        workerModal.style.display = 'none';
    });

    createStudentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = createStudentForm.querySelector('input[type="text"]').value;
        const email = createStudentForm.querySelector('input[type="email"]').value;
        const password = createStudentForm.querySelector('input[type="password"]').value;

        const newStudent = {
            name: name,
            generatedDate: new Date().toLocaleString(),
            email: email,
            password: password
        };

        students.push(newStudent);
        localStorage.setItem('students', JSON.stringify(students));

        studentCount = students.length;
        updateCounter(studentCountSpan, studentCount);

        createStudentForm.reset();
        studentModal.style.display = 'none';
    });

    // Redirect to delete pages
    document.querySelector('a[href="delete_worker.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'delete_worker.html';
    });

    document.querySelector('a[href="delete_student.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'delete_student.html';
    });
});