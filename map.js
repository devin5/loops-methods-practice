var arr = [110, 50, 100, 160];
var money = 0;

const mapArray = discount => {
  arr.map(function(price) {
    money += price;
  });
  return (money = money - discount);
};
console.log(mapArray(80));
console.log(money);

const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

console.log(reverseString("devin"));
