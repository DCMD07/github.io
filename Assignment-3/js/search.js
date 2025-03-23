/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: search.js
Description: Implements a global search functionality that dynamically filters content or navigates to relevant pages.
*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") { // Search on 'Enter' key press
            event.preventDefault();
            globalSearch();
        }
    });
});

// Function to determine what the user is searching for and navigate accordingly
function globalSearch() {
    const searchQuery = document.getElementById("searchInput").value.trim().toLowerCase();

    if (!searchQuery) return; // Do nothing if empty

    // Define keywords and corresponding pages
    const searchPages = {
        "event": "events.html",
        "cleanup": "events.html",
        "fundraiser": "events.html",
        "workshop": "events.html",
        "volunteer": "opportunities.html",
        "opportunity": "opportunities.html",
        "career": "careers.html",
        "news": "news.html",
        "about": "about.html",
        "contact": "contact.html"
    };

    // Check if search matches any predefined keywords
    for (const key in searchPages) {
        if (searchQuery.includes(key)) {
            window.location.href = searchPages[key]; // Redirect to matched page
            return;
        }
    }

    // Default case: If no direct match, redirect to Events page for general search
    window.location.href = "events.html";
}
