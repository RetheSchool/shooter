// get canvas element
var canvas = document.getElementById("game");

// set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// get canvas context
var ctx = canvas.getContext("2d");

// create player object
var player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 20,
    height: 20,
    speed: 5,
    color: "red"
};

// create enemy object
var enemy = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: 20,
    height: 20,
    color: "blue"
};

// draw player and enemy on canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = enemy.color;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
}

// move player based on keyboard input
document.
