/*let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 console.log(arr.slice(2, 5)[0]);

 console.log('abcdefg'.includes('b', 1));

while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length)  {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}


let number;

do {
  number = Math.floor (10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exciting...'); 

let numbers = [1, 2, 3, 4]; 
let index = 0;

for (index = 0; index < numbers.length ; index += 1) {
  numbers[index] += 1;
}

console.log(numbers);

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(currentPet);
  console.log(currentPetNumber);

  */

while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}

let number; 

do {
 number = Math.floor(10 * Math.random());
 console.log(number);
} while (number != 5);

console.log('Exiting...');

let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}
 
let string = " ";

while (string.length <= 10) {
  string += '*';
  console.log(string);
}

let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];

for (let index = 0; index < names.length; index += 1) {
  if (names[index][0] === 'E') {
    continue;
  }
  console.log(names[index]);
}

let fruits = ['apple', 'banana', 'pear'];
let transformationElements = []; 
let counter = 0;

while (counter < fruits.length) {
  let currentElement = fruits[counter];
  let modifiedElement = currentElement.concat('s');

  transformationElements.push(modifiedElement);
  counter += 1; 
};

console.log(transformationElements);

function selectVowels(str) {
  let selectedChars = ''; //more like an empty array 

  for (let i = 0; i < str.length; i += 1) {
    let currentLetter = str[i]; 

    if ('aeiouAEIOU'.includes(currentLetter)) {
      selectedChars = selectedChars.concat(currentLetter);
    }
  }
  return selectedChars;
}

console.log(selectVowels('the quick brown fox'));

let sentence = 'I wandered lonely as a cloud';
console.log(selectVowels(sentence).length);
console.log(sentence);


/*function doubleNumbers(numbers) {
  let counter = 0; 

  while (counter < numbers.length) {
    let currentNum = numbers[counter] 
    numbers[counter] = currentNum * 2;

    counter += 1;
  }

  return numbers; 
}


let myNumbers = [1, 4, 3, 7, 2, 6];
//console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]


function doubleOddNumbers(numbers) {
  let doubledNum = [];

  for (let i = 0; i < numbers.length; i += 1) {
    let currentNumber = numbers[i];

    if (currentNumber % 2 !== 0) {
      currentNumber *= 2;
      doubledNum.push(currentNumber);      
    } else {
      doubledNum.push(currentNumber);
    }
  }
  return doubledNum;
}

console.log(doubleOddNumbers(myNumbers));


//write a function that double the value at odd indices 

function doubledOddIndices(numbers) {
  let doubledNums = [];

  for (let i = 0; i < numbers.length; i += 1) {
    let currentNumber = numbers[i];

    if( i % 2 !== 0) {
      doubledNums.push(currentNumber * 2)
    } else {
      doubledNums.push(currentNumber);
    }
  }
  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubledOddIndices(myNumbers)); // => [1, 8, 3, 14, 2, 12];

*/

function multiply(numbers, multiplier) {
  let counter = 0; 
  let result = [];

  while (counter < numbers.length) {
    let currentNum = numbers[counter] 
    currentNum *= multiplier;
    result.push(currentNum);

    counter += 1;
  }

  return result; 
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]