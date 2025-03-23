/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: auth.js
Description: Handles basic login functionality using localStorage.
*/

// Wait for DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function () {
    const authLink = document.getElementById("authLink");

    // Check if a user is already logged in
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
        authLink.textContent = `Welcome, ${storedUser} (Log Out)`;
        authLink.addEventListener("click", logout);
    } else {
        authLink.textContent = "Log In";
        authLink.addEventListener("click", showLoginModal);
    }
});

// Show Login Modal
function showLoginModal() {
    const username = prompt("Enter your name to continue:");
    if (username) {
        localStorage.setItem("loggedInUser", username);
        alert(`Welcome, ${username}!`);
        location.reload(); // Refresh to update navbar
    }
}

// Log Out Function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    location.reload(); // Refresh to update navbar
}
