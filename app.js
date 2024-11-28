// Predefined username and password for validation
const validUsername = "priya";
const validPassword = "priya";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate username and password
    if (username === validUsername && password === validPassword) {
        // Success: Show success message or redirect to another page
        alert("Login successful!");
        // Example: Redirect to another page (uncomment the line below)
        window.location.href = "home.html"; // Redirect to Home page
    } else {
        // Error: Show error message
        document.getElementById("errorMessage").style.display = "block";
    }
});
// JavaScript Document