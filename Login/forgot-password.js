
const forgotForm = document.getElementById("forgotForm");

forgotForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("forgotEmail").value.trim();
    const savedEmail = localStorage.getItem("career_registered_email");

    const message = document.getElementById("forgotMessage");

    if (email === savedEmail && savedEmail !== null) {

        message.style.color = "green";
        message.textContent =
            "Email verified! Password reset functionality needs to be connected.";

    } else {

        message.style.color = "red";
        message.textContent =
            "This email is not registered with Career Portal.";

    }

});
