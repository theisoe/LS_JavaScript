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
    return prompt("Type 'sc' for scissor and Type 'sp' for spock");
  } else if (choice === "sc") {
    return "scissors";
  } else if (choice === "sp") {
    return "spock";
  } else {
    return prompt("Invalid choice.");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function spacing() {
  console.log(" ");
}

function welcomeMessage() {
  console.log(`Welcome to Rock, Paper, Scissors, Lizard, Spock! 
  The rules of the game are:
  Scissors decapitate Scissors cuts paper,
  paper covers rock, rock crushes lizard,
  lizard poisons Spock, Spock smashes scissors,
  scissors decapitates lizard, lizard eats paper,
  paper disproves Spock, Spock vaporizes rock, 
  and as it always has, rock crushes scissors.`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
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

function continueGame() {
  prompt ("Do you want to continue? y/n");
  let answer = rlsync.question().toLowerCase();
  return answer;
}

while (true) {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  console.clear();
  welcomeMessage();

  console.log(WINNING_COMBOS["rock"]);

  const WINNING_ROUND = 3;
  while (playerScore < WINNING_ROUND && computerScore < WINNING_ROUND) {
    spacing( );
    prompt(`Choose one: ${VALID_CHOICES}`);
    let choice = rlsync.question();

    while (!VALID_CHOICES.includes(shortedChoice(choice))) {
      prompt("Please choose a valid option! ");
      choice = rlsync.question();
    }

    displayWinner(shortedChoice(choice), computerChoice);
    spacing( );
    score(choice, computerChoice);

    prompt(`Player wins ${playerScore} matches & Computer wins ${computerScore} matches.`);
  }
  grandWinner();

  playerScore = 0;
  computerScore = 0;

  spacing();
  
  let answer = continueGame();
  while (!(answer === 'y' || answer === 'n')) {
    prompt("Please enter y/n! ");
    answer = rlsync.question().toLowerCase();
  }

  if (answer === "n") {
    prompt("See you again!");
    break;
  }
}


