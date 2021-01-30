const readlineSync = require("readline-sync");
const figlet = require("figlet");
figlet.text(
  "HANG MAN",
  {
    font: "Ghost",
    whitespaceBreak: true
  },
  function(err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

function roundGame(guesses) {
  console.log(`You have ${guesses} guesses
The word is:
${encryptedWord.join("")}`);
  let playerInput = readlineSync.question("What is your guess? ");
  while (!/^[a-zA-Z]$/.test(playerInput)) {
    playerInput = readlineSync.question(
      "Invalid input! Please enter one letter. What is your guess? "
    );
  }
  return inputCheck(playerInput, guesses);
}

function inputCheck(playerInput, guesses) {
  let isChanged = false;
  for (let j = 0; j < randomWord.length; j++) {
    if (encryptedWord[j] == "*") {
      if (playerInput.toLowerCase() == randomWord[j].toLowerCase()) {
        encryptedWord[j] = playerInput.toLowerCase();
        isChanged = true;
      }
    }
  }
  if (!isChanged) {
    guesses--;
  }
  console.log(encryptedWord.join(""));
  return guesses;
}
const wordsList = [
  "Avocado",
  "Banana",
  "Blueberry",
  "Coconut",
  "Grapefruit",
  "Mango",
  "Orange"
];

const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
let encryptedWord = new Array(randomWord.length).fill("*");
let totalGuesses = 10;

while (totalGuesses > 0 && randomWord.toLowerCase() != encryptedWord.join("")) {
  totalGuesses = roundGame(totalGuesses);
}
if (randomWord.toLowerCase() == encryptedWord.join("")) {
  console.log("Congratulation, you guessed the word!");
} else {
  console.log("Sorry, You lost the game!");
}
