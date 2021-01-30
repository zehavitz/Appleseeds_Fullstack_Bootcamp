const readlineSync = require("readline-sync");
function starGame() {
  console.log("/////---------Welcome To WAR--------////");
  let name = readlineSync.question("Please enter your name: ");
  console.log("Hello " + name + "  You currently have 50 dollars");
}
function playerBet(playerMoney) {
  let playerbet = readlineSync.question(
    "Place your bet for the next round: 1 to " + playerMoney + " "
  );
  if (
    isNaN(playerbet) ||
    playerbet % 1 != 0 ||
    playerbet <= 0 ||
    playerbet > playerMoney
  ) {
    console.log(
      "I said between 1 to " +
        playerMoney +
        " and you typed " +
        playerbet +
        " !!" +
        "\n" +
        "I don't play with liars!!! Bye!"
    );
    throw "End Game";
  } else {
    return Number(playerbet);
  }
}
function randomCard() {
  return Math.floor(Math.random() * 12) + 1;
}
function startRound(playerMoney) {
  let player1Bet = playerBet(playerMoney);
  let playerCard = randomCard();
  let computerCard = randomCard();
  if (playerCard > computerCard) {
    playerMoney = playerMoney + player1Bet;
    console.log(
      "My card is " +
        computerCard +
        " and your card is " +
        playerCard +
        "\n" +
        "You won " +
        player1Bet +
        " dollars and now you have " +
        playerMoney
    );
  } else if (playerCard < computerCard) {
    playerMoney = playerMoney - player1Bet;
    console.log(
      "Your card is " +
        playerCard +
        " and my card is " +
        computerCard +
        "\n" +
        "You lost " +
        player1Bet +
        " dollars and now you have " +
        playerMoney
    );
  } else {
    console.log(
      "Your card is " +
        playerCard +
        " and my card is " +
        computerCard +
        "\n" +
        "It's a draw! You keep your money :-) Let's play another round! "
    );
  }
  return playerMoney;
}
starGame();
let playerMoney = 50;
while (Number(playerMoney) > 0) {
  playerMoney = startRound(playerMoney);
  if (Number(playerMoney) == 0) {
    console.log("You are broke... Bye Bye!");
  } else {
    const options = ["Play another round", "Leave with my money :-)"];
    const index = readlineSync.keyInSelect(
      options,
      "What would you like to do? "
    );
    switch (Number(index + 1)) {
      case 0:
        console.log(
          "You chose to cancel the game! You leave with " +
            playerMoney +
            " Bye!"
        );
        throw "End Game";
      case 1:
        console.log("Let's play another round!");
        break;
      case 2:
        console.log(
          "You chose to end the game! You leave with " + playerMoney + " Bye!"
        );
        throw "End Game";
    }
  }
}
