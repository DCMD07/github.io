/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: events.js
Description: Dynamically loads events from an external JSON file using AJAX.
*/

document.addEventListener("DOMContentLoaded", function () {
    loadEvents(); // Load events dynamically on page load
    setupCategoryFilter();
});

// Function to fetch and display events from the `events.json` file
function loadEvents() {
    fetch("events.json")
        .then(response => response.json())
        .then(events => {
            displayEvents(events);
        })
        .catch(error => console.error("Error loading events:", error));
}

// Function to generate event cards dynamically
function displayEvents(events) {
    const eventCalendar = document.getElementById("eventCalendar");
    eventCalendar.innerHTML = ""; // Clear existing content

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("col-md-4", "mb-4");

        eventCard.innerHTML = `
            <div class="card shadow-sm">
                <img src="images/${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">${event.description}</p>
                    <p class="card-text"><small class="text-muted">Date: ${new Date(event.date).toLocaleDateString()}</small></p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="showEventDetails('${event.title}', '${event.description}', '${event.date}', '${event.image}')">View Details</button>
                </div>
            </div>
        `;
        eventCalendar.appendChild(eventCard);
    });
}

// Function to filter events dynamically by category
function setupCategoryFilter() {
    const categoryFilter = document.getElementById("categoryFilter");
    categoryFilter.addEventListener("change", () => {
        fetch("events.json")
            .then(response => response.json())
            .then(events => {
                const selectedCategory = categoryFilter.value;
                const filteredEvents = selectedCategory === "all" ? events : events.filter(event => event.category === selectedCategory);
                displayEvents(filteredEvents);
            })
            .catch(error => console.error("Error filtering events:", error));
    });
}

// Function to show event details in a modal
function showEventDetails(title, description, date, image) {
    document.getElementById("detailsModalLabel").textContent = title;
    document.getElementById("detailsModalBody").innerHTML = `
        <img src="images/${image}" class="img-fluid mb-3" alt="${title}">
        <p>${description}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
    `;
}
