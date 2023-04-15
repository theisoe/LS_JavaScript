/* let munstersDescription = "The Munsters are creepy and spooky.";
Understanding the [P]roblem:  Return a new string that swaps the case of all of the letters:
Input: Given string "munsterDescription"
Output: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
Rules/Goals:
The uppercase letter in the sentence should be lowercase.
The lowercase letter in the sentence should be uppercase.
==========================
[E]xamples and Test Cases

==========================
Mental Model 

==========================
[D]ata Structure
No array or object 
==========================
[A]lgorithm
-Iterate the string munsterDescription
-Declare a variable to swapped string 
- IF the letter is lowercase, convert it to uppercase
- ELSE, convert it to the lowecase
-Print swapped string
==========================
[C]ode with Intent
*/

let munstersDescription = "The Munsters are creepy and spooky."
let swappedString = '';

for (let i = 0; i < munstersDescription.length; i += 1) {
  if (munstersDescription[i] === munstersDescription[i].toLowerCase()) {
    swappedString += munstersDescription[i].toUpperCase();
} else {
   swappedString += munstersDescription[i].toLowerCase();
}
}
console.log(swappedString);

