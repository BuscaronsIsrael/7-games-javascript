// Constants
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
const ballDiameter = 20;

let xDirection = 2;
let yDirection = 2;
let timerId;
let score = 0;

// User position
const userStart = [230, 10];
let currentPosition = userStart;

// Ball position
const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

// Create class Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// Create user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// Create ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

// All my Blocks
const Blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
]

addBlocks();
document.addEventListener('keydown', moveUser)

// Functions
function addBlocks() {
    for (let i = 0; i < Blocks.length; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = Blocks[i].bottomLeft[0] + 'px';
    block.style.bottom = Blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block);
    }
}

function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                drawUser();
            }
            break;

        case 'ArrowRight':
            if (currentPosition[0] < (boardWidth - blockWidth)) {
                currentPosition[0] += 10;
                drawUser();
            }
            break;    
    }
}

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
}

timerId = setInterval(moveBall, 30);

// Check for collisions
function checkForCollisions() {
    // chack for block collisions
    for (let i = 0; i < Blocks.length; i++) {
        if (
            ((ballCurrentPosition[0] + ballDiameter) > Blocks[i].bottomLeft[0] && ballCurrentPosition[0] < Blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > Blocks[i].bottomLeft[1] && ballCurrentPosition[1] < Blocks[i].topLeft[1])
        ) 
       {
        const allBlocks = Array.from(document.querySelectorAll('.block'));
        allBlocks[i].classList.remove('block');
        Blocks.splice(i, 1);
        changeDirection();
        score++;
        scoreDisplay.innerHTML = score;
        
        // check for win
        if (Blocks.length === 0) {
            scoreDisplay.innerHTML = 'You win';
            clearInterval(timerId);
            document.removeEventListener('keydown', moveUser);
        }
    }
    }

    // check for user collisions
    if (
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
    ) {
        changeDirection();
    }
    
    // check for wall collisions
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
       (ballCurrentPosition[1] >= (boardHeight - ballDiameter)) ||
       (ballCurrentPosition[0] <= 0)) {
        changeDirection();
    }
    
    // check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId);
        scoreDisplay.innerHTML = 'You lost';
        document.removeEventListener('keydown', moveUser)
    }
}

function changeDirection()  {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2; 
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2;
        return
    }
}