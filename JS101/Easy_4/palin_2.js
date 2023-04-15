/* 
-Declare a function with an argument string
-Set a new array and Separate the characters of the string with string.split()method 
-Set a new variable for a reversed array
-Initialized the reversed array by applying array.reverse() method
-Return the reversed array to a string by using array.join() method 
-IF string  === string of 'reversed array', return true
-ELSE return false
*/

function isPalindrom(string) {
  let arr = string.split('');
  let reversedArr = arr.reverse();
  let str = reversedArr.join('');
  
  if(string === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom('madam'));
console.log(isPalindrom('Madam'));
console.log(isPalindrom('madam i\'m adam'));
console.log(isPalindrom('356653'));