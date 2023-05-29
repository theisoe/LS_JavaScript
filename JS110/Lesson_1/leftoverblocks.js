/* 
Step 1: Understand the problem 
Input: number of cubes
Output: number of cubes leftover after building the tallest valid structure

Explicit rules:
1. Top layer is a single block
2. An upper layer is supported by 4 blocks
3. A block in a lower layer can support more than 1 block in an upper layer 
4. No gaps between blocks
 
Implicit rules: 
How do we determine the validity of the structure? 
layer number x layer number = blocks in the a layer

Step 2: Examples and test cases

console.log(calculateLeftoverBlocks(0) === 0); //true 
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

The test cases confirm the mental mode 

Step 3: Data structures
[
  [1],
  [2, 2],
  [3, 3, 3],
]

Step 4: Algorithm
1. Start 
    a. Set the 'current block value' to the 'input block value' 
    b. Set the 'number of layer' to 1 
2. Set the blocks 'required block value' by multiplying the 'number of layer' with 'number of layer' 
3. Set the 'leftover block value' to the 'required block value' that is subtracted from 'current block value' 
4. If the 'leftover block value' is less than 0, return the 'current block value'
5. Increment the 'number of layer' by 1
6. Reassign the 'current block value' to 'left over block value'
7. If the leftover block value is less than the required block value
8. Return the leftover block value


function calculateLeftoverBlocks(input) {
  let currentBlockValue = input;
  let numberOfLayers = 1;

  while (true) {
    let requiredBlocks = numberOfLayers * numberOfLayers;
    let leftoverBlockValue = currentBlockValue - requiredBlocks;

    if (leftoverBlockValue < 0) {
     return currentBlockValue;
    }

    numberOfLayers += 1;
    currentBlockValue = leftoverBlockValue;

    if (leftoverBlockValue < requiredBlocks) {
      return currentBlockValue;
    }
    
  }

}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

/*
1. Create a variable named available blocks and initialized to input 
2. Create a variable named currentLayer and initialized to 0
3. Create variable named requiredBlocks and set it to the square of current layer 
4. Create a variable named remaining blocks 
  - subtract the required blocks from the available blocks 
5. If the input is 0, return the available blocks
6. While available blocks is greater than or equal to the requierd blocks
  - reassign the remaining blocks 
  -reassign the avaible blocks to the remaining blocks
  -reassign the required blocks
  -Increment the current layer by 1
7. Return the remainigBlocks 
*/

function calculateLeftoverBlocks (input) {
  let remainingBlocks = input; 
  let currentLayer = 0; 
  let requiredBlocks = (currentLayer) ** 2; 

  if (input = 0) {
    return remainingBlocks; 
  }

  while (remainingBlocks >= requiredBlocks) {
    remainingBlocks = remainingBlocks - requiredBlocks; 
    currentLayer += 1; 
    requiredBlocks = (currentLayer) ** 2; 
  }

  return (remainingBlocks); 
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
