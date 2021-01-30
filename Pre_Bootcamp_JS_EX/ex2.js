var readlineSync = require("readline-sync");

function Sum() {
  var n1 = readlineSync.question("Please enter a number: ");
  var n2 = readlineSync.question("Please enter aother number: ");
  if (Number(n1) + Number(n2) == 10) {
    console.log("makes 10");
  } else {
    console.log("nope");
  }
}
Sum();
