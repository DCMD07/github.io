"use strict";
import { Router } from "./router.js";
import { LoadHeader } from "./header.js";
import { LoadFooter } from "./footer.js";
import { AuthGuard } from "./authguard.js";
const pageTitle = {
    "/": "Home Page",
    "/home": "Home Page",
    "/about": "About Page",
    "/products": "Our Products",
    "/services": "Our Services",
    "/contact": "Contact",
    "/contact-list": "Contact List",
    "/edit": "Edit Contact",
    "/login": "Login Page",
    "/register": "Register",
    "/404": "Page Not Found"
};
const routes = {
    "/": "views/pages/home.html",
    "/home": "views/pages/home.html",
    "/about": "views/pages/about.html",
    "/products": "views/pages/products.html",
    "/services": "views/pages/services.html",
    "/contact": "views/pages/contact.html",
    "/contact-list": "views/pages/contact-list.html",
    "/edit": "views/pages/edit.html",
    "/login": "views/pages/login.html",
    "/register": "views/pages/register.html",
    "/404": "views/pages/404.html",
};
const router = new Router(routes);
// IIFE - Immediately invoked Functional Expression
(function () {
    function handleLogOut(event) {
        event.preventDefault();
        sessionStorage.removeItem("user");
        console.log("[INFO] User logged out. Updating UI...");
        LoadHeader().then(() => {
            CheckLogin();
            router.navigate("/");
        });
    }
    function CheckLogin() {
        console.log("[INFO] Checking user login status.");
        const loginNav = document.getElementById("login");
        if (!loginNav)
            return;
        const userSession = sessionStorage.getItem("user");
        if (userSession) {
            loginNav.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout`;
            loginNav.setAttribute("href", "#");
            loginNav.removeEventListener("click", handleLogOut);
            loginNav.addEventListener("click", handleLogOut);
        }
        else {
            loginNav.innerHTML = `<i class="fas fa-sign-in-alt"></i> Login`;
            loginNav.removeEventListener("click", handleLogOut);
            loginNav.addEventListener("click", () => router.navigate("/login"));
        }
    }
    function DisplayContactPage() {
        console.log("✅ DisplayContactPage() called...");
        const contactListButton = document.getElementById("showContactList");
        if (contactListButton) {
            contactListButton.addEventListener("click", function (event) {
                event.preventDefault();
                console.log("🚀 'Show Contact List' button CLICKED!");
                router.navigate("/contact-list");
                console.log("✅ Router should now be navigating...");
            });
        }
        else {
            console.warn("⚠ 'Show Contact List' button NOT FOUND in the DOM.");
        }
    }
    function DisplayContactListPage() {
        console.log("✅ DisplayContactListPage() CALLED...");
        const contactList = document.getElementById("contactTableBody"); // FIXED ID
        if (!contactList) {
            console.error("❌ Contact List table NOT FOUND in the DOM.");
            return;
        }
        let data = "";
        let keys = Object.keys(localStorage);
        console.log("🛠️ LocalStorage Keys:", keys);
        keys.forEach((key, index) => {
            if (key.startsWith("contact_")) {
                const contactData = localStorage.getItem(key);
                if (contactData) {
                    const contact = JSON.parse(contactData);
                    console.log(`📌 Loading Contact: ${contact.fullName}`);
                    data += `
                <tr>
                    <th scope="row" class="text-center">${index + 1}</th>
                    <td>${contact.fullName}</td>
                    <td>${contact.contactNumber}</td>
                    <td>${contact.emailAddress}</td>
                    <td class="text-center">
                        <button value="${key}" class="btn btn-warning btn-sm edit">Edit</button>
                    </td>
                    <td class="text-center">
                        <button value="${key}" class="btn btn-danger btn-sm delete">Delete</button>
                    </td>
                </tr>`;
                }
            }
        });
        contactList.innerHTML = data;
        if (keys.length === 0) {
            console.warn("⚠ No contacts found in localStorage.");
        }
        document.querySelectorAll("button.delete").forEach(button => {
            button.addEventListener("click", function (event) {
                const buttonElement = event.currentTarget;
                if (confirm("Delete this contact?")) {
                    localStorage.removeItem(buttonElement.value);
                    DisplayContactListPage();
                }
            });
        });
        document.querySelectorAll("button.edit").forEach(button => {
            button.addEventListener("click", function (event) {
                const buttonElement = event.currentTarget;
                router.navigate(`/edit#${buttonElement.value}`);
            });
        });
    }
    async function DisplayWeather() {
        console.log("✅ DisplayWeather() CALLED...");
        const apiKey = "9c39df935818422cbd3c634931559964"; // Replace with a real API key if needed
        const city = "Bowmanville";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error("Failed to fetch weather data");
            const data = await response.json();
            console.log("🌤 Weather API response:", data);
            const weatherDataElement = document.getElementById("weather-data");
            if (weatherDataElement) {
                weatherDataElement.innerHTML = `
                <strong>City: </strong> ${data.name}<br>
                <strong>Temperature: </strong> ${data.main.temp}°C<br>
                <strong>Weather: </strong> ${data.weather[0].description}<br>
            `;
            }
        }
        catch (error) {
            console.error("❌ Error fetching weather data", error);
            const weatherDataElement = document.getElementById("weather-data");
            if (weatherDataElement) {
                weatherDataElement.textContent = "Unable to fetch weather data.";
            }
        }
    }
    function DisplayHomePage() {
        console.log("✅ DisplayHomePage() CALLED...");
        const main = document.querySelector("main");
        if (!main) {
            console.error("❌ Main container NOT FOUND in the DOM.");
            return;
        }
        main.innerHTML = `
        <h1>Welcome to our website</h1>
        <button id="AboutUsBtn" class="mb-5 btn btn-primary">About Us</button>
        <div id="weather" class="mt-5">
            <h3>Weather Information</h3>
            <p id="weather-data">Fetching weather data...</p>
        </div>
    `;
        document.getElementById("AboutUsBtn")?.addEventListener("click", () => {
            router.navigate("/about");
        });
        DisplayWeather();
    }
    function handlePageLogic(path) {
        console.log(`📌 handlePageLogic() CALLED for path: ${path}`);
        document.title = pageTitle[path] || "Untitled Page";
        if (["/contact-list", "/edit"].includes(path)) {
            console.log("🔐 Running AuthGuard...");
            AuthGuard();
        }
        switch (path) {
            case "/home":
                DisplayHomePage();
                break;
            case "/contact":
                DisplayContactPage();
                break;
            case "/contact-list":
                console.log("✅ LOADING Contact List Page...");
                DisplayContactListPage();
                break;
            default:
                console.error(`❌ No page logic matching for path: ${path}`);
        }
    }
    async function start() {
        console.log("Starting app...");
        await LoadHeader();
        await LoadFooter();
        const currentPath = location.hash.slice(1) || "/";
        router.loadRoute(currentPath);
        handlePageLogic(currentPath);
    }
    window.addEventListener("DOMContentLoaded", start);
})();
//# sourceMappingURL=app.js.map