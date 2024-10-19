// polls-quiz.js - Handle polls and quizzes functionality

document.getElementById("pollForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const question = document.getElementById("pollQuestion").value;
    const options = Array.from(document.querySelectorAll(".pollOption")).map(option => option.value);

    // Implement poll creation logic here (e.g., API call)
    console.log("Creating poll:", question, options);
});

// Function to display polls
function displayPolls(polls) {
    const pollsContainer = document.getElementById("pollsList");
    pollsContainer.innerHTML = "";

    polls.forEach(poll => {
        const pollElement = document.createElement("div");
        pollElement.className = "poll";
        pollElement.innerHTML = `<h4>${poll.question}</h4><ul>${poll.options.map(option => `<li>${option}</li>`).join('')}</ul>`;
        pollsContainer.appendChild(pollElement);
    });
}
