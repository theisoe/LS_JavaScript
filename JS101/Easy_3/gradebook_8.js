function getGrade (score1, score2, score3) {
  let averageScore = Math.round((score1 + score2 + score3)) / 3;

  if (averageScore < 60) {
    return "F";
  } else if (averageScore < 70) {
    return "D";
  } else if (averageScore < 80) {
    return "C";
  } else if (averageScore < 90) {
    return "B";
  } else if (averageScore >= 90) {
    return "A";
  } else return "Not valid";
}
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"