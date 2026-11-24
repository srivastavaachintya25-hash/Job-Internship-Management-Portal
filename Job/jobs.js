
let searchBox = document.getElementById("jobSearch");
let jobCards = document.querySelectorAll(".job-card");

if (searchBox) {
    searchBox.addEventListener("input", function () {
        let searchText = searchBox.value.toLowerCase();

        jobCards.forEach(function (job) {
            let jobText = job.textContent.toLowerCase();

            if (jobText.includes(searchText)) {
                job.style.display = "";
            } else {
                job.style.display = "none";
            }
        });
    });
}

let applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent.trim() === "Applied") {
            alert("You have already applied for this job!");
            return;
        }

        button.textContent = "Applied";
        button.style.backgroundColor = "green";
        button.style.color = "white";

        alert("Application submitted successfully!");
    });
});


jobs.html mein existing job cards ko is tarah identify karna hai:
<input type="text" id="jobSearch" placeholder="Search jobs">

<div class="job-card">
    <h3>Software Developer</h3>
    <p>Company: ABC Technologies</p>
    <p>Location: Noida</p>
    <button class="apply-btn">Apply Now</button>
</div>

<div class="job-card">
    <h3>Web Developer</h3>
    <p>Company: XYZ Solutions</p>
    <p>Location: Delhi</p>
    <button class="apply-btn">Apply Now</button>
</div>

<script src="jobs.js"></script>