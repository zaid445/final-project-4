



// Filter products based on category selection
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        let filter = this.getAttribute('data-filter'); // Get selected filter
        document.querySelectorAll('.product').forEach(product => {
            if (filter === 'all' || product.getAttribute('data-category') === filter) {
                product.style.display = 'block'; // Show product if it matches filter
            } else {
                product.style.display = 'none'; // Hide product if it doesn't match filter
            }
        });
    });
});







// Array to store image sets for carousel
const imageSets = [
    // Set of images and titles for the first carousel
    [
        { src: "https://img.sonofatailor.com/images/customizer/product/Black_O_Crew_Regular_NoPocket.jpg", title: "T-Shirt" },
        { src: "https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg", title: "Bags" },
        { src: "https://cdn.khadims.com/image/tr:e-sharpen-01,h-822,w-940,cm-pad_resize/data/khadims/28jan2025/27405210660_1.jpg", title: "Sandal" },
        { src: "https://images-cdn.ubuy.co.in/633b4d0ec453a05ef838979c-damyuan-running-shoes-men-fashion.jpg", title: "Shoes" },
        { src: "https://img.santinicycling.com/us/148200-large_default/active-technical-pants.jpg", title: "pants" }
    ],
    // Set of images and titles for the second carousel
    [
        { src: "pngegg.png", title: "pant" },
        { src: "pngegg (1).png", title: "T--Shirt" },
        { src: "pngegg (2).png", title: "Shoes." },
        { src: "pngegg (3).png", title: "Sandal." },
        { src: "pngegg (4).png", title: "Bags." }
    ]
];

// Index to track which image set is currently being displayed
let currentIndex = 0;

// Function to render images in the carousel
function renderImages() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = ""; // Clear existing images in the carousel
    imageSets[currentIndex].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");
        
        // Apply custom styles for different product types
        let imageStyle = "";
        if (item.title === "T-Shirt") {
            imageStyle = "width: 120px; height: auto;";
        } else if (item.title === "Bags") {
            imageStyle = "width: 120px; height: auto;";
        } else if (item.title === "Sandal") {
            imageStyle = "width: 150px; height: auto;";
        } else if (item.title === "Shoes") {
            imageStyle = "width: 130px; height: auto;";
        } else if (item.title === "pants") {
            imageStyle = "width: 110px; height: auto;";
        }
        
        div.innerHTML = `<img src="${item.src}" alt="${item.title}" style="${imageStyle}"><p>${item.title}</p>`;
        carousel.appendChild(div);
    });
}
// Function to navigate to next set of images
function nextImages() {
    currentIndex = (currentIndex + 1) % imageSets.length; // Move to next set
    renderImages();
}

// Function to navigate to previous set of images
function prevImages() {
    currentIndex = (currentIndex - 1 + imageSets.length) % imageSets.length; // Move to previous set
    renderImages();
}

// Initial render of images
renderImages();



















// AR functionality for Try-On button
document.addEventListener("DOMContentLoaded", function () {
    const tryOnButtons = document.querySelectorAll(".try-on-btn");

    tryOnButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            openARView(imgSrc); // Open AR view with selected image
        });
    });

    function openARView(imgSrc) {
        // Create overlay for AR view
        const overlay = document.createElement("div");
        overlay.classList.add("ar-overlay");
        overlay.innerHTML = `
            <video id="cameraFeed" autoplay></video>
            <img src="${imgSrc}" id="arItem">
            <button class="close-ar">❌</button>
        `;
        document.body.appendChild(overlay); 

        // Access the camera for AR display
        const video = document.getElementById("cameraFeed");
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((err) => console.error("Failed to access camera:", err));

        // Close AR view when the close button is clicked
        document.querySelector(".close-ar").addEventListener("click", function () {
            document.body.removeChild(overlay);
            stream.getTracks().forEach(track => track.stop());
        });
    }
});
