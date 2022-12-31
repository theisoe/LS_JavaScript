for (let num = 2; num <100 ; num += 2) {
  console.log(num);
}

//another approach
let num = 2; 
do {
  console.log(num);
  num += 2;
}while (num < 100);

//another approach 
for (let num = 1; num < 99; num += 1) {
  if (num % 2 === 1) continue;
  console.log(num);
}
