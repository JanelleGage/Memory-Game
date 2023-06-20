const cardArray = [
    {
        name: 'bee',
        img: 'images/bee.png' 
    },
    {
        name: 'bunny',
        img: 'images/bunny.png' 
    },
    {
        name: 'cat',
        img: 'images/cat.png' 
    },
    {
        name: 'dog',
        img: 'images/dog.png' 
    },
    {
        name: 'elephant',
        img: 'images/elephant.png' 
    },
    {
        name: 'gator',
        img: 'images/gator.png' 
    },
    {
        name: 'panda',
        img: 'images/panda.png' 
    },
    {
        name: 'shark',
        img: 'images/shark.png' 
    },
    {
        name: 'bee',
        img: 'images/bee.png' 
    },
    {
        name: 'bunny',
        img: 'images/bunny.png' 
    },
    {
        name: 'cat',
        img: 'images/cat.png' 
    },
    {
        name: 'dog',
        img: 'images/dog.png' 
    },
    {
        name: 'elephant',
        img: 'images/elephant.png' 
    },
    {
        name: 'gator',
        img: 'images/gator.png' 
    },
    {
        name: 'panda',
        img: 'images/panda.png' 
    },
    {
        name: 'shark',
        img: 'images/shark.png' 
    },
]

cardArray.sort(() => 0.5 - Math.random()) //Sorts array randomly

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector('#result')
let cardsChoosen = []
let cardsChoosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]

    if (optionOneId == optionTwoId) { // If the same card is clicked
        alert('Same card clicked')
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
    }

    if (cardsChoosen[0] == cardsChoosen[1]) { //If the cards choosen match
        alert("Found a match")
        cards[optionOneId].setAttribute('src', 'images/check.png')
        cards[optionTwoId].setAttribute('src', 'images/check.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        
        cardsWon.push(cardsChoosen)
    } else { //If cards choosen do not match
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
        alert("Try Again")
    }
    resultDisplay.textContent = cardsWon.length
    cardsChoosen = []
    cardsChoosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent= "Congrats! You Won!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChoosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}