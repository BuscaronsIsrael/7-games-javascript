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
const grid = document.querySelector("#grid")

// Arrays
const cardsChosen = [];
const cardsChosenIds = [];
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
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
    }
}