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

/*const friends = ["Michael", "Steaven", "Peter"];

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
console.log(ages.includes(50)); */

/*const bill = [125, 555, 44];
const tipCalc =
  bill >= 50 && bill <= 300
    ? console.log(
        `The bill was ${bill}, the tip was ${} and total value ${totalLowValue}`
      )
    : console.log(
        `The bill was ${bill}, the tip was ${} and total value ${totalHigherTip}`
      ); */

/*const bills = [125, 555, 44];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills);
console.log(tips);
console.log(total); */

/*
console.log(jonas.age);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
*/
/*const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between job, age, firstname and lastName"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Slovakia";
jonas["twitter"] = "@kkokot";

console.log(jonas); */

/*console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
); */

/* const jonas = {
  firstName: "Jonas",
  lastName: "kokot",
  birthYear: 1990,
  job: "teacher",
  friends: ["Michael", "kokot", "ivan"],
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense === true ? "has" : "has not"
    } a driver's license`;
  },
};

jonas.calcAge();

console.log(jonas.getSummary()); */
/*
const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

console.log(`Mark's BMI: ${mark.calcBMI()} || John's BMI: ${john.calcBMI()}`);

if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
} else {
  console.log(`Mark's BMI (${mark.BMI}) is lower than John's (${john.BMI})`);
}

for (let rep = 1; rep <= 10; rep++) {
  console.log(` cau po ${rep}x`);
}
*/
/*const jonas = ["Jonas", "dsa", "Jonfgdas", "Jondasas", "Jonaws", "Jonadws"];

const types = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);

  types[i] = typeof jonas[i];

  console.log(types[i]);
  types.push(typeof jonas[i]);
} */

/*const years = [1991, 2007, 1969, 2020];

for (let i = years.length - 1; i >= 0; i--) {
  console.log(years[i]);
} */

/*let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

/*const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let y = 0; y <= bills.length - 1; y++) {
  const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  };
  tips.push(calcTip(bills[y]));
  totals.push(calcTip(bills[y]) + bills[y]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([1, 5, 3])); */

/*let lang = "English";
let population = 50000000;
let isIsland = false;

if (lang === "English" && population === 50000000 && isIsland !== true) {
  console.log("You should live in Portugal");
} else {
  console.log("Portugal does not meet your criteria");
} */

/*const language = "chinese";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}*/
/*const population = 33000000;

const populationCalc =
  population >= 33000000
    ? "POrtuagals population is above average"
    : "Portugals population is belowe average";

console.log(`${populationCalc}`);
*/
/*const percentageOfWorld1 = function (population) {
  return 7950063898 / population;
};
const describePopulation = function (country, population) {
  console.log(
    `${country} has ${population} milion poeple, which is about ${percentageOfWorld1(
      1449960124
    )}% of the world`
  );
};

describePopulation("China", 1441);
*/

const populatdssaions = [150, 1250, 35871, 40000];
