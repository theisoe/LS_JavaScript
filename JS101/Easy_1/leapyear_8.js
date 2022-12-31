// leap year is year divisible by 4
// leap year is not divisible by 100 
//leap year is divisble by 400 
// input is any year greater than 0 
// print true if it's a leap year 
// print false if it's not a leap year 
// before 1752, leap year is any year % 4 === 0;

function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    } else return false;
  } else {
    if (year % 4 === 0 &&  year % 100 !== 0) {
      return true;
     } else if (year % 400 === 0) {
      return true;
     } else return false;
  }
}
console.log(isLeapYear(2016));      
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));