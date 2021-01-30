//Please pay attension that the previous attempt wasn't wrong.
// The instructions were to creates an array of the length of the integer input.
// I fixed the script according to your request, but you should change the instructions :-)
const readlineSync = require("readline-sync");
let numInput = Number(
  readlineSync.question("Please enter an integer number: ")
);
while (isNaN(numInput) || numInput % 1 != 0 || numInput <= 0) {
  numInput = Number(
    readlineSync.question("Wrong input! Please enter an integer number: ")
  );
}
let Arr = new Array(String(numInput));
for (let i = 0; i < numInput; i++) {
  Arr[i] = Math.floor(Math.random() * 50) + 1;
}
let min = Arr[0],
  max = Arr[0];
for (let j = 1; j < numInput; j++) {
  if (Arr[j] > max) {
    max = Arr[j];
  }
  if (Arr[j] < min) {
    min = Arr[j];
  }
}
console.log("Min is " + min);
console.log("Max is " + max);
