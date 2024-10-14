function getTemp() {
  let min = -20;
  let max = 40;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function checkTemp() {
  let temp = getTemp();
  if (temp <= 0) {
    console.log("Es ist sehr Kalt");
  } else if (temp >= 0 && temp <= 15) {
    console.log("Es ist kühl");
  } else if (temp >= 16 && temp <= 25) {
    console.log("Es ist angenehm warm");
  } else {
    console.log("Es ist heiß");
  }
}

checkTemp();
