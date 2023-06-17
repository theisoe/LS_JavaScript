//use the combo of methods using filter; to return a new array identical in structure to the original 
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => {
  return subArr.filter(element => {
    if (element % 3 === 0) {
      return element;
    }
  })
});

console.log(newArr);