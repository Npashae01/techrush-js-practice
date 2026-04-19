// Q10: summarizing student results

function gradeScore(score) {
  if (score >= 70) return 'A';
  else if (score >= 60) return 'B';
  else if (score >= 50) return 'C';
  else if (score >= 40) return 'D';
  else return 'F';
}

function summarizeStudent(students) {
  return students.map(student => {
    const grade = gradeScore(student.score);
    return `${student.name} scored ${student.score} — Grade: ${grade}`;
  });
}

// sample data to test
const students = [
  { name: "Amara", score: 88 },
  { name: "John", score: 65 },
  { name: "Tolu", score: 45 }
];

console.log(summarizeStudent(students));
