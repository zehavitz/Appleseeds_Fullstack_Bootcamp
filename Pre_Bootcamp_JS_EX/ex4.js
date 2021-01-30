var readlineSync = require("readline-sync");

var peopleNum = readlineSync.question("How many people are you going with? ");
if (isNaN(Number(peopleNum)) || Number(peopleNum) <= 0 || peopleNum % 1 != 0) {
  throw "stop execution";
}
var isKosher = readlineSync.keyIn("Should it be Kosher? y/n ");

if (
  !(isKosher == "N" || isKosher == "n" || isKosher == "Y" || isKosher == "y")
) {
  throw "stop execution";
}

if (isKosher == "Y" || isKosher == "y") {
  var isLemehadrin = readlineSync.keyIn(
    "Should it be Kashrut Lemehadrin? y/n "
  );

  if (
    !(
      isLemehadrin == "N" ||
      isLemehadrin == "n" ||
      isLemehadrin == "Y" ||
      isLemehadrin == "y"
    )
  ) {
    throw "stop execution";
  }
}
var foodKind = ["Chinese", "Italian", "Vegan"],
  index = readlineSync.keyInSelect(foodKind, "What kind of food do you want? ");
if (Number(index) == -1) {
  console.log("You chose to cancel the order!");
} else {
  if (isKosher == "Y" || isKosher == "y") {
    if (isLemehadrin == "Y" || isLemehadrin == "y") {
      console.log(
        "You can visit Lantaricot resturant, it's Kosher Lemehadrin!"
      );
    } else {
      console.log("You can visit Avvazi resturant, it's Kosher!");
    }
  } else {
    console.log("You can visit Dixie resturant, it's not Kosher!");
  }
}
