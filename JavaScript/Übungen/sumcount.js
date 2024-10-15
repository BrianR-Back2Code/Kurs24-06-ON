function only_grade_num() {
  let num = 0;
  for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      num += i;
    }
  }
  return num;
}

function while_even_num() {
  let num = 0;
  let count = 0;
  while (count <= 100) {
    if (count % 2 == 0) {
      num += count;
    }
    count++;
    //console.log(count);
  }
  return num;
}

function fak_of_num() {
  let sum = 1;
  n = 5;
  for (i = 2; i <= n; i++) {
    sum = sum * i;
    //console.log(i);
  }
  return sum;
}

function while_fak_of_num() {
  let sum = 1;
  let n = 5;
  let counter = 2;
  while (counter <= n) {
    sum = sum * counter;
    console.log(sum);
    counter++;
  }
  return sum;
}

let sum_of_while_fak = while_fak_of_num();
let sum_of_fak = fak_of_num();
let sum_of_while_num = while_even_num();
let sum_of_num = only_grade_num();

//console.log("Summe der For-Schleife: " + sum_of_num);
//console.log("Summe der While-Schleife: " + sum_of_while_num);
//console.log("Die Fakultät der For-Schleife entspricht: " + sum_of_fak);
//console.log("Die Fakultät der While-Schleife entspricht: " + sum_of_while_fak);
