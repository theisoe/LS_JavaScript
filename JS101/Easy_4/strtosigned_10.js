function stringToInteger (string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3, 
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

let strOfArray = string.split('').map(char => DIGITS[char]);
let value = 0;
strOfArray.forEach(digit => (value = (value * 10) + digit));

return value;

}

function stringToSignedInteger(string) {
  if (string.includes ('-')) {
    return -stringToInteger(string.slice(1, string.length))
  } else {
    return stringToInteger(string.slice(0, string.length));
  }
}
console.log(stringToSignedInteger('-321'));