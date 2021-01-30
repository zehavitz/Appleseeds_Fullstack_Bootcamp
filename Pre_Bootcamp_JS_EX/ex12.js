const readlineSync = require("readline-sync");
let text = readlineSync.question("please write a sentence ");
text = text.replace(/[aeiouy]/g, char => {
  return char.toUpperCase();
});
console.log(text);
