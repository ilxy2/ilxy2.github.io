// Function to randomize the heart positions and animations
function randomizeHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomDelay = Math.random() * 5; // Delay between animations
        const randomDuration = Math.random() * 10 + 10; // Vary animation speed

        heart.style.left = `${randomX}px`;
        heart.style.animationDelay = `${randomDelay}s`;
        heart.style.animationDuration = `${randomDuration}s`;
    });
}

// Run the randomize function when the page loads
window.onload = randomizeHearts;