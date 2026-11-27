
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    if (email.indexOf("@") === -1) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    // Save account details in browser storage
    localStorage.setItem("career_registered_name", fullName);
    localStorage.setItem("career_registered_email", email);
    localStorage.setItem("career_registered_password", password);

    // Get username before @
    const username = email.split("@")[0];

    localStorage.setItem("career_username", username);
    localStorage.setItem("career_logged_in", "true");

    message.style.color = "green";
    message.textContent = "Account created successfully! Redirecting...";

    registerForm.reset();

    setTimeout(function() {
        window.location.href = "../Home/home.html";
    }, 1500);

});
