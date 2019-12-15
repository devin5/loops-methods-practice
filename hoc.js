const arr = [
  { name: "thor", species: "dog" },
  { name: "staci", species: "dog" },
  { name: "mini", species: "cat" },
  { name: "spot", species: "cat" },
  { name: "kamala", species: "fish" },
  { name: "trump", species: "fish" },
  { name: "theo", species: "fish" }
];

// var dogs = [];

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].species === "dog") {
//     dogs.push(arr[i]);
//   }
// }

// var isDog = function(animal) {
//   return animal.species === "dog";
// };

// var dogs = arr.filter(isDog);

var dog = [];
arr.map(function(obj) {
  if (obj.species === "dog") {
    dog.push(obj);
  } else {
    return;
  }
});
console.log(dog);
