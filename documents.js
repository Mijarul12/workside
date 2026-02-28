document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-upload');
    const fileInputLabel = document.querySelector('.file-input-label');
    const fileList = document.getElementById('file-list');

    // Update file input label with the selected file name
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'Choose file...';
            if (fileInputLabel) {
                fileInputLabel.textContent = fileName;
            }
        });
    }

    // Handle form submission
    if (uploadForm) {
        uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const assignmentNameInput = document.getElementById('assignment-name');
            const assignmentName = assignmentNameInput.value;
            const file = fileInput.files[0];

            if (assignmentName && file && fileList) {
                // Create a new list item for the uploaded file
                const listItem = document.createElement('li');
                
                const nameSpan = document.createElement('span');
                nameSpan.textContent = `${assignmentName} - ${file.name}`;
                
                const statusSpan = document.createElement('span');
                statusSpan.className = 'status';
                statusSpan.textContent = 'Pending';

                listItem.appendChild(nameSpan);
                listItem.appendChild(statusSpan);
                fileList.appendChild(listItem);

                // Reset the form
                uploadForm.reset();
                if (fileInputLabel) {
                    fileInputLabel.textContent = 'Choose file...';
                }

            } else {
                alert('Please fill out all fields and select a file.');
            }
        });
    }
});
