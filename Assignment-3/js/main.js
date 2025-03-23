/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: March 21, 2025
Date Ended: March 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: main.ts
Description: Initializes routing and sets up dynamic loading of views using hash-based SPA structure.
*/
import { Router } from "./router/router.js";
import { setupEventForm } from "./pages/events.js";
import { renderStatistics } from "./pages/statistics.js";
import { isAuthenticated, getCurrentUser } from "./utils/auth.js";
// Initialize SPA router
const router = new Router("app");
// Define routes
router.registerRoute("home", "home.html");
router.registerRoute("about", "about.html");
router.registerRoute("contact", "contact.html");
router.registerRoute("careers", "careers.html");
router.registerRoute("events", "events.html");
router.registerRoute("gallery", "gallery.html");
router.registerRoute("news", "news.html");
router.registerRoute("opportunities", "opportunities.html");
router.registerRoute("privacy", "privacy.html");
router.registerRoute("terms", "terms.html");
router.registerRoute("statistics", "statistics.html");
// Feature init based on route
window.addEventListener("hashchange", handlePageFeatures);
window.addEventListener("DOMContentLoaded", handlePageFeatures);
function handlePageFeatures() {
    const hash = location.hash.replace("#", "");
    const protectedPages = ["events", "statistics"];
    const isLoggedIn = isAuthenticated();
    if (protectedPages.includes(hash) && !isLoggedIn) {
        alert("You must be logged in to access this page.");
        location.hash = "home";
        return;
    }
    const statsNav = document.getElementById("statsNav");
    if (statsNav) {
        statsNav.classList.toggle("d-none", !isLoggedIn);
    }
    if (hash === "events") {
        setupEventForm();
    }
    else if (hash === "statistics") {
        renderStatistics();
    }
    // Dynamic navbar greeting
    const user = getCurrentUser();
    const authLink = document.getElementById("authLink");
    if (user && authLink) {
        authLink.textContent = `Welcome, ${user} (Logout)`;
        authLink.onclick = () => {
            localStorage.removeItem("username");
            location.reload();
        };
    }
}
// Display welcome message if logged in
const user = getCurrentUser();
if (user) {
    const authLink = document.getElementById("authLink");
    if (authLink) {
        authLink.textContent = `Welcome, ${user} (Logout)`;
        authLink.onclick = () => {
            localStorage.removeItem("username");
            location.reload();
        };
    }
}
