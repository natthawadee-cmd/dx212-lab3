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

// ชุดข้อมูลคะแนนจาก Part C
const scores = [72, 88, 95, 60, 81];

// วนลูปตัดเกรดและแสดงผลทั้ง 5 คน
for (let i = 0; i < scores.length; i++) {
  console.log(`คะแนน ${scores[i]} ได้เกรด ${getGrade(scores[i])}`);
}
