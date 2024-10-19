// profile.js - Handle user profile management

document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("profileName").value;
    const bio = document.getElementById("profileBio").value;

    // Implement profile update logic here (e.g., API call)
    console.log("Updating profile:", name, bio);
});

// Function to display user profile information
function displayProfile(profile) {
    document.getElementById("profileInfo").innerText = `Name: ${profile.name}, Bio: ${profile.bio}`;
}
