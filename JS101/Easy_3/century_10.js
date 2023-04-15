function century(year) {
  let cent = Math.ceil(year/100); 
  let stringCent = String(cent);
  
  if (stringCent[stringCent.length-1] === String(0)) {
    return `${stringCent}th`;
  } else if (stringCent.slice(-2) === String(11)) {
    return `${stringCent}th`;
  } else if (stringCent.slice(-2) === String(12)) {
    return `${stringCent}th`;
  } else if (stringCent.slice(-2) === String(13)) {
    return `${stringCent}th`;
  } else if ((stringCent[stringCent.length-1] === String(1))) {
    return `${stringCent}st`;
  } else if ((stringCent[stringCent.length-1] === String(2))) {
    return `${stringCent}nd`;
  } else if ((stringCent[stringCent.length-1] === String(3))) {
    return `${stringCent}rd`;
  
}

}
console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));