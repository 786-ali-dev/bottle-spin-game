const bottle = document.getElementById('bottle');
const spinButton = document.getElementById('spinButton');
const message = document.getElementById('message');

let isSpinning = false;

spinButton.addEventListener('click', () => {
    if (isSpinning) return;

    isSpinning = true;
    spinButton.disabled = true;
    message.textContent = 'Spinning...';

    // Generate a random degree for a full spin + landing
    // Ensure it spins at least a few times (e.g., 5-10 full rotations)
    const minRotations = 5;
    const maxRotations = 10;
    const randomRotations = Math.floor(Math.random() * (maxRotations - minRotations + 1)) + minRotations;
    
    // Random angle to land on (0-359 degrees)
    const landingAngle = Math.floor(Math.random() * 360);

    const totalRotation = (randomRotations * 360) + landingAngle;

    bottle.style.transition = 'transform 4s ease-out';
    bottle.style.transform = `rotate(${totalRotation}deg)`;

    // After the spin animation completes
    setTimeout(() => {
        isSpinning = false;
        spinButton.disabled = false;
        message.textContent = `The bottle landed at approximately ${landingAngle} degrees!`;
        
        // Reset transition for next spin (optional, but good practice)
        // Without this, subsequent spins might instantly jump to a new position if not enough rotation is added
        // For a simple game, keeping the transform state might be fine.
        // If you want it to reset visually, you might need to manage the initial rotation.
    }, 4000); // Matches the CSS transition duration
});