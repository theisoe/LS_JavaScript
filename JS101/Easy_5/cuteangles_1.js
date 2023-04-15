/* 
Understanding the [P]roblem
The number between 0 and 360 goes into the function as an argument and return a string that results in degree, minute and seconds.
Input:
Floating number
Output:
String 
Rules/Goals:
String with degree symbol (\u00B0), minute symbol('), second symbol (")
[E]xamples and Test Cases
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
[D]ata Structure

[A]lgorithm
-Declare a function, degree, with an argument, number
-Assign a new variable, degree
-Coerce the argument, number, to integer using parseint()
-Return the value of degree, concatenate by using \u00B0 
-wite another function, toMinute 
-Coerce the argument to string 
-SET getDecimal 
  -use string.indexOf(".")
-SET decimalPart = string.slice(getDecimal + 1)
-SET minute
  -Multiply the Number(decimalPart) with 60;
  -
[C]ode with Intent */

//console.log('\u00B0');

function toDegree(number) {
let degree = parseInt(number);
return degree + '\u00B0';
}

function toMinute(number) {
  let minuteString = String(number);
  if (minuteString.includes('.')) {
    let getDecimal = minuteString.indexOf('.');
    let decimalPart = minuteString.slice(getDecimal+1);
    let minute = String((Number(decimalPart) * 60));
    return minute;
  } else {
    return '0'; 
  }
}

function toSecond(number) {
  let second = (Number(toMinute(number).slice(2)) * 60);
  return String(second).slice(0, 2) + "'";
}

function dms(number) {
 return toDegree(number) + String(toMinute(number)).slice(0, 2) + "'" + toSecond(number);
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773)); //Check this answer 
console.log(dms(0));
console.log(dms(360));
