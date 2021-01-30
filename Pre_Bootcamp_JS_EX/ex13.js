const readlineSync = require("readline-sync");
let text = readlineSync.question("please write a sentence ");
let textsplit = text.split(" ");
let longestlength = 0;
let longestword = "";
for (let i = 0; i < textsplit.length; i++) {
  if (/^[a-zA-Z]+$/.test(textsplit[i]) && textsplit[i].length > longestlength) {
    longestlength = textsplit[i].length;
    longestword = textsplit[i];
  }
}
if (longestword == "") {
  console.log("You didn't enter any words!");
} else {
  console.log(longestword);
}
