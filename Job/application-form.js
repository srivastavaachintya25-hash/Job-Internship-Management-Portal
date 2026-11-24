const form = document.getElementById("applicationForm");
const message = document.getElementById("message");

// Get selected job or internship from URL

const params = new URLSearchParams(window.location.search);
const selectedRole = params.get("role");

if (selectedRole) {
    document.getElementById("position").value = selectedRole;
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const application = {
        id: Date.now(),

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        education: document.getElementById("education").value.trim(),

        skills: document.getElementById("skills").value.trim(),

        position: document.getElementById("position").value.trim(),

        resume: document.getElementById("resume").value.trim(),

        status: "Applied",

        date: new Date().toLocaleDateString()
    };

    let applications =
        JSON.parse(localStorage.getItem("careerApplications")) || [];

    applications.push(application);

    localStorage.setItem(
        "careerApplications",
        JSON.stringify(applications)
    );

    message.textContent =
        "Application submitted successfully!";

    form.reset();
});
