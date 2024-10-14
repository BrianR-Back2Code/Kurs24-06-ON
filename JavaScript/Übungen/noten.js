function getgrade() {
  return Math.floor(Math.random() * 6) + 1;
}
function checkGrade() {
  let grade = getgrade();
  switch (grade) {
    case 1:
      console.log(grade + " = Sehr gut");
      break;
    case 2:
      console.log(grade + " = Gut");
      break;
    case 3:
      console.log(grade + " = Befriedigend");
      break;
    case 4:
      console.log(grade + " = Ausreichend");
      break;
    case 5:
      console.log(grade + " = Mangelhaft");
      break;
    case 6:
      console.log(grade + " = Nicht bestanden!!");
      break;
    default:
      console.log("Ausserhalb des Zahlenbereichs 1 - 6 ");
      break;
  }
}
checkGrade();
