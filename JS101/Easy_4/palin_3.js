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

function isRealPalindrom(input) {
  input = String(input).toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrom(input);
}

console.log(isRealPalindrom('madam'));
console.log(isRealPalindrom('Madam'));
console.log(isRealPalindrom("madam, I'm adam"));
console.log(isRealPalindrom('356653'));
