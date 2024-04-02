// let arr = [5, 2, 1, -10, 8];

// const sortedArray = arr.sort((a, b) => (a > b ? -1 : 1));
// console.log(sortedArray);

// let arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = (arr) => {
//   return arr.map((x) => x).sort((a, b) => (a > b ? 1 : -1));
// };

// const sorted = copySorted(arr);
// console.log(arr);
// console.log(sorted);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((user) => user.name).join(", ");
// console.log(names);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// console.log(usersMapped[1].id);
// console.log(usersMapped[1].fullName);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// const sortByAge = (arr) => {
//   return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// };

// sortByAge(arr);
// console.table(arr);

// let arr = [1, 2, 3];

// const shuffle = (arr) => {
//   return arr.sort(() => Math.random() - 0.5);
// };

// shuffle(arr);
// console.log(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// const getAverageAge = (arr) => {
//   const sumOfAges = arr.reduce((acc, user) => acc + user.age, 0);
//   return sumOfAges / arr.length;
// };

// getAverageAge(arr);

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

const uniqueValues = (arr) => {
  return arr.filter((currValue, index) => arr.indexOf(currValue) === index);
};

console.log(uniqueValues(strings));
