// search-filter.js - Handle searching and filtering of posts

document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchInput").value;

    // Implement search logic here (e.g., filter posts array and display results)
    console.log("Searching for:", searchTerm);
});
