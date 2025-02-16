"use strict";

(function () {
    if (!sessionStorage.getItem("user")) {
        console.warn("[AUTHGUARD] Unauthorized access detected.");

        // Prevent redirect loop if already on the login page
        if (window.location.pathname !== "/login.html") {
            console.warn("[AUTHGUARD] Redirecting to login page...");
            location.href = "login.html";
        }
    }
})();
