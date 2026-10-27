let featuredJobs = document.querySelectorAll(".featured-job");
let jobCount = document.getElementById("jobCount");

if (jobCount) {
    jobCount.textContent = featuredJobs.length;
}

let welcomeButton = document.getElementById("welcomeBtn");

if (welcomeButton) {
    welcomeButton.addEventListener("click", function () {
        alert("Welcome to the Job & Internship Management Portal!");
    });
}
