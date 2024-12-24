document.addEventListener("DOMContentLoaded", function () {
    const namespace = "bbetperf-com"; // Namespace for your website
    const projectKey = "portfolio_carplay"; // Unique key for this page
    const apiUrl = `https://api.countapi.xyz/hit/${namespace}/${projectKey}`; // Endpoint for CountAPI

    // Fetch and update the view count
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update the view count in the HTML
            const viewCountElement = document.getElementById("view-count");
            if (viewCountElement) {
                viewCountElement.textContent = data.value;
            } else {
                console.error("View count element not found in the DOM.");
            }
        })
        .catch(error => {
            console.error("Failed to fetch or update the view count:", error);
            const viewCountElement = document.getElementById("view-count");
            if (viewCountElement) {
                viewCountElement.textContent = "Error";
            }
        });
});