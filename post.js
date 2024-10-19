// post.js - Handle post creation and viewing

document.getElementById("postForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const imageFile = document.getElementById("postImage").files[0]; // Get the uploaded file

    // Handle image upload if needed
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log("Creating post:", title, content, e.target.result);
            displayPosts([{ title, content, image: e.target.result }]);
        }
        reader.readAsDataURL(imageFile); // Read the image file as Data URL
    } else {
        console.log("Creating post:", title, content);
        displayPosts([{ title, content }]);
    }
});

// Function to display existing posts
function displayPosts(posts) {
    const postsContainer = document.getElementById("existingPosts");
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        if (post.image) {
            postElement.innerHTML += `<img src="${post.image}" alt="Post Image" style="max-width: 100%; height: auto; border-radius: 4px;">`;
        }
        postsContainer.appendChild(postElement);
    });
}
