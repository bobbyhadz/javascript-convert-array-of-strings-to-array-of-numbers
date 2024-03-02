// EXAMPLE 1 - Convert Array of Strings to Array of Numbers in JavaScript

const arrOfStr = ['1', '2', '3'];

const arrOfNum = arrOfStr.map(str => {
  return parseInt(str, 10);
});

// 👇️ [1, 2, 3]
console.log(arrOfNum);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert Array of Strings to Array of Numbers using `Array.forEach()`

// const arrOfStr = ['1', '2', '3'];

// const arrOfNum = [];

// arrOfStr.forEach(str => {
//   arrOfNum.push(parseInt(str));
// });

// // 👇️ [1, 2, 3]
// console.log(arrOfNum);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Defining a reusable function

// function toNumbersArray(arr) {
//   const arrOfNum = [];

//   arr.forEach(str => {
//     arrOfNum.push(parseInt(str));
//   });

//   return arrOfNum;
// }

// console.log(toNumbersArray(['1', '2', '3'])); // 👉️ [1, 2, 3]
// console.log(toNumbersArray(['1', '2'])); // 👉️ [1, 2]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert Array of Strings to Array of Numbers using `for...of`

// const arrOfStr = ['1', '2', '3'];

// const arrOfNum = [];

// for (const element of arrOfStr) {
//   arrOfNum.push(parseInt(element));
// }

// console.log(arrOfNum); // 👉️ [1, 2, 3]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert a String to an Array of Numbers in JavaScript

// const str = '5,15,45';

// // 👇️ ['5', '15', '45']
// const arrOfStr = str.split(',');

// const arrOfNum = arrOfStr.map(element => {
//   return Number(element);
// });

// console.log(arrOfNum); // 👉️ [5, 15, 45]
