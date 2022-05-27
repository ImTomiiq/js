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

/*function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 5)); */

/* const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearUntilRetirement(1991, "Jonas"));
console.log(yearUntilRetirement(1950, "Jonas")); */

/*const scoreDolphins = 44 + 23 + 71;
const scoreKoalas = 65 + 54 + 49;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas) {
    console.log("Dolphins are winners!");
  } else {
    console.log("Koalas are winners!");
  }
};

const calcAverage = (scoreDolphins, scoreKoalas) => {
  const avgDolphins = scoreDolphins / 3;
  const avgKoalas = scoreKoalas / 3;
  console.log(`Dolphins average score is: ${avgDolphins}`);
  console.log(`Koalas average score is: ${avgKoalas}`);
  checkWinner(avgDolphins, avgKoalas);
  return avgDolphins, avgKoalas;
};

calcAverage(scoreDolphins, scoreKoalas); */

const friends = ["Michael", "Steaven", "Peter"];

console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const jonas = ["Jonas", "Kokot", 2037 - 1991, "LTechas", friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1995, 1997, 1999, 2005, 2010, 2020];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);

ages.push(50);
console.log(ages);

ages.unshift(69);
console.log(ages);

ages.pop();
ages.pop();
console.log(ages);

ages.shift();
console.log(ages.indexOf(27));
console.log(ages.includes(50));
