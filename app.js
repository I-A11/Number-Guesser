// game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

// Functions
// get Random number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}
//Set message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};

//Game over
const gameOver = (won, msg) => {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = "color";
  //   set style color
  message.style.color = color;
  // Set message
  setMessage(msg);

  //Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
};

//play again event
game.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
// listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // Validate numbers
  if (isNaN(guess) || guess < 1 || guess > 10) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN`);
  } else {
    //wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over you lost the correct number was ${winningNum}`
      );
    } else {
      // game continues answer wrong
      guessInput.style.borderColor = "red";

      // clear input
      guessInput.value = "";

      // tell user it is wrong number

      setMessage(`${guess} is not correct, ${guessesLeft} gusses left`);
    }
  }
});
