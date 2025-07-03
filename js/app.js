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
let attemps=0
let timer
let board
let flippedCards = []; 
let interval
let matchedPairs = 0;



/*------------------------ Cached Element References ------------------------*/
const cardsEls=document.querySelectorAll('.cards')
const messageEl=document.querySelector('#message')
const resetBtnEl=document.querySelector('#reset')
const timerEl=document.querySelector('#timer')
const counEl=document.querySelector('counter')

/*-------------------------------- Functions --------------------------------*/
function init() {
    cardsCombo = cards.sort(() => Math.random() - 0.5);
    win = false;
    timer =10;
    matchedPairs = 0;
    cardsEls.forEach((element, index) => {
        element.textContent = "?";           
        element.className = "cards";         
        element.style.opacity = "1";        
    });
    countdown()
}

function flipCards(cardIndex) {
    const element = cardsEls[cardIndex]
    element.textContent = cardsCombo[cardIndex].emoji
    element.classList.add(cardsCombo[cardIndex].name)        
}


function handleCardClick(index) {
    if (timer <= 0 || win) return;

    if (flippedCards.includes(index)) return;

    flipCards(index);
    flippedCards.push(index);

    if (flippedCards.length === 2) {
        setTimeout(() => {
            compareFlipped();
        }, 400)
        attemps=attemps+1
        cou
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
    console.log(flippedCards)

}

function winningLossCondition(){
    if(timer >=0 &&flipCards.length==15){
    win=true
    messageEl.textContent=`congrats you did it`
    return
    }
    else{
        messageEl.textContent=`you lost`

    }    
}

function countdown(){
    interval=setInterval(()=>{
    timerEl.textContent=timer
    timer=timer-1
    if (timer==-1){
        clearInterval(interval)
        messageEl.textContent=`Time is up u lost`
        cardsEls.forEach((element)=>{
            element.textContent=`?`
            element.className='cards'

        })
    }
    },1000)
    
}
init()
/*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener('click',()=> {
    clearInterval(interval)
    console.log(clearInterval(interval))
    init()
})

cardsEls.forEach((element, index) => {
    element.addEventListener('click', () => handleCardClick(index));
});

