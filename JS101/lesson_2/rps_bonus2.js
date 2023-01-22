const rlsync = require ("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function shortedChoice(choice) {
  if (choice === "r" || choice === "rock") {
    return "rock";
  } else if (choice === "p" || choice === "paper") {
    return "paper";
  } else if (choice === "l" || choice === "lizard") {
    return "lizard";
  } else if (choice === "s") {
    prompt("Type 'sc' for scissor and Type 'sp' for spock");
  } else if (choice === "sc") {
    return "scissors";
  } else if (choice === "sp") return "spock";
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    return prompt('You win!');
  } else if (choice === computerChoice) {
    return prompt("It's a tie!");
  } else {
    return prompt("Computer wins!");
  }
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}
let playerScore = 0;
let computerScore = 0;

function score(choice, computerChoice) {
  if (playerWins(shortedChoice(choice), computerChoice)) {
    playerScore += 1;
    return playerScore;
  } else {
    computerScore += 1;
    return computerScore;
  }
}

function grandWinner() {
  if (playerScore === 3) {
    prompt("You are the grand winner! ");
  } else if (computerScore === 3) {
    prompt ("Computer is the grand winner! ");
  }
}

while (true) {
  console.clear();
  console.log (`Welcome to Rock, Paper, Scissors, Lizard, Spock! 
  The rules of the game are:
  Scissors decapitate Scissors cuts paper,
  paper covers rock, rock crushes lizard,
  lizard poisons Spock, Spock smashes scissors,
  scissors decapitates lizard, lizard eats paper,
  paper disproves Spock, Spock vaporizes rock, 
  and as it always has, rock crushes scissors.`);

  while (playerScore < 3 && computerScore < 3) {
    console.log(" "); //For spacing
    prompt(`Choose one: ${VALID_CHOICES}`);
    let choice = rlsync.question();

    while (!VALID_CHOICES.includes(shortedChoice(choice))) {
      prompt("Please choose a valid option! ");
      choice = rlsync.question();
    }

    displayWinner(shortedChoice(choice), computerChoice);
    console.log(''); //Spacing
    score(choice, computerChoice);

    prompt(`Player wins ${playerScore} matches & Computer wins ${computerScore} matches.`);
  }
  grandWinner();

  playerScore = 0;
  computerScore = 0;

  console.log(''); //Spacing

  prompt ("Do you want to continue? y/n");
  let answer = rlsync.question().toLowerCase();

  while (!(answer[0] === 'y' || answer[0] === 'n')) {
    prompt("Please enter y/n! ");
    answer = rlsync.question().toLowerCase();
  }

  if (answer[0] === "n") {
    prompt("See you again!");
    break;
  }
}


