/*
GET user's choice
Random choice for computer
Compare user's choice vs computer choice
Print winner
*/

const rlsync = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors"];

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice} and computer chose ${computerChoice}.`);

  if ((playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")) {
    return "Player wins!";
  } else if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(',')}`);
  let playerChoice = rlsync.question();

  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt("Please choose a valid option!");
    playerChoice = rlsync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  console.log(displayWinner(playerChoice, computerChoice));

  prompt("Would you like to play another game?");
  let answer = rlsync.question().toLowerCase();

  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("Please answer y or n!");
    answer = rlsync.question().toLowerCase();
  }

  if (answer[0] === "n") {
    prompt("See you again!");
    break;
  }
}