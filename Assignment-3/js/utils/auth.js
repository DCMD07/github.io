/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: March 21, 2025
Date Ended: March 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: auth.ts
Description: Handles basic user authentication using localStorage.
*/
// Checks if a user is authenticated
export function isAuthenticated() {
    return !!localStorage.getItem("username");
}
// Gets the current logged-in user
export function getCurrentUser() {
    return localStorage.getItem("username");
}
// Logs in a user and stores the username in localStorage
export function login(username) {
    localStorage.setItem("username", username);
}
// Logs out a user by clearing localStorage
export function logout() {
    localStorage.removeItem("username");
}
