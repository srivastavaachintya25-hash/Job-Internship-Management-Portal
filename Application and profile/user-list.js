const table = document.getElementById("userTable");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const emptyMessage = document.getElementById("emptyMessage");

function getApplications() {
    return JSON.parse(localStorage.getItem("careerApplications")) || [];
}

function updateStatus(id, newStatus) {
    let applications = getApplications();

    applications = applications.map(function(app) {
        if (app.id === id) {
            app.status = newStatus;
        }

        return app;
    });

    localStorage.setItem(
        "careerApplications",
        JSON.stringify(applications)
    );

    displayApplications();
}

function displayApplications() {
    const applications = getApplications();

    const search = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    const filtered = applications.filter(function(app) {
        const matchesSearch =
            app.name.toLowerCase().includes(search) ||
            app.email.toLowerCase().includes(search) ||
            app.position.toLowerCase().includes(search);

        const matchesStatus =
            selectedStatus === "all" ||
            app.status === selectedStatus;

        return matchesSearch && matchesStatus;
    });

    table.innerHTML = "";
    emptyMessage.textContent =
        filtered.length === 0 ? "No applications found." : "";

    filtered.forEach(function(app) {
        const row = document.createElement("tr");

        const values = [
            app.name,
            app.email,
            app.position,
            app.date,
            app.status
        ];

        values.forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value || "";
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");
        const select = document.createElement("select");

        const statuses = [
            "Applied",
            "Under Review",
            "Shortlisted",
            "Interview",
            "Final Result"
        ];

        statuses.forEach(function(status) {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;

            if (app.status === status) {
                option.selected = true;
            }

            select.appendChild(option);
        });

        select.addEventListener("change", function() {
            updateStatus(app.id, select.value);
        });

        actionCell.appendChild(select);
        row.appendChild(actionCell);

        table.appendChild(row);
    });
}

searchInput.addEventListener("input", displayApplications);
statusFilter.addEventListener("change", displayApplications);

displayApplications();
