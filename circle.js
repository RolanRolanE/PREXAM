let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = 200; // Initial position
let y = 200; 
let radius = 200; 
let x_velocity = 10; // X Movement speed
let y_velocity = 10; // Y Movement speed

let ballColor = "pink";

let c = canvas.getContext("2d");

function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

function animate() {
    // Clear the canvas every frame
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Create a circle
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = ballColor;
    c.strokeStyle = ballColor;
    c.fill();
    c.stroke();

    // Check for collision with left/right walls
    if (x + radius > canvas.width || x - radius < 0) {
        x_velocity = -x_velocity; // Reverse X direction
        let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ballColor = getRandomColor();
    }

    // Check for collision with top/bottom walls
    if (y + radius > canvas.height || y - radius < 0) {
        y_velocity = -y_velocity; // Reverse Y direction
        ballColor = getRandomColor();
    }

    // Move the circle
    x += x_velocity;
    y += y_velocity;

    // Loop the animation
    requestAnimationFrame(animate);
}

animate(); // Start the animation