/* Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array

function palindromeSubstring (string) {
  let result = [];
  let subsArray = subString(string);

subsArray.forEach (substring => {
  if (isPalindrome(substring)) {
    result.push(substring)
  }
});

return result;
}
*/

/* 
sequence of even integers 
sequence begins with 2 
integers are consecutive 
sequence is grouped in rows
each row is incremented 1,2,3
row 

*/