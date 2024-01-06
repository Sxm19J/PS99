document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and display images
    function displayImages(folder, containerId) {
        const container = document.getElementById(containerId);

        fetchImages(folder)
            .then(images => {
                images.forEach(image => {
                    const imgElement = document.createElement("img");
                    imgElement.src = image;
                    imgElement.classList.add("image-box");
                    container.appendChild(imgElement);
                });
            });
    }

    // Function to fetch images from the specified folder
    async function fetchImages(folder) {
        const response = await fetch(`./${folder}`);
        const files = await response.json();
        return files.map(file => `./${folder}/${file.name}`);
    }

    // Display vouches
    displayImages("vouches", "vouches-container");

    // Display proof of payment
    displayImages("proof", "proof-container");
});
