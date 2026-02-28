document.addEventListener('DOMContentLoaded', function() {
    const workerList = document.getElementById('worker-list').querySelector('tbody');
    let workers = JSON.parse(localStorage.getItem('workers')) || [];

    function renderWorkers() {
        workerList.innerHTML = '';
        workers.forEach((worker, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${worker.name}</td>
                <td>${worker.generatedDate}</td>
                <td>${worker.email}</td>
                <td>${worker.password}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            workerList.appendChild(row);
        });
    }

    workerList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            const deletedWorker = workers.splice(index, 1)[0];
            
            let deletedEmails = JSON.parse(localStorage.getItem('deletedEmails')) || [];
            deletedEmails.push(deletedWorker.email);
            localStorage.setItem('deletedEmails', JSON.stringify(deletedEmails));

            localStorage.setItem('workers', JSON.stringify(workers));
            renderWorkers();
        }
    });

    renderWorkers();
});
