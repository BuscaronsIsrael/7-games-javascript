// Select elements
const scoreDisplay = document.getElementById('score');
const timeLeftDisplay = document.getElementById('time-left');
const squares = document.querySelectorAll('.square'); 
const mole = document.querySelector('.mole');
const start = document.getElementById('start');


// Variables
let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let countDownTimerId;


// Start game button
start.addEventListener('click', moveMole);

// Score a point
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            scoreDisplay.innerHTML = result;
            hitPosition = null;
        }
    })
})


// Functions
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

function moveMole() {
    timerId = setInterval(randomSquare, 500);
    countDownTimerId = setInterval(countDown, 1000)
}

function countDown() {
    currentTime--;
    timeLeftDisplay.innerHTML = currentTime;

    if (currentTime == 0) {
         clearInterval(countDownTimerId);
         clearInterval(timerId);
         alert('GAME OVER! Your final score is ' + result);
         result = 0;
         scoreDisplay.innerHTML = result;
         currentTime = 10;
    }
}

