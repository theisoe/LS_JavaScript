function triangle(n) {
  for (let i = 1; i <= n; i += 1) {
    let star = '*';
    let space = ' ';
    console.log(space.repeat(n-i).concat(star.repeat(i)));
  }
}
triangle(5);
triangle(9);