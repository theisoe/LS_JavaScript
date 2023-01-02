//function 
//takes 2 arguments 
//return true if exactly one of its argument is truthy ; false otherwise 
//We are looking for boolean result 

function xor (arg_1, arg_2) {
  if (arg_1 && !arg_2) {
    return true;
  }else if (!arg_1 && arg_2) {
    return true;
  }else return false;
}

console.log(xor(0, 5) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

/* further exploration
xor cannot perfrom short-circuit evaluation.
It always has to evaluate both operands to 
make sure only one operand is truthy. 
 */