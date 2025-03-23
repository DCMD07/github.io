/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: opportunities.js
Description: Dynamically generates volunteer opportunities, manages modal functionality, and updates "Volunteer Now" label dynamically to "Opportunities".
*/

// Array of volunteer opportunities
const opportunities = [
    {
        title: "Park Cleanup",
        description: "Join us for a community park cleanup.",
        date: "March 10, 2025",
    },
    {
        title: "Digital Skills Workshop",
        description: "Improve your digital skills with our free workshop.",
        date: "April 5, 2025",
    },
    {
        title: "Fundraising Gala",
        description: "An evening to raise funds for local projects.",
        date: "May 20, 2025",
    },
];

// Get the container where the opportunities will be displayed
const opportunityList = document.getElementById("opportunity-list");

// Dynamically generate opportunity cards
opportunities.forEach((opportunity, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${opportunity.title}</h5>
            <p class="card-text">${opportunity.description}</p>
            <p class="card-text"><small class="text-muted">Date: ${opportunity.date}</small></p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUpModal" data-index="${index}">Sign Up</button>
        </div>
    `;
    opportunityList.appendChild(card);
});

// Handle "Sign Up" button click to prefill modal title
document.querySelectorAll('[data-bs-target="#signUpModal"]').forEach((button) => {
    button.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        const modalTitle = document.getElementById("signUpModalLabel");
        modalTitle.textContent = `Sign Up for ${opportunities[index].title}`;
    });
});

// Handle form submission
document.getElementById("volunteerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("volunteerName").value.trim();
    const email = document.getElementById("volunteerEmail").value.trim();
    const role = document.getElementById("volunteerRole").value.trim();

    // Validation
    if (name && email && role) {
        // Success message and modal close
        alert(`Thank you for signing up, ${name}!`);
        document.getElementById("volunteerForm").reset();
        const modal = bootstrap.Modal.getInstance(document.getElementById("signUpModal"));
        modal.hide();
    } else {
        alert("Please fill in all fields.");
    }
});

// Dynamically change "Volunteer Now" to "Opportunities" in the navbar
document.addEventListener("DOMContentLoaded", () => {
    const opportunitiesNavLink = document.querySelector('.nav-link[href="opportunities.html"]');

    if (opportunitiesNavLink) {
        opportunitiesNavLink.textContent = "Opportunities";
    }
});
