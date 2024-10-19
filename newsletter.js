// newsletter.js - Handle newsletter subscription

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("newsletterEmail").value;

    // Implement newsletter subscription logic here (e.g., API call)
    console.log("Subscribing to newsletter:", email);
});
