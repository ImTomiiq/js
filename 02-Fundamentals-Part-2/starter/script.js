"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) {
  console.log("You have drivers license!");
}*/

/*function logger() {
  console.log("My names is Tomas");
}
logger();*/

/*function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/* function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age = calcAge1(1991);

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age, age2); */

/*const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(2022, "kokot"));
console.log(yearUntilRetirement(202, "dsa")); */

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 5));
