const events = [
    { title: 'Fundraising Gala', description: 'An evening to raise funds for community projects.', date: '2025-03-10', category: 'fundraiser' },
    { title: 'Workshop on Digital Skills', description: 'A free workshop to improve digital skills for students.', date: '2025-04-05', category: 'workshop' },
    { title: 'Park Cleanup', description: 'Join us in cleaning our local park.', date: '2025-05-20', category: 'cleanup' },
    { title: 'Beach Cleanup', description: 'Let’s clean up the beach and preserve the environment.', date: '2025-06-15', category: 'cleanup' },
    { title: 'Fundraiser for Animal Shelter', description: 'A fundraising event to help local animal shelters.', date: '2025-07-10', category: 'fundraiser' }
];

const eventCalendar = document.getElementById('eventCalendar');
const categoryFilter = document.getElementById('categoryFilter');

// Function to display events
function displayEvents(eventsToDisplay) {
    eventCalendar.innerHTML = '';  // Clear previous events

    eventsToDisplay.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('col-md-4', 'mb-4');

        eventCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">${event.description}</p>
                    <p class="card-text"><small class="text-muted">Date: ${new Date(event.date).toLocaleDateString()}</small></p>
                </div>
            </div>
        `;

        eventCalendar.appendChild(eventCard);
    });
}

// Display all events by default
displayEvents(events);

// Event listener for category filter
categoryFilter.addEventListener('change', function() {
    const selectedCategory = categoryFilter.value;

    if (selectedCategory === 'all') {
        displayEvents(events);
    } else {
        const filteredEvents = events.filter(event => event.category === selectedCategory);
        displayEvents(filteredEvents);
    }
});
