
const internships = [
    {
        id: 1,
        title: "Data Science Intern",
        company: "DataLabs",
        category: "data",
        duration: "3 Months",
        skills: "Python, Machine Learning",
        mode: "Remote"
    },
    {
        id: 2,
        title: "Web Development Intern",
        company: "WebTech",
        category: "web",
        duration: "2 Months",
        skills: "HTML, CSS, JavaScript",
        mode: "Hybrid"
    },
    {
        id: 3,
        title: "Cloud Intern",
        company: "CloudWorks",
        category: "cloud",
        duration: "6 Months",
        skills: "Cloud Basics, Linux",
        mode: "On-site"
    },
    {
        id: 4,
        title: "Frontend Developer Intern",
        company: "CodeStudio",
        category: "web",
        duration: "3 Months",
        skills: "HTML, CSS, JavaScript",
        mode: "Remote"
    },
    {
        id: 5,
        title: "Machine Learning Intern",
        company: "AI Solutions",
        category: "data",
        duration: "4 Months",
        skills: "Python, ML, SQL",
        mode: "Hybrid"
    }
];

const container = document.getElementById("internshipContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayInternships(list) {

    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No internships found.</p>";
        return;
    }

    list.forEach(function(item) {

        const card = document.createElement("div");
        card.className = "internship";

        const title = document.createElement("h2");
        title.textContent = item.title;

        const company = document.createElement("p");
        company.textContent = "Company: " + item.company;

        const duration = document.createElement("p");
        duration.textContent = "Duration: " + item.duration;

        const skills = document.createElement("p");
        skills.textContent = "Skills: " + item.skills;

        const mode = document.createElement("p");
        mode.textContent = "Mode: " + item.mode;

        const applyLink = document.createElement("a");
        applyLink.className = "button";
        applyLink.textContent = "Apply Now";

        applyLink.href =
            "../Job/application-form.html?role=" +
            encodeURIComponent(item.title);

        card.append(
            title,
            company,
            duration,
            skills,
            mode,
            applyLink
        );

        container.appendChild(card);
    });
}

function filterInternships() {

    const search = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = internships.filter(function(item) {

        const matchesSearch =
            item.title.toLowerCase().includes(search) ||
            item.company.toLowerCase().includes(search) ||
            item.skills.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" || item.category === category;

        return matchesSearch && matchesCategory;
    });

    displayInternships(filtered);
}

searchInput.addEventListener("input", filterInternships);
categoryFilter.addEventListener("change", filterInternships);

displayInternships(internships);
