const isPalindrome = str => {
  var str2 = str
    .split("")
    .reverse()
    .join("");
  //   if (str2 === str) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return str === str2;
};

console.log(isPalindrome("racecar"));
