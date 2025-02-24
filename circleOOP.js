// Set canvas width and height
let canva = document.getElementById("canvas");
canva.width = window.innerWidth;
canva.height = window.innerHeight;
let c = canva.getContext("2d");

// Constructor function for creating a circle
function Create_circle(x, y, radius, x_velocity, y_velocity, randomColor) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.x_velocity = x_velocity;
    this.y_velocity = y_velocity;
    this.randomColor = randomColor;

    this.circle = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.randomColor; 
        c.fillStyle = this.randomColor; // Fill inside the circle
        c.fill(); // Apply the fill
        c.stroke();
    };

    this.update = function () {
        // Bounce when hitting edges
        if (this.x + this.radius > canva.width || this.x - this.radius < 0) {
            this.x_velocity = -this.x_velocity;
        }
        if (this.y + this.radius > canva.height || this.y - this.radius < 0) {
            this.y_velocity = -this.y_velocity;
        }

        // Update position
        this.x += this.x_velocity;
        this.y += this.y_velocity;

    };
}

// Create and draw a moving circle with random initial position and velocity

const array_circle = [];

for (let index = 0; index < 100; index++) {
    let radius = 30;
    let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    let x = Math.random() * ( innerWidth - radius * 2) + radius;
    let y = Math.random() * ( innerHeight - radius * 2) + radius;
    let x_velocity = (Math.random() - 0.5) * 5; // Smaller velocity for smoother movement
    let y_velocity = (Math.random() - 0.5) * 5;
    array_circle.push(new Create_circle(x, y, radius, x_velocity, y_velocity, randomColor))
}

// let moving_circle = new Create_circle(x, y, radius, x_velocity, y_velocity);

function animate() {
    c.clearRect(0, 0, canva.width, canva.height); // Clear canvas

    for (let index = 0; index < array_circle.length; index++) {
        array_circle[index].update();
        array_circle[index].circle();
    }
    requestAnimationFrame(animate); // Loop animation
}

// Start the animation
animate();
