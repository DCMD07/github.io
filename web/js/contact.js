document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Display confirmation message
    document.getElementById('confirmation-message').style.display = 'block';

    // Clear form fields
    document.getElementById('contact-form').reset();
});
