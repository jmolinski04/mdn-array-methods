// Write a function filterRange(arr, a, b) that gets an array arr,
//looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//The function should not modify the array. It should return the new array.

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  const filtered = arr.filter((value) => {
    if (a <= value && b >= value) return value;
  });

  return filtered;
};

let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
