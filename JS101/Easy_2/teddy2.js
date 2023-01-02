//further exploration from problem #9

function randomAge (min, max) {
  return Math.abs(Math.round(Math.random() * (max-min)+ min)); // math.abs if the user inputs are in negative order 
}

console.log(randomAge(20, 120));

//no need to add +1 on line 3 when using Math.round() instead of Math.floor
