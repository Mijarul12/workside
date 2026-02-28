document.addEventListener('DOMContentLoaded', function() {
    const studentList = document.getElementById('student-list').querySelector('tbody');
    let students = JSON.parse(localStorage.getItem('students')) || [];

    function renderStudents() {
        studentList.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.generatedDate}</td>
                <td>${student.email}</td>
                <td>${student.password}</td>
                <td><button class="delete-btn" data-index="${index}">Delete</button></td>
            `;
            studentList.appendChild(row);
        });
    }

    studentList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            const deletedStudent = students.splice(index, 1)[0];
            
            let deletedStudentEmails = JSON.parse(localStorage.getItem('deletedStudentEmails')) || [];
            deletedStudentEmails.push(deletedStudent.email);
            localStorage.setItem('deletedStudentEmails', JSON.stringify(deletedStudentEmails));

            localStorage.setItem('students', JSON.stringify(students));
            renderStudents();
        }
    });

    renderStudents();
});
