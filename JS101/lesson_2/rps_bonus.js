/* Add Lizard and Spock options
player a is rock, player b is scissors; player a wins
player a is rock, player b is lizard, player a wins
player a is paper, player b is rock, player a wins
player a is paper, player b is spock, player a wins
player a is scissors, player b is paper, player a wins
player a is scissor, player b is lizard, player a wins
player a is lizard, player b is spock, player a wins
player a is lizard, player b is paper, player a wins
player a is spock, player b is scissor, player a wins
player a is spock, player b is rock, player a wins */

const rlsync = require ("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

function shortedChoice (choice) {
  if (choice === "r" || choice === "rock") {
    return "rock";
  } else if (choice === "p" || choice === "paper") {
    return "paper";
  } else if (choice === "l" || choice === "lizard") {
    return "lizard";
  } else if (choice === "s") {
    prompt("Type 'sc' for scissor and Type 'sp' for spock");
  } if (choice === "sc") {
    return "scissors";
  } else if (choice === "sp") 
    return "spock";
  }

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice} and computer chose ${computerChoice}.`);

  if (((choice === "rock" || choice === "r") && computerChoice === "scissors") ||
      ((choice === "rock" || choice === "r") && computerChoice === "lizard") ||
      ((choice === "paper" || choice === "p") && computerChoice === "rock") ||
      ((choice === "paper" || choice === "p") === "spock" ) ||
      ((choice === "scissors" || choice === "sc") && computerChoice === "paper") ||
      ((choice === "scissors" || choice === "sc") && computerChoice === "lizard") ||
      ((choice === "lizard" || choice === "l") && computerChoice === "spock") ||
      ((choice === "lizard" || choice === "l") && computerChoice === "paper") ||
      ((choice === "spock" || choice === "sp") && computerChoice === "scissor") ||
      ((choice === "spock" || choice === "sp") && computerChoice === "rock" )) {
    prompt ("Player wins!");
  } else if (choice === computerChoice) {
    prompt ("It's a tie! ");
  } else {
    prompt("Computer wins!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  console.log (`Welcome to Rock, Paper, Scissors, Lizard, Spock! 
  The rules of the game are:
  Scissors decapitate Scissors cuts paper,
  paper covers rock, rock crushes lizard,
  lizard poisons Spock, Spock smashes scissors,
  scissors decapitates lizard, lizard eats paper,
  paper disproves Spock, Spock vaporizes rock, 
  and as it always has, rock crushes scissors.`);

  console.log(" "); //For spacing 

  prompt(`Choose one: ${VALID_CHOICES}`);
  let choice = rlsync.question();

  while (!VALID_CHOICES.includes(shortedChoice(choice))) {
    prompt("Please choose a valid option! ");
    choice = rlsync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(shortedChoice(choice), computerChoice);

  prompt("Would you like to play again? (y/n)");
  let answer = rlsync.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = rlsync.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    prompt ("See you again!");
    break;
  }
}





//if (choice === "sc") {
  return "scissors";
} else if (choice === "sp") return "spock";