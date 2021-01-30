const readlineSync = require("readline-sync");
let x = readlineSync.question("please enter a positive integer number ");

while (isNaN(x) || x <= 0 || x % 1 != 0) {
  x = readlineSync.question("please enter a positive integer number ");
}
let result = 1;
for (let i = 1; i <= x; i++) {
  result *= i;
}
console.log(result);
