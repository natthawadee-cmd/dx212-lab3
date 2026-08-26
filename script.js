function getGrade(score) {
  if (score >= 85) return "A";
  else if (score >= 80) return "B+";
  else if (score >= 75) return "B";
  else if (score >= 70) return "C+";
  else if (score >= 65) return "C";
  else if (score >= 60) return "D+";
  else if (score >= 55) return "D";
  else return "F";
}

const scores = [72, 88, 95, 60, 81];
let text = "";
for (let i = 0; i < scores.length; i++) {
  text += `คะแนน ${scores[i]} = เกรด ${getGrade(scores[i])}\n`;
}

document.getElementById("output").textContent = text;
