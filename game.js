// create canvas element
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

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
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // left arrow
        player.x -= player.speed;
    } else if (event.keyCode === 38) { // up arrow
        player.y -= player.speed;
    } else if (event.keyCode === 39) { // right arrow
        player.x += player.speed;
    } else if (event.keyCode === 40) { // down arrow
        player.y += player.speed;
    }
});

// check for collisions between player and enemy
function checkCollision() {
    var playerLeft = player.x;
    var playerRight = player.x + player.width;
    var playerTop = player.y;
    var playerBottom = player.y + player.height;
    var enemyLeft = enemy.x;
    var enemyRight = enemy.x + enemy.width;
    var enemyTop = enemy.y;
    var enemyBottom = enemy.y + enemy.height;
    if (playerRight > enemyLeft && playerLeft < enemyRight && playerBottom > enemyTop && playerTop < enemyBottom) {
        // there is a collision, 
    }
}

// main game loop
function loop() {
    draw();
    checkCollision();
    requestAnimationFrame(loop);
}

// start game loop
loop();
