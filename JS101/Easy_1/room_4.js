let rlsync = require ("readline-sync");
let length = rlsync.question("Enter the length of the room in meters: ");
let width  = rlsync.question("Enter the width of the room in meters: ");

let areaInMeter = (length * width);
let roundAreaInMeter = areaInMeter.toFixed(2);
let areaInFeet = areaInMeter * 10.7639; 
let roundAreaInFeet = areaInFeet.toFixed(2);

console.log(`The area of the room is ${roundAreaInMeter} square meters (${roundAreaInFeet} square feet).`);