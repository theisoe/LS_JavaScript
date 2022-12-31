/* Input:
Ask the user the name 
Use readlinesync to ask for the input 

Output:
Greet the user with the name
if the user add "!" in their name, greets the user with uppercases without the exclaimation mark "!"
else, greet the user normally*/

let rlsync = require ("readline-sync");
let name = rlsync.question ("What is your name? ");

  if (name.includes("!")) {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING? `)
  } else if (name) {
    console.log(`Hello ${name}.`);
  };

