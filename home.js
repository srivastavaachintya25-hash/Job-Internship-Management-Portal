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
// Welcome message on Get Started button

let buttons = document.querySelectorAll(".cta .button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Welcome to Career Portal! Start exploring your career opportunities.");
    });
});

// Category card click effect

let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", function() {
        card.style.transform = "translateY(0)";
    });
});
