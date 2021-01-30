var readlineSync = require("readline-sync");
console.log(
  "*****************\nWelcome to the quiz!\n*****************\nAre you an Angel?"
);
var sum = 0;
console.log("*****************\nquestion #1\n*****************");
var q1 = ["I hate animals", "Cats", "Dogs", "Snakes"],
  index1 = readlineSync.keyInSelect(q1, "Do you have any pets? ");
switch (Number(index1 + 1)) {
  case 2:
    sum += 3;
    break;
  case 3:
    sum += 5;
    break;
  case 4:
    sum += 2;
    break;
}

console.log("*****************\nquestion #2\n*****************");
var q2 = ["None", "Once a day", "Once a year", "Once a week"],
  index2 = readlineSync.keyInSelect(q2, "How often do you volunteer? ");
switch (Number(index2 + 1)) {
  case 2:
    sum += 5;
    break;
  case 3:
    sum += 1;
    break;
  case 4:
    sum += 2;
    break;
}
console.log("*****************\nquestion #3\n*****************");
var q3 = [
    "I'll help the person to get up",
    "I'll laugh and point on him",
    "I won't care and keep walking",
    "I'll wait to see if others help him"
  ],
  index3 = readlineSync.keyInSelect(
    q3,
    "What would you do if you see an old man falling? "
  );
switch (Number(index3 + 1)) {
  case 1:
    sum += 5;
    break;
  case 3:
    sum += 1;
    break;
  case 4:
    sum += 2;
    break;
}
console.log("*****************\nquestion #4\n*****************");
var q4 = [
    "Everytime I see them",
    "Never",
    "Only in the morning",
    "Why would I smile?"
  ],
  index4 = readlineSync.keyInSelect(
    q4,
    "How often do you smile to your co-workres? "
  );
switch (Number(index4 + 1)) {
  case 1:
    sum += 5;
    break;
  case 3:
    sum += 3;
    break;
}
console.log("*****************\nquestion #5\n*****************");
var q5 = ["Once a year", "Never", "Only in holidays", "Every week"],
  index5 = readlineSync.keyInSelect(
    q5,
    "How often do you visit your parents? "
  );
switch (Number(index5 + 1)) {
  case 1:
    sum += 2;
    break;
  case 3:
    sum += 3;
    break;
  case 4:
    sum += 5;
    break;
}
if (sum >= 15) {
  console.log(
    "***************\nYou are obviously an angel and we wish the world would have more people like you!\n***************"
  );
} else if (sum > 5) {
  console.log(
    "***************\nYou try to be an angel, but it's not enough!\n***************"
  );
} else {
  console.log(
    "***************\nYou should be ashamed of yourself, you are obviously not an angel!\n***************"
  );
}
