
< !--ScrollMagic and GSAP Animation-- >
    // effect-1
    $(function () {
        // Define GSAP timeline for animations
        var wipeAnimation = gsap.timeline({ repeat: -1, yoyo: true })  // This makes the animation loop infinitely
            .to("#slideContainer", { duration: 1.5, z: -150 }) // Move back in 3D space
            .to("#slideContainer", { duration: 1, x: "-25%" }) // Move to second panel
            .to("#slideContainer", { duration: 0.5, z: 0 })    // Reset 3D space
            .to("#slideContainer", { duration: 0.5, z: -150, delay: 1 })
            .to("#slideContainer", { duration: 1, x: "-50%" }) // Move to third panel
            .to("#slideContainer", { duration: 0.5, z: 0 })
            .to("#slideContainer", { duration: 0.5, z: -150, delay: 1 })
            .to("#slideContainer", { duration: 1, x: "-75%" }) // Move to fourth panel
            .to("#slideContainer", { duration: 0.5, z: 0 });

        // Create ScrollMagic Scene
        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%"  // Duration of the effect, 5 times the height of the viewport
        })
            .setPin("#pinContainer") // Pin the container during animation
            .setTween(wipeAnimation) // Link the animation
            .addIndicators() // Optional: Adds debug indicators
            .addTo(controller); // Add scene to controller
    });

const carousel = document.getElementById("default-carousel");
const items = carousel.querySelectorAll('[data-carousel-item]');

let currentIndex = 0; // Start from the first image

// Function to show the active carousel item
function showItem(index) {
    // Hide all items
    items.forEach(item => item.classList.add('hidden'));

    // Show the item at the current index
    items[index].classList.remove('hidden');
}

// Initialize by showing the first item
showItem(currentIndex);

// Get the next and previous buttons
const nextButton = carousel.querySelector('[data-carousel-next]');
const prevButton = carousel.querySelector('[data-carousel-prev]');

// Handle the next button click
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;  // Move to the next item
    showItem(currentIndex);  // Update the displayed item
});

// Handle the previous button click
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;  // Move to the previous item
    showItem(currentIndex);  // Update the displayed item
});
