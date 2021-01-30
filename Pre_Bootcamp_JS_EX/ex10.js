const readlineSync = require("readline-sync");
let text = readlineSync.question("please write a sentence ");
text = text.replace(/\s+/g, "*");
console.log(text);
