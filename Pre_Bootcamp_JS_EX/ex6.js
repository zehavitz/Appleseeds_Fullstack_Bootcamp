const readlineSync = require("readline-sync");
let x = readlineSync.question("please enter an integer number larger than 10 ");
while (isNaN(x) || x <= 10 || x % 1 != 0) {
  x = readlineSync.question("please enter an integer number larger than 10 ");
}
console.log("Thank You!");
