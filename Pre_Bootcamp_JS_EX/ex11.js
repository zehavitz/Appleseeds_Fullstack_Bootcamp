const readlineSync = require("readline-sync");
function isPalindrome(s) {
  const len = s.length;
  if (len < 2) {
    return true;
  }
  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (s[i] != s[j]) {
      return false;
    }
  }
  return true;
}
const input = readlineSync.question("please input a string ");
if (isPalindrome(input)) {
  console.log(input + " is a Palindrome");
} else {
  console.log(input + " is not a Palindrome");
}
