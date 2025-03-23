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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Router {
    constructor(viewContainerId) {
        this.routes = {};
        const container = document.getElementById(viewContainerId);
        if (!container)
            throw new Error("View container not found");
        this.viewContainer = container;
        // Load route on hash change and initial load
        window.addEventListener("hashchange", () => this.loadRoute());
        window.addEventListener("DOMContentLoaded", () => this.loadRoute());
    }
    // Register new route
    registerRoute(path, viewPath) {
        this.routes[path] = viewPath;
    }
    // Load route content via AJAX
    loadRoute() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = location.hash.replace("#", "") || "home";
            const viewFile = this.routes[path];
            if (!viewFile) {
                this.viewContainer.innerHTML = "<h2>Page not found</h2>";
                return;
            }
            try {
                const response = yield fetch(viewFile);
                const content = yield response.text();
                this.viewContainer.innerHTML = content;
            }
            catch (error) {
                console.error("Failed to load view:", error);
                this.viewContainer.innerHTML = "<h2>Error loading page</h2>";
            }
        });
    }
}
