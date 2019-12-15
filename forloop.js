var cats = ["cole", "keneth", "oxford", "bessies"];
var count = 0;

function loop() {
  for (var i = 0; i < cats.length; i++) {
    cats[i] += " dias";
    count += 1;
  }
  return cats;
}

console.log(loop());
console.log(`there ${count} animals`);
