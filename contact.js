const scriptURL = 'https://script.google.com/macros/s/AKfycbzKm9DsRc-1hVnxiR-N4pRbUzUl_8K69-65B_jRrZhPeL41BNfH1Fhjw9cubhqQqxE6/exec'; // Paste your Web App URL here
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Change button text to show it's working
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    fetch(scriptURL, { 
        method: 'POST', 
        body: JSON.stringify(formData)
    })
    .then(response => {
        alert("Thanks! We've received your message.");
        btn.disabled = false;
        btn.innerHTML = "Send Message";
        form.reset();
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("Oops, something went wrong.");
        btn.disabled = false;
        btn.innerHTML = "Send Message";
    });
});