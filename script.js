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

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name).join(", ");
console.log(names);
