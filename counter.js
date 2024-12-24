document.addEventListener("DOMContentLoaded", () => {
    // Use the URL path as the unique key for each project
    const namespace = "bbetperf-com"; // Namespace for your website
    const projectKey = window.location.pathname.replace(/\//g, "-"); // Convert URL path to a unique key

    // Fetch and increment the view count
    fetch(`https://api.countapi.xyz/hit/${namespace}${projectKey}`)
        .then((response) => response.json())
        .then((data) => {
            // Update the view count inside the existing HTML structure
            const viewCountElement = document.getElementById("view-count");
            if (viewCountElement) {
                viewCountElement.textContent = data.value;
            } else {
                console.error("View count element not found!");
            }
        })
        .catch((error) => {
            console.error("Error updating view count:", error);
            const viewCountElement = document.getElementById("view-count");
            if (viewCountElement) {
                viewCountElement.textContent = "Error";
            }
        });
});