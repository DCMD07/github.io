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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Main function to fetch and display statistics charts
export function renderStatistics() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // ✅ Fetch statistics from the JSON file
            const response = yield fetch("stats.json");
            const data = yield response.json();
            // Visitor Chart DOM reference
            const visitorCtx = document.getElementById("visitorChart");
            const deviceCtx = document.getElementById("deviceChart");
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
        }
        catch (error) {
            console.error("Failed to load statistics:", error);
        }
    });
}
