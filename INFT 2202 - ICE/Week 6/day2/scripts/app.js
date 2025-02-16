"use strict";

// IIFE - Immediately Invoked Functional Expression
(function(){

    function CheckLogin(){
        console.log("[INFO] Checking user login status.");

        const loginNav = document.querySelector(".login"); // FIXED: Used querySelector

        if (!loginNav) {
            console.warn("[WARNING] loginNav element not found! Skipping CheckLogin().");
            return;
        }

        const userSession = sessionStorage.getItem("user");

        if (userSession) {
            loginNav.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout`;
            loginNav.href = "#";

            loginNav.addEventListener("click", (event) => {
                event.preventDefault();
                sessionStorage.removeItem("user");
                location.href = "login.html";
            });
        }
    }

    function DisplayLoginPage() {
        console.log("[INFO] DisplayLoginPage() called...");

        const messageArea = document.getElementById("messageArea");
        const loginButton = document.getElementById("loginButton");

        // Hide message initially
        if (messageArea) messageArea.style.display = "none";

        if (!loginButton) {
            console.error("[ERROR] loginButton not found in the DOM");
            return;
        }

        loginButton.addEventListener("click", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            const storedUser = JSON.parse(sessionStorage.getItem("user"));

            if (!storedUser) {
                alert("No user registered. Please sign up first.");
                return;
            }

            if (username === storedUser.Username && password === storedUser.Password) {
                sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));

                alert("Login successful!");
                location.href = "contact-list.html";
            } else {
                messageArea.style.display = "block";
                messageArea.classList.add("alert", "alert-danger");
                messageArea.textContent = "Invalid username or password. Please try again";
            }
        });
    }

    function DisplayRegisterPage() {
        console.log("[INFO] DisplayRegisterPage() called...");

        const registerForm = document.getElementById("registerForm");

        if (!registerForm) {
            console.error("[ERROR] Register form not found.");
            return;
        }

        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get user input
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("emailAddress").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            // Validate inputs
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                alert("All fields are required.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Store user in sessionStorage
            const user = {
                Username: email,  // Using email as username
                Password: password,
                DisplayName: `${firstName} ${lastName}`,
                EmailAddress: email
            };

            sessionStorage.setItem("user", JSON.stringify(user));

            alert("Registration successful! You can now log in.");
            location.href = "login.html";
        });
    }

    async function LoadHeader() {
        console.log("[INFO] LoadHeader() called...");

        try {
            const response = await fetch("header.html");
            const data = await response.text();
            document.querySelector('header').innerHTML = data;
        } catch (error) {
            console.error("[ERROR] Unable to load header", error);
        }
    }

    async function start() {
        console.log("[INFO] Starting app...");

        await LoadHeader();
        CheckLogin();

        switch (document.title) {
            case "Login":
                DisplayLoginPage();
                break;
            case "Register":
                DisplayRegisterPage();
                break;
            default:
                console.warn("[WARNING] No page function assigned.");
        }
    }

    window.addEventListener("DOMContentLoaded", () => {
        console.log("[INFO] DOM fully loaded and parsed.");
        start();
    });

})();
