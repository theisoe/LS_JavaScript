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

function isPalindromicNumber(input) {
  return isPalindrom(String(input));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true