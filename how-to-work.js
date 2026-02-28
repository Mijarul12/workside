document.addEventListener('DOMContentLoaded', () => {
    const showGuideBtn = document.getElementById('show-guide-btn');
    const guideContent = document.getElementById('guide-content');

    showGuideBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class to show or hide the guide content
        if (guideContent.classList.contains('hidden')) {
            guideContent.classList.remove('hidden');
        } else {
            guideContent.classList.add('hidden');
        }
    });
});
