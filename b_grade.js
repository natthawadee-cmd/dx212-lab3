const score = 82;
let grade;

if (score >= 85) {
  grade = "A";
} else if (score >= 80) {
  grade = "B+";
} else if (score >= 75) {
  grade = "B";
} else if (score >= 70) {
  grade = "C+";
} else if (score >= 65) {
  grade = "C";
} else if (score >= 60) {
  grade = "D+";
} else if (score >= 55) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`คะแนน ${score} ได้เกรด ${grade}`);