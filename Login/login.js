
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Demo login credentials
    if (email === "student@gmail.com" &&
        password === "123456") {

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

// Forgot password
document.getElementById("forgotPassword")
    .addEventListener("click", function(event) {
        event.preventDefault();
        alert("Please contact the administrator to reset your password.");
    });
