/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
Names: Mohammed Aasim, Ashar Asad
File: gallery.js
Description: Loads images dynamically from gallery.json and displays them in a gallery with a lightbox.
*/

// Function to fetch images from gallery.json
async function fetchGalleryImages() {
    try {
        const response = await fetch("gallery.json"); // Fetch images from gallery.json
        const data = await response.json();
        displayGallery(data);
    } catch (error) {
        console.error("Error loading gallery images:", error);
        document.getElementById("galleryContainer").innerHTML = `<p class="text-danger">Failed to load images.</p>`;
    }
}

// Function to display images in the gallery
function displayGallery(images) {
    const galleryContainer = document.getElementById("galleryContainer");
    galleryContainer.innerHTML = ""; // Clear existing content

    images.forEach(image => {
        const imgElement = document.createElement("div");
        imgElement.classList.add("col-md-4", "mb-4");

        imgElement.innerHTML = `
            <div class="card">
                <img src="${image.image}" class="card-img-top" alt="${image.title}" onclick="openLightbox('${image.image}', '${image.title}')">
                <div class="card-body text-center">
                    <h5 class="card-title">${image.title}</h5>
                    <p class="card-text">${image.description}</p>
                </div>
            </div>
        `;

        galleryContainer.appendChild(imgElement);
    });
}

// Function to open the lightbox
function openLightbox(src, title) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");

    lightbox.style.display = "flex";
    lightboxImg.src = src;
    lightboxCaption.textContent = title;
}

// Function to close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Load images when the page is ready
document.addEventListener("DOMContentLoaded", fetchGalleryImages);
