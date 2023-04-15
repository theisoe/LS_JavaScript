let greeting = ["Hello"];

const test = arr => {
  arr.push("World!");
  return arr;
}

console.log(test(greeting)); // 2
console.log(greeting); // ["Hello", "World!"