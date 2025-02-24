

let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let c = canvas.getContext('2d');


// c.fillReact(x, y, wdth, height)
// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(100, 100, 100, 100); // square

// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(250, 250, 100, 100); // square

// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(400, 400, 100, 100); // square


//line
// c.beginPath();
// c.moveTo(50, 300); // c.moveTo(x, y); start
// c.lineTo(300, 100); //                end

// c.moveTo(50, 300); // c.moveTo(x, y);
// c.lineTo(300, 200);

// c.moveTo(50, 300); // c.moveTo(x, y);
// c.lineTo(300, 300);


// c.moveTo(50, 300); // c.moveTo(x, y);
// c.lineTo(300, 400);

// c.strokeStyle = "#fa34a3"; // add color to line
// c.stroke(); // to draw the line we created

// Arc / Circle
// c.arc(x, y, raduis,)
// c.beginPath();
// c.arc(500, 600, 30, 0, Math.PI * 2, false);
// c.stroke();



// for (let index = 0; index < 200; index++) {
//     // Generate random color
//     let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     c.beginPath();
//     c.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = randomColor; 
//     c.fillStyle = randomColor; // Fill inside the circle
//     c.fill(); // Apply the fill
//     c.stroke();

// }
let x = 200; // Initial position
let y = 100;
let xvelocity = 25; // Speed (fixed name)
let yvelocity = 25; // Fixed name

function animate() {

    c.clearRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();

    // **Bounce back when hitting edges**
    if (x + 30 > canvas.width || x - 30 < 0) {
        xvelocity = -xvelocity; // Reverse direction
    }

    if (y + 30 > canvas.height || y - 30 < 0) {
        yvelocity = -yvelocity; // Reverse direction
    }

    x += xvelocity; // Move ball horizontally
    y += yvelocity; // Move ball vertically

    c.fillStyle = "pink"; 
    c.strokeStyle = "pink"; 
    c.fill(); // Apply the fill

    requestAnimationFrame(animate);
}

animate();


// ✅ Clear canvas every 1 second (setInterval should be outside `animate`)
// setInterval(() => {
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     x = 200
// }, 3000);



// animate();