/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: January 22, 2025
Date Ended: January 24, 2025
Names: Mohammed Aasim, Ashar Asad
File: events.js
Description: Dynamically generates events, makes them clickable, and ensures images are displayed with a modal for detailed event information.
*/

const events = [
    {
        title: 'Fundraising Gala',
        description: 'Raise funds for community projects. Enjoy an engaging evening with guest speakers, music, and dinner.',
        date: '2025-03-10',
        category: 'fundraiser',
        image: 'event-fundraiser.png',
    },
    {
        title: 'Digital Skills Workshop',
        description: 'A free workshop to improve your digital skills, including resume creation and presentation skills.',
        date: '2025-04-05',
        category: 'workshop',
        image: 'event-workshop.png',
    },
    {
        title: 'Park Cleanup',
        description: 'Join us in cleaning the park and making it a better place for everyone.',
        date: '2025-05-20',
        category: 'cleanup',
        image: 'event-cleanup.png',
    },
    {
        title: 'Beach Cleanup',
        description: 'Help clean up the beach and contribute to preserving marine life and the environment.',
        date: '2025-06-15',
        category: 'cleanup',
        image: 'beach-cleanup.png',
    },
    {
        title: 'Animal Shelter Fundraiser',
        description: 'Support your local animal shelters by attending this fundraiser featuring live entertainment and food.',
        date: '2025-07-10',
        category: 'fundraiser',
        image: 'animal-fundraiser.png',
    },
];

const eventCalendar = document.getElementById('eventCalendar');
const categoryFilter = document.getElementById('categoryFilter');

// Function to display events
function displayEvents(eventsToDisplay) {
    eventCalendar.innerHTML = ''; // Clear previous content

    eventsToDisplay.forEach((event) => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('col-md-4', 'mb-4');

        // Generate dynamic event card with image and details
        eventCard.innerHTML = `
            <div class="card" style="cursor: pointer;">
                <img src="images/${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="card-text">${event.description}</p>
                    <p class="card-text"><small class="text-muted">${new Date(event.date).toLocaleDateString()}</small></p>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="showEventDetails('${event.title}', '${event.description}', '${event.date}', '${event.image}')">View Details</button>
                </div>
            </div>
        `;

        eventCalendar.appendChild(eventCard);
    });
}

// Function to display event details in a modal
function showEventDetails(title, description, date, image) {
    const modalTitle = document.getElementById('detailsModalLabel');
    const modalBody = document.getElementById('detailsModalBody');

    modalTitle.textContent = title;
    modalBody.innerHTML = `
        <img src="images/${image}" class="img-fluid mb-3" alt="${title}">
        <p>${description}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
    `;
}

// Filter functionality
categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;

    if (selectedCategory === 'all') {
        displayEvents(events); // Show all events
    } else {
        const filteredEvents = events.filter((event) => event.category === selectedCategory);
        displayEvents(filteredEvents);
    }
});

// Display all events initially
displayEvents(events);
