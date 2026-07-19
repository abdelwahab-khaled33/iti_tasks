var grade = prompt("enter grade");

if (grade >= 90) {
  console.log("Excellent");
} else if (grade >= 80 && grade < 90) {
  console.log("Good");
} else if (grade > 69 && grade < 80) {
  console.log("Average");
} else if (grade > 59 && grade < 70) {
  console.log("Pass");
} else {
  console.log("Fail");
}
