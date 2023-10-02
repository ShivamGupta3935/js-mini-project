let randomNumber = parseInt(Math.random() *100 + 1)
const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const lowOrHi = document.querySelector('.lowOrHi')
const guessSlots = document.querySelector('.guesses')
const remainingChance = document.querySelector('.lastResult')
const startOver =  document.querySelector('.resultParas')
const p = document.createElement('p')

let previousGuess = []
let guessNum = 1;

let playGame = true

if(playGame){
    sumbit.addEventListener('click', function(e){
         e.preventDefault()
         const guess = parseInt(userInput.value)
         console.log(guess);
         validateNum(guess);
   })
}


//all function
function validateNum(guess){
    if(isNaN(guess)){
        alert('please enter a valid input')
    }else if (guess > 100) {
        alert('please enter a value less then 100')
    }else if (guess < 1) {
        alert('please enter a value greater then 1')
    }else{
        previousGuess.push(guess)
        if(guessNum > 10){
            displayGuess(guess)
            displayMessage(`Game Over, random number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess()
        }
    }
    
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you got it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`The number is too small`)
    }else if(guess > randomNumber){
        displayMessage(' The Number is to long')
    }
}

function displayGuess(guess){
    userInput.value =''
    guessSlots.innerHTML += `${guess},  ` 
    guessNum++
    remainingChance.innerHTML = `${10 - guessNum}`
    // endGame()
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3> ${message}</h3>`
}

function endGame(){
    userInput.value = ''
    // userInput.setAttribute('disabled', '')
    userInput.disabled = true
    p.classList.add('button')
    p.style.cursor = "pointer"
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

}


function newGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() *100 + 1)
        previousGuess = []
        guessNum = 1
        guessSlots.innerHTML = ''
        remainingChance.innerHTML = `${11 - guessNum} `
        userInput.removeAttribute('disabled')
        // userInput.disabled = false
        startOver.removeChild(p)
        playGame = true
    })
}