/*-------------------------------- Constants --------------------------------*/
const cards = [
  { name: "apple", emoji: "🍎" },
  { name: "apple", emoji: "🍎" },
  { name: "car", emoji: "🚗" },
  { name: "car", emoji: "🚗" },
  { name: "dog", emoji: "🐶" },
  { name: "dog", emoji: "🐶" },
  { name: "pizza", emoji: "🍕" },
  { name: "pizza", emoji: "🍕" },
  { name: "cat", emoji: "🐱" },
  { name: "cat", emoji: "🐱" },
  { name: "balloon", emoji: "🎈" },
  { name: "balloon", emoji: "🎈" },
  { name: "game", emoji: "🎮" },
  { name: "game", emoji: "🎮" },
  { name: "rocket", emoji: "🚀" },
  { name: "rocket", emoji: "🚀" }
];
/*---------------------------- Variables (state) ----------------------------*/
let cardsCombo
let win
let attemps
let timer
let board
let flippedCards = []; 


/*------------------------ Cached Element References ------------------------*/
const cardsEls=document.querySelectorAll('.cards')
const messageEl=document.querySelector('#message')
const resetBtnEl=document.querySelector('#reset')

/*-------------------------------- Functions --------------------------------*/
function init() {
    cardsCombo = cards.sort(() => Math.random() - 0.5);
    win = false;
    timer = 30;
    cardsEls.forEach((element, index) => {
        element.textContent = "?";           
        element.className = "cards";         
        element.style.opacity = "1";        
    });
}

function flipCards(cardIndex) {
    const element = cardsEls[cardIndex]
    element.textContent = cardsCombo[cardIndex].emoji
    element.classList.add(cardsCombo[cardIndex].name)        
}


function handleCardClick(index) {
    if (flippedCards.includes(index)){
        return;
    } 
    flipCards(index);
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        setTimeout(() => {
            compareFlipped();
        }, 400) 
    }
}

function compareFlipped() {
    const [firstCard, secondCard] = flippedCards;
    if (cardsCombo[firstCard].name !== cardsCombo[secondCard].name) {
        cardsEls[firstCard].textContent = "?";
        cardsEls[secondCard].textContent = "?";
        cardsEls[firstCard].className = "cards";
        cardsEls[secondCard].className = "cards";
    }
    flippedCards = [];

}

init()
/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener('click',init)

cardsEls.forEach((element, index) => {
    element.addEventListener('click', () => handleCardClick(index));
});
