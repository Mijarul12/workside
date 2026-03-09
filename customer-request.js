const scriptURL = 'https://script.google.com/macros/s/AKfycbzwPifftRQxYA_VGFol8iSC8vDPcZ2IJVSmnNCwcYDMOu55ZPt3pZK45LCG0WeEr9sw/exec';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = form.querySelector('button');
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    const fileInput = document.getElementById('attachment');
    const file = fileInput.files[0];
    
    const reader = new FileReader();
    
    reader.onload = function() {
        const payload = {
            name: document.getElementById('name').value,
            company: document.getElementById('company').value,
            mobile: document.getElementById('mobile').value,
            optMobile: document.getElementById('opt-mobile').value,
            email: document.getElementById('email').value,
            webType: document.getElementById('web-type').value,
            urgency: document.querySelector('input[name="urgency"]:checked').value,
            subject: document.getElementById('subject').value,
            description: document.getElementById('description').value,
            fileName: file ? file.name : null,
            fileData: file ? reader.result : null
        };

        fetch(scriptURL, { 
            method: 'POST', 
            body: JSON.stringify(payload) 
        })
        .then(response => {
            alert("Success! Your request has been sent.");
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Request";
        });
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        // Run payload without file if optional
        reader.onload(); 
    }
});