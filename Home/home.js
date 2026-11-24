
const progressContainer = document.getElementById("homeProgressContainer");
const noApplications = document.getElementById("noApplications");

const progressValues = {
    "Applied": 20,
    "Under Review": 40,
    "Shortlisted": 60,
    "Interview": 80,
    "Final Result": 100
};

function showApplicationProgress() {

    if (!progressContainer) return;

    const applications = JSON.parse(
        localStorage.getItem("careerApplications") || "[]"
    );

    progressContainer.innerHTML = "";

    if (applications.length === 0) {
        noApplications.style.display = "block";
        return;
    }

    noApplications.style.display = "none";

    applications.forEach(function(app) {

        let progress = progressValues[app.status] || 0;

        let card = document.createElement("div");
        card.className = "progress-card";

        let heading = document.createElement("h3");
        heading.textContent = app.position;

        let applicant = document.createElement("p");
        applicant.textContent = "Applicant: " + app.name;

        let status = document.createElement("p");
        status.textContent = "Status: " + app.status;

        let track = document.createElement("div");
        track.className = "progress-track";

        let fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = progress + "%";

        let info = document.createElement("div");
        info.className = "progress-info";

        let percentage = document.createElement("span");
        percentage.textContent = progress + "% Completed";

        let stage = document.createElement("span");
        stage.textContent = app.status;

        track.appendChild(fill);
        info.appendChild(percentage);
        info.appendChild(stage);

        card.appendChild(heading);
        card.appendChild(applicant);
        card.appendChild(status);
        card.appendChild(track);
        card.appendChild(info);

        progressContainer.appendChild(card);
    });
}

showApplicationProgress();

window.addEventListener("focus", showApplicationProgress);
