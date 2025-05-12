let userScore = 0;
let computerScore = 0;

// Get all choice buttons (rock, paper, scissors)
const choiceButtons = document.querySelectorAll(".choice");

// Get message and score elements
const messageDisplay = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#comp-score");

// Randomly select computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// If it's a draw
function handleDraw() {
  messageDisplay.innerText = "It's a draw! Try again.";
  messageDisplay.style.backgroundColor = "#666"; // neutral grey
}

// Show the result and update scores
function showResult(userWins, userChoice, computerChoice) {
  if (userWins) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    messageDisplay.innerText = `You win! ${userChoice} beats ${computerChoice}`;
    messageDisplay.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScoreDisplay.innerText = computerScore;
    messageDisplay.innerText = `You lose. ${computerChoice} beats ${userChoice}`;
    messageDisplay.style.backgroundColor = "red";
  }
}

// Main game logic
function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    handleDraw();
  } else {
    const userWins =
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper");

    showResult(userWins, userChoice, computerChoice);
  }
}

// Add event listeners to each choice
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const userChoice = button.id; // "rock", "paper", or "scissors"
    playGame(userChoice);
  });
});
