//player a is rock, player b is scissors; player a wins
//player a is paper, player b is rock, player a wins
//player a is scissors, player b is paper, play a wins
//both players chose the same, it's a tie 
// User make a choice : readline-sync
//The computer make a choice: random choice
//Winner is displayed 

 const rlsync = require ("readline-sync");
 const VALID_CHOICES = ["rock", "paper", "scissors"];

 function prompt(message) {
  console.log(`=> ${message}`);
 }

 
while (true) {
prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = rlsync.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt("Please choose a valid option! ");
  choice = rlsync.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice} and computer chose ${computerChoice}.`)

if ((choice === "rock" && computerChoice === "scissors") || 
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissors" && computerChoice === "paper")) {
  prompt ("Player wins!");
} else if ((computerChoice === "rock" && choice === "scissors") || 
    (computerChoice === "paper" && choice === "rock") ||
    (computerChoice === "scissors" && choice === "paper")) {
  prompt ("Computer wins!");
} else if (choice === computerChoice) { 
  prompt ("It's a tie! ");
} 

prompt("Would you like to play again? (y/n)");
let answer = rlsync.question().toLowerCase();

while (answer[0] !== 'y' && answer[0] !== 'n') {
  prompt("Please enter 'y' or 'n'");
  answer = rlsync.question().toLowerCase();
}

if (answer[0] !== 'y') {
  prompt ("See you again!")
  break;
}

}
