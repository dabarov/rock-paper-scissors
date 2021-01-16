function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  let randomInt = Math.floor(Math.random() * 3);
  return options[randomInt];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Round tied: both chose ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winCounter += 1;
    return `Round won: ${playerSelection} beats ${computerSelection}`;
  }
  loseCounter += 1;
  return `Round lost: ${computerSelection} beats ${playerSelection}`;
}

function respondOnPlayersChoice(event) {
  playerSelection = event.path[0].id;
  computerSelection = computerPlay();
  result.textContent = playRound(playerSelection, computerSelection);
  score.textContent = `${winCounter} : ${loseCounter}`;
  if (winCounter == 5) {
    result.textContent = "Good job, you won!";
    winCounter = loseCounter = 0;
  } else if (loseCounter == 5) {
    result.textContent = "Unlucky, you lost!";
    winCounter = loseCounter = 0;
  }
}

const buttons = document.querySelector("#buttons");
const result = document.querySelector("#result");
const score = document.querySelector("#score");

let winCounter = 0;
let loseCounter = 0;

score.textContent = "0 : 0";

buttons.addEventListener("click", (e) => respondOnPlayersChoice(e));
