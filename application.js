
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM ELEMENTS ---
    const form = document.getElementById('multiStepForm');
    const prevBtns = document.querySelectorAll(".btn.prev-btn");
    const nextBtns = document.querySelectorAll(".btn.next-btn");
    const formSteps = document.querySelectorAll(".form-step");
    const progress = document.getElementById("progress");
    const progressCircles = document.querySelectorAll(".circle");

    // Signature Pad Elements
    const signatureCanvas = document.getElementById('signature-canvas');
    const clearSignatureBtn = document.getElementById('clear-signature');
    const ctx = signatureCanvas.getContext('2d');

    // --- STATE ---
    let currentStep = 0;
    let isDrawing = false;

    // --- FUNCTIONS ---

    const updateFormSteps = () => {
        formSteps.forEach((step, idx) => {
            step.classList.toggle('active', idx === currentStep);
        });
    };

    const updateProgressBar = () => {
        progressCircles.forEach((circle, idx) => {
            circle.classList.toggle('active', idx <= currentStep);
        });
        const activeCircles = document.querySelectorAll(".circle.active");
        const widthPercentage = (activeCircles.length - 1) / (progressCircles.length - 1) * 100;
        progress.style.width = `${widthPercentage}%`;
    };

    const handleNext = (e) => {
        e.preventDefault();
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            updateFormSteps();
            updateProgressBar();
        }
    };

    const handlePrev = (e) => {
        e.preventDefault();
        if (currentStep > 0) {
            currentStep--;
            updateFormSteps();
            updateProgressBar();
        }
    };

    // --- SIGNATURE PAD LOGIC ---
    const getPosition = (event) => {
        const rect = signatureCanvas.getBoundingClientRect();
        const scaleX = signatureCanvas.width / rect.width;
        const scaleY = signatureCanvas.height / rect.height;
        const source = event.touches ? event.touches[0] : event;
        return {
            x: (source.clientX - rect.left) * scaleX,
            y: (source.clientY - rect.top) * scaleY
        };
    };

    const startDrawing = (e) => {
        e.preventDefault();
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(getPosition(e).x, getPosition(e).y);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        e.preventDefault();
        ctx.lineTo(getPosition(e).x, getPosition(e).y);
        ctx.stroke();
    };

    const stopDrawing = () => {
        if (isDrawing) {
            isDrawing = false;
            ctx.closePath();
        }
    };

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    // --- EVENT LISTENERS ---
    nextBtns.forEach(btn => btn.addEventListener("click", handleNext));
    prevBtns.forEach(btn => btn.addEventListener("click", handlePrev));

    signatureCanvas.addEventListener('mousedown', startDrawing);
    signatureCanvas.addEventListener('mousemove', draw);
    signatureCanvas.addEventListener('mouseup', stopDrawing);
    signatureCanvas.addEventListener('mouseout', stopDrawing);
    signatureCanvas.addEventListener('touchstart', startDrawing, { passive: false });
    signatureCanvas.addEventListener('touchmove', draw, { passive: false });
    signatureCanvas.addEventListener('touchend', stopDrawing);

    clearSignatureBtn.addEventListener('click', (e) => {
        e.preventDefault();
        ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
    });

    // --- FORM SUBMISSION & PAYMENT ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const options = {
            key: "rzp_live_SLSXfQRNG3Pdfb", // Your Live Key ID
            amount: 4900, // Amount in paise (49 * 100)
            currency: "INR",
            name: "Registration Fee",
            description: "Registration for Student / Worker",
            handler: function (response) {
                submitData(response.razorpay_payment_id);
            },
            prefill: {
                name: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                contact: document.getElementById('phone').value
            },
            theme: {
                color: "#007bff"
            }
        };

        const rzp = new Razorpay(options);
        rzp.open();
        
        rzp.on('payment.failed', function (response){
                alert("Payment failed. Please try again.");
                console.error('Payment failed:', response.error);
        });
    });

    function submitData(paymentId) {
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        const formData = new FormData();
        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            const key = input.id;
            if (!key || input.type === 'submit' || input.type === 'button') return;

            if (input.type === 'file') {
                if (input.files.length > 0) {
                    formData.append(key, input.files[0], input.files[0].name);
                }
            } else {
                formData.append(key, input.value);
            }
        });

        formData.append('signature', signatureCanvas.toDataURL());
        formData.append('paymentId', paymentId);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwYc4Y3Makh-5qXcBPyFlVzwhaOnkOoPNTnlQlkoy3V5lBU75Ag2EfNNz6jAi3RYK8NNQ/exec';

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    alert('Registration submitted successfully!');
                    form.reset();
                    ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
                    currentStep = 0;
                    updateFormSteps();
                    updateProgressBar();
                } else {
                    return response.text().then(text => { throw new Error(text || 'Form submission to Google Sheet failed.') });
                }
            })
            .catch(error => {
                console.error('Error submitting to Google Sheet:', error.message);
                alert(`Your payment was successful, but an error occurred while submitting the form data: ${error.message}`);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = "Submit";
            });
    }

    // --- INITIALIZATION ---
    updateFormSteps();
    updateProgressBar();
});
