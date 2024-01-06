document.addEventListener("DOMContentLoaded", function () {
    // Function to display images in the specified container
    function displayImages(folder, containerId) {
        const container = document.getElementById(containerId);

        fetch(`./${folder}`)
            .then(response => response.json())
            .then(files => {
                files.forEach(file => {
                    const imgElement = document.createElement("img");
                    imgElement.src = `./${folder}/${file.name}`;
                    imgElement.classList.add("image-box");
                    container.appendChild(imgElement);
                });
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    // Display vouches
    displayImages("vouches", "vouches-container");

    // Display proof of payment
    displayImages("proof", "proof-container");
});
