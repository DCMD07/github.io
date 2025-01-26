const opportunities = [
    { title: 'Park Cleanup', description: 'Join us for a community park cleanup.', date: 'March 10, 2025' },
    { title: 'Digital Skills Workshop', description: 'Free workshop to improve your digital skills.', date: 'April 5, 2025' },
    { title: 'Fundraising Gala', description: 'An evening to raise funds for local projects.', date: 'May 20, 2025' }
];

const opportunityList = document.getElementById('opportunity-list');

opportunities.forEach(opportunity => {
    const opportunityCard = document.createElement('div');
    opportunityCard.classList.add('card', 'mb-3');

    opportunityCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${opportunity.title}</h5>
            <p class="card-text">${opportunity.description}</p>
            <p class="card-text"><small class="text-muted">Date: ${opportunity.date}</small></p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signUpModal">Sign Up</button>
        </div>
    `;

    opportunityList.appendChild(opportunityCard);
});

// Event handler for form submission
const volunteerForm = document.getElementById('volunteerForm');
volunteerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('volunteerName').value;
    const email = document.getElementById('volunteerEmail').value;
    const role = document.getElementById('volunteerRole').value;

    if (name && email && role) {
        // If valid, show success message and close modal
        alert('Thank you for signing up!');
        const modal = new bootstrap.Modal(document.getElementById('signUpModal'));
        modal.hide();
    } else {
        // If fields are empty, show error message
        alert('Please fill in all fields.');
    }
});
