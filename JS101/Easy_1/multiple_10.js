function multisum (number) {
  let result = 0; 
  for (let i = 1; i <= number; i += 1) {
    if (i % 3 === 0) {
      result += i;
  } else if (i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

console.log(multisum(20));
