let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };

// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// console.log(arr2[1].third[0]);

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// console.log(arr3[2]["third"][0].slice(0, 1));

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// console.log(obj1["b"][1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// console.log(Object.keys(obj2.third)[0]);

// let books = [
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     published: "1967",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     published: "1925",
//   },
//   { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
//   { title: "Ulysses", author: "James Joyce", published: "1922" },
//   { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
// ];

// console.log(
//   books.sort((book1, book2) => {
//     return Number(book1.published) - Number(book2.published);
//   })
// );

// let arr = ["10", "11", "9", "7", "8"];

// console.log(
//   arr.sort((a, b) => {
//     return b - a;
//   })
// );

// [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [5, 6],
// ].map((arr) => {
//   return arr.map((elem) => {
//     if (typeof elem === "number") {
//       // it's a number
//       return elem + 1;
//     } else {
//       // it's an array
//       return elem.map((number) => number + 1);
//     }
//   });
// });

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
