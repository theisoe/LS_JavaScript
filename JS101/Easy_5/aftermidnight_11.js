/*
Input: number/integer (minutes)
Output: number in (24 hour format hh:mm)

Rules: If the number of minutes is postive, the time is after midnight
IF the number of minutes is negative, the time is before midnight
Data Structure: 

Algorithm: 
-Declare a function timeOfDay with variable 'minIn' as a parameter
-Declare a variable 'minute' and set it to 0. 
-Declare a variable 'hour' and set it to the value of 'minIn' % 60
-If 'hour' is less than 60, reassign it to minute 
-else if 'hour' is greater than 60, reassign the hour % 24 
-if minIn is equal to 0, print "00:00"
-else, get the modulo of minIn value 
- if minIn is greater than 0 , reassign the value to variable minute 
-else if minIn is less than 0 and less 


function changeToHours (minIn) {
  let absMins = Math.abs(minIn);
  let minute = 0; 
  let hourInDecimal = absMins / 60; 
  if (hour < 60) {
    minute = hour;
  } else if ( hour > 60) {
    hour = hour % 24; 
  }

return hour;
}

console.log(changeToHours(-4321)); */

/*const emphasize = str => { str + "!!!" };

let word = emphasize("Hello");

if (word) {
  console.log(word);
} else {
  console.log("Goodbye");
}*/

console.log( undefined >= 1);