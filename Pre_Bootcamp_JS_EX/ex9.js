const readlineSync = require("readline-sync");
function isPrineNum(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

let x = readlineSync.question("please enter a positive integer number ");
while (isNaN(x) || x <= 0 || x % 1 != 0) {
  x = readlineSync.question("please enter a positive integer number ");
}
if (x == 1) {
  console.log("No prime numbers!");
} else {
  for (let j = 2; j <= x; j++) {
    if (isPrineNum(j)) {
      console.log(j);
    }
  }
}
