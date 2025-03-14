"use strict";

/**
 * Dynamically loads the header from the header.html into the current page
 * @returns {Promise<void>}
 */
export function LoadHeader() {
    console.log("[INFO] LoadHeader() called...");

    return fetch("./views/components/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            UpdateActiveNavLink();
        })
        .catch(error => console.log("[ERROR] Unable to load header", error));
}

/**
 * update the navigation bar to highlight the current active page
 */
export function UpdateActiveNavLink(){
    console.log("[INFO] UpdateActiveNavLink() called...");
    const currentPath = location.hash.slice(1) || "/";
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href").replace("#", "");
        if(currentPath === linkPath){
            link.classList.add("active");
        }else{
            link.classList.remove("active");
        }
    });
}