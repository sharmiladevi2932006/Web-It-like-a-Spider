// discussions.js - Handle discussion forum functionality

document.getElementById("discussionForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const topic = document.getElementById("discussionTopic").value;

    // Implement discussion creation logic here (e.g., API call)
    console.log("Creating discussion:", topic);
});

// Function to display discussions
function displayDiscussions(discussions) {
    const discussionsContainer = document.getElementById("discussionsList");
    discussionsContainer.innerHTML = "";

    discussions.forEach(discussion => {
        const discussionElement = document.createElement("div");
        discussionElement.className = "discussion";
        discussionElement.innerText = discussion.topic;
        discussionsContainer.appendChild(discussionElement);
    });
}.
