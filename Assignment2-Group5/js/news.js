
/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: February 21, 2025
Date Ended: February 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: news.js
Description: Fetches and displays real-time news related to volunteering using the News API.
*/

// API Token
const API_TOKEN = "gLazzB4L2R9imk9w4jxyVtQJ2lVoI9TEMFwl9HLD"; // Your provided token

// Function to fetch and display news articles
async function fetchNews() {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "<p>Loading news...</p>"; // Display loading message

    try {
        // API request URL
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${API_TOKEN}&language=en&categories=general&page=1`);

        // Convert response to JSON
        const data = await response.json();

        // Check if articles exist
        if (!data.data || data.data.length === 0) {
            newsContainer.innerHTML = "<p>No news articles found.</p>";
            return;
        }

        newsContainer.innerHTML = ""; // Clear previous content

        // Display first 5 news articles
        data.data.slice(0, 5).forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item", "mb-3", "p-3", "border", "rounded");

            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <small><strong>Source:</strong> ${article.source} | <strong>Published:</strong> ${new Date(article.published_at).toLocaleDateString()}</small>
                <br>
                <a href="${article.url}" target="_blank" class="btn btn-primary btn-sm mt-2">Read More</a>
            `;

            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

// Call function when the page loads
document.addEventListener("DOMContentLoaded", fetchNews);

// Function to fetch and display news articles
async function fetchNews() {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "<p>Loading news...</p>"; // Display loading message

    try {
        // API request URL
        const response = await fetch(`https://api.thenewsapi.com/v1/news/all?api_token=${API_TOKEN}&language=en&categories=general&page=1`);

        // Convert response to JSON
        const data = await response.json();

        // Check if articles exist
        if (!data.data || data.data.length === 0) {
            newsContainer.innerHTML = "<p>No news articles found.</p>";
            return;
        }

        newsContainer.innerHTML = ""; // Clear previous content

        // Display first 5 news articles
        data.data.slice(0, 5).forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item", "mb-3", "p-3", "border", "rounded");

            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <small><strong>Source:</strong> ${article.source} | <strong>Published:</strong> ${new Date(article.published_at).toLocaleDateString()}</small>
                <br>
                <a href="${article.url}" target="_blank" class="btn btn-primary btn-sm mt-2">Read More</a>
            `;

            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

// Call function when the page loads
document.addEventListener("DOMContentLoaded", fetchNews);
