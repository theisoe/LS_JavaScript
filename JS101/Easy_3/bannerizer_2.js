function logInBox (string) {
  let row = '-';
  let column = '|';
  let space = ' ';
  let upperRow = '+' + row.repeat(string.length + 2) + '+'; 

  console.log(upperRow);
  console.log(column + space.repeat(string.length + 2) + column);
  console.log(column + ' ' + string + ' ' + column);
  console.log(column + space.repeat(string.length + 2) + column);
  console.log(upperRow);
}

logInBox('To boldly go where no one has gone before.');
logInBox('Apple');
