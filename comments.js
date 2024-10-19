// comments.js - Handle comments functionality

document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const comment = document.getElementById("commentInput").value;

    // Implement comment logic here (e.g., add comment to post)
    console.log("Adding comment:", comment);
});

// Function to display comments
function displayComments(comments) {
    const commentsSection = document.getElementById("commentsSection");
    commentsSection.innerHTML = "";

    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerText = comment;
        commentsSection.appendChild(commentElement);
    });
}
