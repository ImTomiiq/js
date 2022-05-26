/* const country = "Slovensko";
const continent = "Európa";
let population = "5 Miliónov";
const isIsland = false;
const language = "Slovenčina";

console.log(
  `Krajina: ${country}, Jazyk ${language}, Kontinent ${continent} a Populácia ${population} Ostrovná krajina? ${isIsland}`
); 

let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

const markBMI = console.log(markMass / (markHeight * markHeight));

const johnBMI = console.log(johnMass / (johnHeight * johnHeight));

let markHigherBMI = true;
console.log(markHigherBMI); */

/*let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark has more BMI ${markBMI}`);
} else {
  console.log(`John has more BMI ${johnBMI}`);
}
*/

/*const inputYear = "1991";
console.log(Number(inputYear) + 18, inputYear);
console.log(inputYear + 18); */

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({})); */

/* const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job!");
} */

/* let height;
if (height) {
  console.log("Is defined");
} else {
  console.log("is not defined");
} */

/*const favourite = Number(prompt("Whats your favourite number?"));

if (favourite === 23) {
  console.log("23 is amazaing number");
} else if (favourite === 7) {
  console.log("7 is also good num");
} else if (favourite === 9) {
  console.log("9 is also good number");
} else {
  console.log("Number is not 7´,9 or 23!");} */

/*const hasDriversLicens = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicens && hasGoodVision);
console.log(hasDriversLicens || hasGoodVision);
console.log(!hasDriversLicens);

const shouldDriver = hasDriversLicens && hasGoodVision;

/* if (shouldDriver) {
  console.log("Yes, she can drive");
} else {
  console.log("No she shouldnt drive");
}
*/
/*/*const isTired = true; // C
console.log(hasDriversLicens && hasGoodVision && isTired);

if (hasDriversLicens && hasGoodVision && !isTired) {
  console.log("Yes, she can drive");
} else {
  console.log("No she shouldnt drive");
} */

/*const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (97 + 12 + 101) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage === koalasAverage) {
  console.log("Draw");
} else if (dolphinsAverage > koalasAverage) {
  console.log("Dolphins Wins");
} else if (dolphinsAverage || koalasAverage <= 100) {
  console.log("Nobody wins, because of low score!");
} else {
  console.log("Koalas wins!");
} */

/*const day = "Monday";

if (day === "Monday") {
  console.log("Plan course structure");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos!");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples!");
} else if (day === "Friday") {
  console.log("Record Videos!");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
} */

/* switch (day) {
  case "Monday":
    console.log("1");
    break;
  case "Tuesday":
    console.log("2");
    break;
  case "Wednesday":
    console.log("3");
    break;
  case "Thursday":
    console.log("4");
    break;
  case "Friday":
    console.log("5");
    break;
  case "Saturday":
    console.log("6");
    break;
  case "Sunday":
    console.log("7");
    break;
  default:
    console.log("Invalid Day!");
} */

/* const age = 18;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water"); */

const bill = 430;
const lowerTip = (bill / 100) * 15;
const totalLowValue = bill + lowerTip;

const higherTip = (bill / 100) * 20;
const totalHigherTip = bill + higherTip;

const tipCalc =
  bill >= 50 && bill <= 300
    ? console.log(
        `The bill was ${bill}, the tip was ${lowerTip} and total value ${totalLowValue}`
      )
    : console.log(
        `The bill was ${bill}, the tip was ${higherTip} and total value ${totalHigherTip}`
      );
