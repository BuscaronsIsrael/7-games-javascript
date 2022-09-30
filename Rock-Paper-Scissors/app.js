// Elements selection
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");

// Buttons selection 
const possibleChoices = document.querySelectorAll("button");


// Variables
let computerChoice;
let userChoice;

// Display user choice, generate random computer choice, display computer choice
possibleChoices.forEach(choice => choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getRandomChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    checkResult();
}));

// Check result

// Functions
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    else if (randomNumber === 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
}

function checkResult () {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a draw!"
    }
    else if ((computerChoice === "rock") && (userChoice === "scissors")) {
        resultDisplay.innerHTML = "You lost!"
    }
    else if ((computerChoice === "rock") && (userChoice === "paper")) {
        resultDisplay.innerHTML = "You won!"
    }
    else if ((computerChoice === "paper") && (userChoice === "rock")) {
        resultDisplay.innerHTML = "You lost!"
    }
    else if ((computerChoice === "paper") && (userChoice === "scissors")) {
        resultDisplay.innerHTML = "You won!"
    }
    else if ((computerChoice === "scissors") && (userChoice === "paper")) {
        resultDisplay.innerHTML = "You lost!"
    }
    else {
        resultDisplay.innerHTML = "You won!"
    }
    }

