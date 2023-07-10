
/*
GAME FUNCTION
 - Player must guess a number between a min and max
 - Player gets a fixed number of guesses
 - Notify player of guesses remaining
 - Notify play of the correct number if they lose
 - Let player choose to play again

 */

 // Variables

 let min = 1,
     max = 10,
     winningNum = getRandomNum(min, max);
     guessesLeft = 3;

// ui elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assign UI min and maxNum

minNum.textContent = min;
maxNum.textContent = max;



// play  again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
})

// create event listener for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // validate the input not blank and between min and max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
    // check for winning number
  if(guess === winningNum) {

  gameOver(true, `${winningNum} is correct, YOU WON!`);

} else {
  // wrong Number
  guessesLeft -= 1;
  if(guessesLeft === 0){
      // game over - lost

      gameOver(false, `The game is over, you lost.  The correct number was ${winningNum}`)

    } else {
      // Game continues - answer too low
        if (guess < winningNum){
          // change border color
          guessInput.style.borderColor = 'red';

          // clear guessInput
          guessInput.value = '';

          setMessage(`${guess} is too low, try again, ${guessesLeft} guesses left.`, 'red');
        } else {
        setMessage(`${guess} is too high, try again, ${guessesLeft} guesses left.`, 'red');
    }

    }
  }
});


// game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';

  //disable input
guessInput.disabled = true;
// change border color
guessInput.style.borderColor = color;

// change text borderColor
message.style.color = color;

setMessage(msg);

// play again
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';
}


// Get winning number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max - min+1) + min);
}



  //set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
