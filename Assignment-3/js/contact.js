/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: contact.js
Description: Handles contact form validation, submission confirmation, and redirection.
*/

// Event listener for the contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Ensure all fields are filled
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return;
    }

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.style.display = "block";

    // Clear the form
    document.getElementById("contact-form").reset();


});
