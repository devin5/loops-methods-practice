const arr = [
  { name: "devin", age: "25" },
  { name: "ashley", age: "21" },
  { name: "brittney", age: "18" },
  { name: "alicia", age: "22" },
  { name: "raven", age: "20" },
  { name: "nastasia", age: "18" }
];

const findPerson = itemIndex => {
  const person = arr.find((item, index) => {
    return index === itemIndex;
  });
  return `Hello my name is ${person.name} i am ${person.age} years old`;
};

console.log(findPerson(2));
