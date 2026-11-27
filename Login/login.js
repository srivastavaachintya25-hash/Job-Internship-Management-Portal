
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("career_registered_email");
    const savedPassword = localStorage.getItem("career_registered_password");

    const message = document.getElementById("message");

    if (email === savedEmail && password === savedPassword) {

        const username = email.split("@")[0];

        localStorage.setItem("career_username", username);
        localStorage.setItem("career_logged_in", "true");

        message.style.color = "green";
        message.textContent = "Login successful!";

        setTimeout(function() {
            window.location.href = "../Home/home.html";
        }, 1000);

    } else {

        message.style.color = "red";
        message.textContent = "Invalid email or password!";

    }

});
