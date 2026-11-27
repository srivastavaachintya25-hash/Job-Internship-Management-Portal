
// ==========================================
// CAREER PORTAL - AUTHENTICATION & NAVBAR
// ==========================================

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateNavbar);
} else {
    updateNavbar();
}

// ==========================================
// UPDATE NAVBAR
// ==========================================

function updateNavbar() {

    const navAuth = document.getElementById("navAuth");

    if (!navAuth) return;

    const isLoggedIn = localStorage.getItem("career_logged_in");
    const fullName = localStorage.getItem("career_registered_name");

    // Clear previous content
    navAuth.innerHTML = "";

    // ======================================
    // USER IS LOGGED IN
    // ======================================

    if (isLoggedIn === "true" && fullName) {

        // Welcome text
        const welcome = document.createElement("span");

        welcome.className = "welcome-text";
        welcome.textContent = "Welcome, " + fullName;

        navAuth.appendChild(welcome);

        // Logout button
        const logoutButton = document.createElement("button");

        logoutButton.type = "button";
        logoutButton.className = "logout-button";
        logoutButton.textContent = "Logout";

        logoutButton.addEventListener("click", function () {

            // Remove login session
            localStorage.removeItem("career_logged_in");
            localStorage.removeItem("career_username");

            // Update navbar
            updateNavbar();

            // Go to Home page
            window.location.href = getHomeURL();

        });

        navAuth.appendChild(logoutButton);

    }

    // ======================================
    // USER IS NOT LOGGED IN
    // ======================================

    else {

        const loginButton = document.createElement("button");

        loginButton.type = "button";
        loginButton.className = "login-button";
        loginButton.textContent = "Login";

        loginButton.addEventListener("click", function () {

            const loginURL =
                navAuth.dataset.loginUrl || "../Login/login.html";

            window.location.href = loginURL;

        });

        navAuth.appendChild(loginButton);

    }

}

// ==========================================
// GET HOME PAGE PATH
// ==========================================

function getHomeURL() {

    const path = window.location.pathname;

    if (path.includes("/Home/")) {
        return "home.html";
    }

    return "../Home/home.html";

}
