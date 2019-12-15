function makePerson(name) {
  return {
    name: name,
    sum: (x, y) => console.log(x + y),
    speak: () => console.log(`hello my name is ${name}`)
  };
}

thomas = makePerson("Thomas");

thomas.sum(3, 3);
