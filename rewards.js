// rewards.js - Handle rewards system functionality

document.getElementById("rewardForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const rewardDescription = document.getElementById("rewardDescription").value;

    // Implement reward creation logic here (e.g., API call)
    console.log("Creating reward:", rewardDescription);
});

// Function to display rewards
function displayRewards(rewards) {
    const rewardsContainer = document.getElementById("rewardsList");
    rewardsContainer.innerHTML = "";

    rewards.forEach(reward => {
        const rewardElement = document.createElement("div");
        rewardElement.className = "reward";
        rewardElement.innerText = reward.description;
        rewardsContainer.appendChild(rewardElement);
    });
}
