/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: January 22, 2025
Date Ended: January 24, 2025
Names: Mohammed Aasim, Ashar Asad
File: contact.js
Description: Provides validation for the contact form and timed redirection after submission.
*/

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent normal submission

    // Form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check required fields
    if (!name || !email || !message) {
        alert('All fields are required.');
        return;
    }

    // Show confirmation and redirect after delay
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000); // Redirect after 3 seconds
});
