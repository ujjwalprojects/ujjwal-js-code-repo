# Projects related to DOM

## project link
[click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,index.html)


# solution code

## Project 1 color selector

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  // event listner
  button.addEventListener('click', function(e){
      console.log(e)
      console.log(e.target)
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'purple'){
        body.style.backgroundColor =  e.target.id;
      }
  })
})

```

## project 2 bmi

```javascript
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight`
  }
  else{
    const bmi =  (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
  }

})

```


## project 3 digital clock

```javascript
const clock = document.getElementById('clock')

// update time on certain interval
setInterval(()=>{
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerText = date.toLocaleTimeString()
},1000)
```

## project 4 guessing random number

```javascript

let ranNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const input = document.querySelector('#guessField');
const guessNums = document.querySelector('.guesses');
const remainingNum = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// store guesses of user
let preGuess = [];
// number of attempts
let numGuesses = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault()
    const guess = parseInt(input.value)
    validateGuess(guess)
  })
}

// check if the number is valid
function validateGuess(guess) {
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert("Please enter a valid number")
  }else{
    preGuess.push(guess)
    if(numGuesses === 11){
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${ranNum}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
// display validation message
function checkGuess(guess) {
  if(guess===ranNum){
    displayMessage(`You guessed it rigt`)
    endGame()
  }
  else if(guess<ranNum){
    displayMessage(`Number is too low`)
  }
  else if(guess>ranNum){
    displayMessage(`Number is too high`)
  }
}

function displayGuess(guess) {
  input.value = ''
  guessNums.innerHTML += `${guess}, `
  numGuesses++
  remainingNum.innerHTML = `${11 - numGuesses}`
}

// dom manupulation
function displayMessage(message) {
  lowOrHi.innerHTML =  `<h2>${message}</h2>`;
}

function newGame(){
    const newBtn = document.querySelector('#newGame')
    newBtn.addEventListener('click',(e)=>{
      ranNum  = parseInt(Math.random() * 100 + 1);
      preGuess = []
      numGuesses = 1
      guessNums.innerHTML = ''
      remainingNum.innerHTML = `${11 - numGuesses}`
      input.removeAttribute('disabled')
      startOver.removeChild(p)
      playGame = true
    })
}

function endGame(){
  input.value = ''
  input.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<button id = 'newGame'>Start new game</button>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

```