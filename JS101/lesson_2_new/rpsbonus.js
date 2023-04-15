const rlsync = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
}

const CHOICES = {
  r : 'rock',
  R : 'rock',
  p : 'paper',
  P : 'paper',
  sc : 'scissors',
  Sc : 'scissors',
  sp : 'spock',
  Sp : 'spock',
  l : 'lizard',
  L : 'lizard',
}

function playerChoices(input) {
  return CHOICES[input];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function spacing() {
  console.log(" ");
}
function computerChoice() {
  let randomIndex = Math.floor(Math.random()) * VALID_CHOICES.length;
  return  computerOutput = VALID_CHOICES[randomIndex]; 
}

function playerWin(playerChoice, computerChoice) {
  return WINNING_COMBOS[playerChoices(playerChoice)].includes(computerChoice);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`Player chose ${playerChoices(playerChoice)} and computer chose ${computerChoice}.`);
  if (playerWin(playerChoice, computerChoice)) {
    prompt ("You win!"); {
    }
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}



while(true) {
  prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock");

  spacing();

  prompt(`Please choose ${VALID_CHOICES.join(", " )}.`);
  let playerChoice = rlsync.question();
      playerChoice = playerChoice[0];

  while(!((VALID_CHOICES.includes(playerChoices(playerChoice))))) {
    prompt(`Not a valid choice.\n Please choose ${VALID_CHOICES.join(", " )}.`);
    playerChoice = rlsync.question();
  }
  displayWinner(playerChoice, computerChoice());

  
    prompt("Do you want to continue your game?");
    let answer = (rlsync.question()).toLowerCase();

    while (!['yes', 'no', 'y', 'n'].includes(answer)) {
      prompt("Please answer yes or no!");
      answer = answer = rlsync.question();
    }

    if (answer[0] === 'n') {
      prompt("See you next time!");
    break;
    }
}
