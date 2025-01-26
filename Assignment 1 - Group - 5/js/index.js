// Dynamically add "Donate" link to the navbar only if it doesn't already exist
const navbarNav = document.querySelector('.navbar-nav');
const existingDonateLink = document.querySelector('.nav-link[href="#"]');
if (!existingDonateLink) {
    const donateLink = document.createElement('li');
    donateLink.classList.add('nav-item');
    donateLink.innerHTML = `<a class="nav-link" href="#">Donate</a>`;
    navbarNav.appendChild(donateLink);
}

// Change "Opportunities" link text to "Volunteer Now"
const opportunitiesLink = document.querySelector('.nav-link[href="opportunities.html"]');
if (opportunitiesLink) {
    opportunitiesLink.textContent = 'Volunteer Now';
}

// Sticky Footer
const footer = document.querySelector('footer');
footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.width = '100%';

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.classList.add('btn', 'btn-secondary', 'back-to-top');
backToTopButton.textContent = 'Back to Top';
document.body.appendChild(backToTopButton);

// Show Back to Top button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Event Handler for "Sign Up" Form Submission
const signUpForm = document.querySelector('#signUpForm');
if (signUpForm) {
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        alert('Thank you for signing up!');
    });
}
