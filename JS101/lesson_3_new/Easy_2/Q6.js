let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//let newArray = [].concat(...flintstones);

let newArray = flintstones.flat();
console.log(newArray);