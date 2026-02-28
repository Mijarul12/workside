document.addEventListener('DOMContentLoaded', () => {
    const dosButton = document.createElement('button');
    dosButton.textContent = "Do's";
    dosButton.classList.add('filter-button');

    const dontsButton = document.createElement('button');
    dontsButton.textContent = "Don'ts";
    dontsButton.classList.add('filter-button');

    const container = document.querySelector('.handbook-container');
    container.insertBefore(dontsButton, container.firstChild);
    container.insertBefore(dosButton, container.firstChild);

    const allSections = document.querySelectorAll('section');
    const dosSections = document.querySelectorAll('.dos');
    const dontsSections = document.querySelectorAll('.donts');

    dosButton.addEventListener('click', () => {
        allSections.forEach(section => section.style.display = 'none');
        dosSections.forEach(section => section.style.display = 'block');
    });

    dontsButton.addEventListener('click', () => {
        allSections.forEach(section => section.style.display = 'none');
        dontsSections.forEach(section => section.style.display = 'block');
    });
});
