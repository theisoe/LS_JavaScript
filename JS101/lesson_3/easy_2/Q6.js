let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newArray = [];
newArray = newArray.concat(...flintstones);
console.log(newArray);