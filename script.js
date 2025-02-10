// Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Toggle Switch (Active/Inactive)
const toggleSwitch = document.querySelector('.toggle-switch');
toggleSwitch.addEventListener('click', function() {
    this.classList.toggle('active');
});
