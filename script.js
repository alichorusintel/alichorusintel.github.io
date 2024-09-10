function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
    activeSection.classList.remove('hidden');
}

// Show the Home section by default when the page loads
document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
});
