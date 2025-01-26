/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: January 22, 2025
Date Ended: January 24, 2025
Names: Mohammed Aasim, Ashar Asad
File: index.js
Description: Adds dynamic functionality to the homepage, including navbar updates and footer.
*/

// Add "Careers" and update "Blog" to "News"
const navbarNav = document.querySelector('.navbar-nav');
if (!document.querySelector('#careersLink')) {
    const careersLink = document.createElement('li');
    careersLink.classList.add('nav-item');
    careersLink.innerHTML = '<a class="nav-link" href="#">Careers</a>';
    navbarNav.appendChild(careersLink);
}

const blogLink = document.querySelector('#blogLink');
if (blogLink) {
    blogLink.textContent = 'News';
}

// Add footer dynamically
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
