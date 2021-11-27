const ARR = [
  { one: "1", two: 2 },
  [{ four: 5, three: 6 }, "three"],
  "three",
  { 2: "two", 3: "three" },
];

// const uuidFunc = () => {
//   let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
//   let sections = [8, 4, 4, 4, 12];
//   let uuid = "";

//   sections.forEach((num) => {
//     for (let i = 0; i < num; i++) {
//       let randIndex = Math.random() * (characters.length - 1);
//       console.log(Math.floor(randIndex));
//       uuid += characters[Math.floor(randIndex)];
//     }
//     if (num !== 12) {
//       uuid += "-";
//     }
//   });

//   console.log(uuid);
// };

// uuidFunc();

// let arr = [
//   ["a", 1],
//   ["b", "two"],
//   ["sea", { c: 3 }],
//   ["D", ["a", "b", "c"]],
// ];

// let obj = {};

// arr.forEach((array) => {
//   obj[array[0]] = array[1];
// });

// console.log(obj);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// let finalArr = arr.filter((obj) => {
//   return Object.values(obj)
//     .flat()
//     .every((num) => num % 2 === 0);
// });

// console.log(finalArr);

// let obj = {
//   grape: { type: "fruit", colors: ["red", "green"], size: "small" },
//   carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
//   apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
//   apricot: { type: "fruit", colors: ["orange"], size: "medium" },
//   marrow: { type: "vegetable", colors: ["green"], size: "large" },
// };

// let finalArr = Object.values(obj).map((object) => {
//   if (object.type == "fruit") {
//     return object.colors.map(
//       (color) => color[0].toUpperCase() + color.slice(1)
//     );
//   } else return object.size.toUpperCase();
// });

// console.log(finalArr);

// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

// let newArr = arr.map((array) => {
//   return array.filter((element) => {
//     return element % 3 === 0;
//   });
// });

// console.log(newArr);

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// let newArr = arr.map((object) => {
//   let newObject = {};
//   Object.keys(object).forEach((key) => {
//     newObject[key] = object[key] + 1;
//   });
//   return newObject;
// });

// console.log(newArr);

// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];

// let newArr = arr.map((array) => {
//   if (typeof array[0] === "string") {
//     return array.sort().reverse();
//   } else
//     return array
//       .sort((a, b) => {
//         return a - b;
//       })
//       .reverse();
// });

// console.log(newArr);

// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3],
//   ["blue", "black", "green"],
// ];

// arr.map((array) => {
//   if (typeof array[0] === "string") {
//     return array.sort();
//   } else
//     return array.sort((a, b) => {
//       return a - b;
//     });
// });

// console.log(arr);

// let obj = {
//   first: ["the", "quick"],
//   second: ["brown", "fox"],
//   third: ["jumped"],
//   fourth: ["over", "the", "lazy", "dog"],
// };

// Object.values(obj).forEach((array) => {
//   let joined_array = array.join("");
//   //console.log(joined_array.split(""));
//   console.log(
//     joined_array.split("").filter((char) => {
//       return ["a", "e", "i", "o", "u"].includes(char);
//     })
//   );
// });

// let munsters = {
//   herman: { age: 32, gender: "male" },
//   lily: { age: 30, gender: "female" },
//   grandpa: { age: 402, gender: "male" },
//   eddie: { age: 10, gender: "male" },
//   marilyn: { age: 23, gender: "female" },
// };

// // (Name) is a (age)-year-old (male or female).

// munsters_arr = Object.entries(munsters);
// console.log(munsters_arr[0]);

// Object.entries(munsters).forEach((array) => {
//   console.log(`${array[0]} is a ${array[1].age}-year-old ${array[1].gender}`);
// });

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// let age = 0;
// Object.values(munsters).forEach((object) => {
//   if (object.gender === "male") {
//     age += object.age;
//   }
// });

// console.log(age);

// let arr1 = [1, [2, 3], 4];

// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4;
// console.log(obj2);

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
