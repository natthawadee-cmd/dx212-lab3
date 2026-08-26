const scores = [72, 88, 95, 60, 81];
let sum = 0;
let max = scores[0]; // กำหนดค่าเริ่มต้นเป็นคะแนนคนแรก
let countOver80 = 0; // ตัวแปรสำหรับนับคนที่ได้คะแนน > 80

for (let i = 0; i < scores.length; i++) {
  // 1. หาผลรวม
  sum = sum + scores[i];

  // 2. หาคะแนนสูงสุด (max)
  if (scores[i] > max) {
    max = scores[i];
  }

  // 3. นับจำนวนคนที่ได้คะแนนมากกว่า 80
  if (scores[i] > 80) {
    countOver80 = countOver80 + 1;
  }
}

const average = sum / scores.length;

console.log("รวม:", sum, "เฉลี่ย:", average);
console.log("คะแนนสูงสุด:", max);
console.log("จำนวนคนที่ได้คะแนนเกิน 80:", countOver80);
