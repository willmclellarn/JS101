[
  [
    [1, 2],
    [3, 4],
  ],
  [5, 6],
].map((arr) => {
  return arr.map((elem) => {
    if (typeof elem === "number") {
      // it's a number
      return elem + 1;
    } else {
      // it's an array
      return elem.map((number) => number + 1);
    }
  });
});

// return array with 2 elements
//

// [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//   return element1.forEach(element2 => {
//     return element2.filter(element3 => {
//       return element3.length > 0;
//     });
//   });
// });

// [[1, 2], [3, 4]].map(arr => {
//   return arr.map(num => num * 2);
// });

// method call, map on the outer array
// must return an array with 2 elements
// [  ,  ]
// the first of which is itself an array of 2 elements
// where the num in each elemnt is doubled
// [[2, 4], [6, 8]]

// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

// myArr = undefined
// forEach iterates over each subarray, passing the value to arr
// map is then called on that array, iterating over each num
// if the number is greater than 5, map is returning the value of console.log,
// this has a side effect of loggig both 18, 7 & 12 to the console
// which is undefined, otherwise it doesn't have an explicit return, which thusly also
// returns undefined
//

// // hellooooo YouTube!
// let words = ["go", "ahead", "and", "jump"];

// let sortedWords = words.sort((a, b) => {
//   return a.length - b.length;
// });

// console.log(sortedWords);
