// game values
let min = 1,
  max = 10,
  winningNum = 2,
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
//Set message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};

// listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // Validate numbers
  if (isNaN(guess) || guess < 1 || guess > 10) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if won
  if (guess === winningNum) {
    //Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN`, "green");
  }
});
