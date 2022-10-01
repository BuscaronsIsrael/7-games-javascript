// List of cards
const cardArray = [
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    }
    ,
    {
        name: "fries",
        img: "images/fries.png"
    }
    ,
    {
        name: "hotdog",
        img: "images/hotdog.png"
    }
    ,
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    }
    ,
    {
        name: "milkshake",
        img: "images/milkshake.png"
    }
    ,
    {
        name: "pizza",
        img: "images/pizza.png"
    }
    ,
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    }
    ,
    {
        name: "fries",
        img: "images/fries.png"
    }
    ,
    {
        name: "hotdog",
        img: "images/hotdog.png"
    }
    ,
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    }
    ,
    {
        name: "milkshake",
        img: "images/milkshake.png"
    }
    ,
    {
        name: "pizza",
        img: "images/pizza.png"
    }
];

// Shuffle cards
cardArray.sort(() => 0.5 - Math.random());

// Select elements
const grid = document.querySelector("#grid");
const resultDisplay = document.getElementById('result');

// Arrays
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// Create Board
createBoard();

// Functions
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard)
        grid.appendChild(card);
    }
}

function flipcard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    if (cardsChosenIds[0] === cardsChosenIds[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipcard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipcard);
        cardsWon.push(cardsChosen);
    }
    else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    }
    resultDisplay.innerHTML = cardsWon.length; 
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations you found them all!";
    }
}