/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: February 21, 2025
Date Ended: February 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: news.js
Description: Fetches and displays news articles related to volunteering using the NewsAPI.
*/

document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
});

// Function to fetch news articles from the News API
async function fetchNews() {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "<p>Loading news...</p>"; // Display loading message

    try {
        // Fetch news articles from NewsAPI with security headers
        const response = await fetch("https://newsapi.org/v2/everything?q=volunteer&apiKey=ffe40c27488c48b9b23c667194158fef", {
            headers: {
                "Content-Type": "application/json",
                "Upgrade-Insecure-Requests": "1"
            }
        });

        // If response is not OK, throw an error
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Parse response data as JSON
        const data = await response.json();

        // If no articles are found, display a message
        if (!data.articles || data.articles.length === 0) {
            newsContainer.innerHTML = "<p>No news articles found.</p>";
            return;
        }

        newsContainer.innerHTML = ""; // Clear loading message

        // Display the first 5 news articles
        data.articles.slice(0, 5).forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsItem);
        });

    } catch (error) {
        // Display error message if the API call fails
        newsContainer.innerHTML = `<p>Error fetching news: ${error.message}</p>`;
        console.error("Error fetching news:", error);
    }
}
