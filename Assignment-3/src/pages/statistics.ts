/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: March 21, 2025
Date Ended: March 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: statistics.ts
Description: Fetches visitor and device statistics via AJAX and renders them using Chart.js.
*/



// Main function to fetch and display statistics charts
export async function renderStatistics(): Promise<void> {
    try {
        // ✅ Fetch statistics from the JSON file
        const response = await fetch("stats.json");

        const data = await response.json();

        // Visitor Chart DOM reference
        const visitorCtx = document.getElementById("visitorChart") as HTMLCanvasElement;
        const deviceCtx = document.getElementById("deviceChart") as HTMLCanvasElement;

        // ✅ Render Line Chart for Monthly Visitors
        if (visitorCtx) {
            new Chart(visitorCtx, {
                type: "line",
                data: {
                    labels: Object.keys(data.visitors),
                    datasets: [{
                        label: "Monthly Visitors",
                        data: Object.values(data.visitors),
                        borderColor: "#007bff",
                        backgroundColor: "rgba(0, 123, 255, 0.2)",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }




        // ✅ Render Doughnut Chart for Device Usage
        if (deviceCtx) {
            new Chart(deviceCtx, {
                type: "doughnut",
                data: {
                    labels: Object.keys(data.deviceUsage),
                    datasets: [{
                        label: "Device Usage",
                        data: Object.values(data.deviceUsage),
                        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }

    } catch (error) {
        console.error("Failed to load statistics:", error);
    }
}
