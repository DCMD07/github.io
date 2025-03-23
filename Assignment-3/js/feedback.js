/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: feedback.js
Description: Handles feedback form submission using AJAX and displays confirmation modal.
*/

document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture input values
    const name = document.getElementById("feedbackName").value.trim();
    const message = document.getElementById("feedbackMessage").value.trim();

    // Validate input
    if (!name || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate AJAX request
    setTimeout(() => {
        // Display confirmation modal with user input
        document.getElementById("feedbackModalBody").innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p>We appreciate your feedback!</p>
        `;
        new bootstrap.Modal(document.getElementById("feedbackModal")).show();

        // Reset form after submission
        document.getElementById("feedbackForm").reset();
    }, 1000);
});
