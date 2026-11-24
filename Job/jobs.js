
const searchBox = document.getElementById("jobSearch");
const jobCards = document.querySelectorAll(".job-card");

// SEARCH JOBS

if (searchBox) {

    searchBox.addEventListener("input", function() {

        const searchText = searchBox.value.toLowerCase();

        jobCards.forEach(function(job) {

            const jobText = job.textContent.toLowerCase();

            if (jobText.includes(searchText)) {
                job.style.display = "";
            } else {
                job.style.display = "none";
            }

        });

    });

}

// APPLY BUTTONS

const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        // Allow application links to open the form
        if (button.tagName === "A") {
            return;
        }

        if (button.textContent.trim() === "Applied") {
            alert("You have already applied!");
            return;
        }

        button.textContent = "Applied";
        button.style.backgroundColor = "#15803d";
        button.style.color = "white";

        alert("Application submitted successfully!");

    });

});
