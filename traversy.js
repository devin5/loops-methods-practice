const companies = [
  { name: "compmany-one", category: "finance", start: 1981, end: 2003 },
  { name: "compmany-two", category: "retail", start: 1982, end: 2001 },
  { name: "compmany-three", category: "auto", start: 1987, end: 1996 },
  { name: "compmany-four", category: "retail", start: 1984, end: 2008 },
  { name: "compmany-five", category: "tech", start: 1983, end: 2004 },
  { name: "compmany-six", category: "finance", start: 1981, end: 1993 },
  { name: "compmany-seven", category: "auto", start: 1987, end: 1998 },
  { name: "compmany-eight", category: "tech", start: 1988, end: 2003 },
  { name: "compmany-nine", category: "retail", start: 1989, end: 1993 }
];

const ages = [22, 44, 53, 22, 65, 87, 56, 43, 98, 23, 42, 75, 51, 14];
// descending for loop
// for (var i = ages.length - 1; i >= 0; i--) {
//     console.log(ages[i]);
//   }
//   asscending for loop
// for (var i = 0; i < ages.length; i++) {
//   console.log(ages[i]);
// }

// ages.forEach((age, index, allages) => console.log(age));

// const ofAge = [];

// for (var i = 0; i < ages.length; i++) {
//   if (ages[i] > 20) {
//     ofAge.push(ages[i]);
//   }
// }
// return console.log(ofAge);

// over21(ages);
// const ofAge = [];

// ages.forEach(function(item, index, wholeArrey) {
//   if (item > 20) {
//     ofAge.push(item);
//   }
// });
// console.log(ofAge);

// const ofAge = ages.filter((age) => {
//   if (age >= 21) {
//     return true;
//   }
// });

// const ofAge = ages.filter( age => age >= 21)

// console.log(ofAge);

// const autoCompanies = companies.filter(company => company.category === "auto");
// console.log(autoCompanies);
// const printAutoCompanies = array => {
//   array
//     .filter(company => company.category === "auto")
//     .map(company => console.log(company));
// };
// printAutoCompanies(companies);

// const printAutoCompanies = array => {
//   array
//     .filter(company => company.category === "auto")
//     .forEach(element => {
//       console.log(element);
//     });
// };
// printAutoCompanies(companies);

// const autoCompanies = companies.filter(company => company.category === "auto");
// console.log(autoCompanies);

// const companyNames = companies.map(company => {
//   return company.name;
// });

// console.log(companyNames);

// const sortedCompanies = companies.sort(function(c1, c2) {
//   if (c1.name > c2.name) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedCompanies);

// const sortedAges = ages.sort((a, b) => {
//   return a - b;
// });
// console.log(sortedAges);

// const ageSum = ages.reduce((total, age) => {
//   return total + age;
// }, 0);

// console.log(ageSum);
// let ageSum = 0;
// for (var i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// console.log(ageSum);

// const totalYears = companies.reduce((total, company) => {
//   return total + company.end - company.start;
// }, 0);

// console.log(totalYears);
 