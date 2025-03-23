/*
Course: INFT 2202-10
Group: 5
Instructor: Sergio Santilli
Date Started: March 21, 2025
Date Ended: March 23, 2025
Names: Mohammed Aasim, Ashar Asad
File: router.ts
Description: Manages SPA-style navigation using hash-based routing and AJAX to load content.
*/

export class Router {
    private routes: { [key: string]: string };
    private viewContainer: HTMLElement;

    constructor(viewContainerId: string) {
        this.routes = {};
        const container = document.getElementById(viewContainerId);
        if (!container) throw new Error("View container not found");
        this.viewContainer = container;

        // Load route on hash change and initial load
        window.addEventListener("hashchange", () => this.loadRoute());
        window.addEventListener("DOMContentLoaded", () => this.loadRoute());
    }

    // Register new route
    public registerRoute(path: string, viewPath: string): void {
        this.routes[path] = viewPath;
    }

    // Load route content via AJAX
    private async loadRoute(): Promise<void> {
        const path = location.hash.replace("#", "") || "home";
        const viewFile = this.routes[path];

        if (!viewFile) {
            this.viewContainer.innerHTML = "<h2>Page not found</h2>";
            return;
        }

        try {
            const response = await fetch(viewFile);
            const content = await response.text();
            this.viewContainer.innerHTML = content;
        } catch (error) {
            console.error("Failed to load view:", error);
            this.viewContainer.innerHTML = "<h2>Error loading page</h2>";
        }
    }
}
