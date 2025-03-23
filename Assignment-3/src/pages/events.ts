/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: March 21, 2025
Date Ended: March 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: events.ts
Description: Manages event creation and display using localStorage for the Volunteer Connect SPA.
*/

interface Event {
    name: string;
    date: string;
    time: string;
    location: string;
    description: string;
}

// Load events from localStorage
function loadEvents(): Event[] {
    const eventsJSON = localStorage.getItem("events");
    return eventsJSON ? JSON.parse(eventsJSON) : [];
}

// Save events to localStorage
function saveEvents(events: Event[]): void {
    localStorage.setItem("events", JSON.stringify(events));
}

// Display events in the event list
function displayEvents(): void {
    const eventList = document.getElementById("event-list");
    if (!eventList) return;

    const events = loadEvents();
    eventList.innerHTML = "";

    events.forEach(event => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `
            <strong>${event.name}</strong><br>
            📅 ${event.date} ⏰ ${event.time}<br>
            📍 ${event.location}<br>
            📝 ${event.description}
        `;
        eventList.appendChild(li);
    });
}

// Set up event form behavior
export function setupEventForm(): void {
    const form = document.getElementById("event-form") as HTMLFormElement | null;

    // If the form is not yet loaded in the DOM (SPA delay), retry
    if (!form) {
        setTimeout(setupEventForm, 100); // Try again after 100ms
        return;
    }

    const messageBox = document.createElement("div");
    messageBox.id = "event-message";
    form.parentElement?.insertBefore(messageBox, form.nextSibling);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = (document.getElementById("event-name") as HTMLInputElement).value.trim();
        const date = (document.getElementById("event-date") as HTMLInputElement).value;
        const time = (document.getElementById("event-time") as HTMLInputElement).value;
        const location = (document.getElementById("event-location") as HTMLInputElement).value.trim();
        const description = (document.getElementById("event-description") as HTMLTextAreaElement).value.trim();

        if (!name || !date || !time || !location || !description) {
            alert("Please fill in all fields.");
            return;
        }

        const newEvent: Event = { name, date, time, location, description };
        const events = loadEvents();
        events.push(newEvent);
        saveEvents(events);

        form.reset();
        displayEvents();

        messageBox.className = "alert alert-success mt-3";
        messageBox.textContent = "Event added successfully!";
    });

    displayEvents();
}