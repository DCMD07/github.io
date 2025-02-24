/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: index.js
Description: Implements search functionality, user authentication system, and navbar updates dynamically.
*/

document.addEventListener("DOMContentLoaded", function () {
    updateAuthStatus();
});

// Function to update authentication UI
function updateAuthStatus() {
    const authLink = document.getElementById("authLink");
    const username = localStorage.getItem("username");

    if (username) {
        authLink.textContent = `Logout (${username})`;
        authLink.addEventListener("click", logout);
    } else {
        authLink.textContent = "Login";
        authLink.addEventListener("click", login);
    }
}

// Simulated Login Function
function login() {
    const user = prompt("Enter your name to login:");
    if (user) {
        localStorage.setItem("username", user);
        updateAuthStatus();
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("username");
    updateAuthStatus();
}

// Search Functionality
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.toLowerCase();

    if (!query) {
        alert("Please enter a search term!");
        return;
    }

    let results = [];

    const searchDatabase = [
        { type: "event", title: "Park Cleanup", url: "events.html" },
        { type: "event", title: "Fundraising Gala", url: "events.html" },
        { type: "news", title: "Community Service Initiative", url: "news.html" },
        { type: "opportunity", title: "Digital Skills Workshop", url: "opportunities.html" }
    ];

    results = searchDatabase.filter(item => item.title.toLowerCase().includes(query));

    if (results.length > 0) {
        window.location.href = results[0].url;
    } else {
        alert("No results found!");
    }
});
