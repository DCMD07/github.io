/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: Febuary 21, 2025
Date Ended: Febuary 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: news.js
Description: Fetches and displays real-time volunteer-related news using News API.
*/

// Ensure the DOM is loaded before fetching news
document.addEventListener("DOMContentLoaded", () => {
    fetchNews();
});

// Function to fetch and display news articles
async function fetchNews() {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "<p class='text-center'>Fetching latest news...</p>";

    const apiKey = "ffe40c27488c48b9b23c667194158fef"; // Your API Key
    const url = `https://newsapi.org/v2/everything?q=volunteer&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok" && data.articles.length > 0) {
            newsContainer.innerHTML = ""; // Clear the loading text

// Display the first 5 news articles
            data.articles.slice(0, 5).forEach(article => {
                const newsItem = document.createElement("div");
                newsItem.classList.add("col-md-6", "mb-4");

                newsItem.innerHTML = `
<div class="card">
    <img src="${article.urlToImage || 'images/news-placeholder.jpg'}" class="card-img-top" alt="News Image">
    <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
    </div>
</div>
`;

                newsContainer.appendChild(newsItem);
            });
        } else {
            newsContainer.innerHTML = "<p class='text-center'>No news articles found.</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        newsContainer.innerHTML = "<p class='text-center text-danger'>Failed to load news. Please try again later.</p>";
    }
}
