const readlineSync = require("readline-sync");
let x = 100;
for (let i = 1; i <= x; i++) {
  if (i % 7 == 0 || String(i).charAt(0) == 7 || String(i).charAt(1) == 7) {
    console.log("BOOM");
  } else {
    console.log(i);
  }
}
