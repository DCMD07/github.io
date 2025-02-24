/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: about.js
Description: Handles dynamic footer addition for the About page.
*/

// Dynamically add footer
const footerPlaceholder = document.getElementById('footerPlaceholder');
footerPlaceholder.innerHTML = `
    <footer class="bg-light text-center py-3 mt-4">
        <p>&copy; 2025 Volunteer Connect. All Rights Reserved.</p>
        <div>
            <a href="privacy-policy.html">Privacy Policy</a> |
            <a href="terms-of-service.html">Terms of Service</a>
        </div>
    </footer>
`;
