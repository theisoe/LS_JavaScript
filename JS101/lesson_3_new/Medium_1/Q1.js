/* 
Understanding the [P]roblem: Write a program that outputs The Flintstones Rock! 10 times, 
with each line indented 1 space to the right of the line above it.
Input: String "The Flintstones Rock!"
Output: String "The Flintstones Rock!" x 10 with each line indented to the right of the line above 
Rules/Goals:
Each string should be 1 space indented to the right of the above string
==========================
[E]xamples and Test Cases

==========================
Mental Model 
"The Flintstones Rock!"
  "The Flintstones Rock!""
==========================
[D]ata Structure
 No array or object 
==========================
[A]lgorithm
-Assign the input string to a variable 
-Iterate the string for 10 times
-Add a space to the left of the string
-Reassign the string with each iteration
-Print the string 
==========================
[C]ode with Intent
*/

let string = "The Flintstones Rock!";
for (let i = 1; i <= 10; i += 1) {
  string = ' ' + string;
  console.log(string);
}
