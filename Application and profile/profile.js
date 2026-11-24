
const inputs = document.querySelectorAll(
    ".profile-card input, .profile-card select, .profile-card textarea"
);

const editButton = document.querySelector(".edit-button");
const saveButton = document.querySelector(".save-button");

// Disable fields initially
inputs.forEach(function(input) {
    input.disabled = true;
});

// EDIT PROFILE BUTTON

editButton.addEventListener("click", function() {

    inputs.forEach(function(input) {
        input.disabled = false;
    });

    alert("You can now edit your profile!");
});

// SAVE PROFILE BUTTON

saveButton.addEventListener("click", function() {

    const profile = [];

    inputs.forEach(function(input) {
        profile.push(input.value);
    });

    localStorage.setItem(
        "userProfile",
        JSON.stringify(profile)
    );

    inputs.forEach(function(input) {
        input.disabled = true;
    });

    alert("Profile saved successfully!");
});

// LOAD SAVED PROFILE

const savedProfile = JSON.parse(
    localStorage.getItem("userProfile")
);

if (savedProfile) {

    inputs.forEach(function(input, index) {
        input.value = savedProfile[index] || "";
    });
}
