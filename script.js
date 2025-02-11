// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    // Load dark mode preference from localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle Dark Mode & Save Preference
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });
    }

    // Toggle Switch (Active/Inactive)
    const toggleSwitch = document.querySelector('.toggle-switch');
    if (toggleSwitch) {
        toggleSwitch.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }

    // Function to fetch and render Markdown
    async function loadMarkdown() {
        const markdownContainer = document.getElementById("markdown-container");

        try {
            const response = await fetch("./posts/blog1.md"); 
            
            if (!response.ok) {
                throw new Error(`Markdown file not found. Server responded with ${response.status}`);
            }

            const markdownText = await response.text(); // Convert to text
            markdownContainer.innerHTML = marked.parse(markdownText);
        } catch (error) {
            console.error("Error loading Markdown:", error);
            markdownContainer.innerHTML = "<p style='color: red;'>⚠️ Error loading blog post. Please check the console.</p>";
        }
    }

    // Load Markdown content
    loadMarkdown();
});
