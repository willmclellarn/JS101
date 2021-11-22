<<<<<<< HEAD
let oddNumbers = [1, 2, 3].filter((number) => {
  return number % 2 === 1;
});

// let produce = {
//   apple: "Fruit",
//   carrot: "Vegetable",
//   pear: "Fruit",
//   broccoli: "Vegetable",
// };

// let produceKeyValues = Object.entries(produce);
// // produceKeyValues contains:
// //   [['apple', 'Fruit'],
// //    ['carrot', 'Vegetable'],
// //    ['pear', 'Fruit'],
// //    ['broccoli', 'Vegetable']]

// produceKeyValues.forEach((keyValue) => {
//   let [key, value] = keyValue;

//   console.log(`${key} is a ${value}`);
// });
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable

// [1, 2, 3].forEach((number, idx) => {
//   console.log(`${idx}: ${number}`);
// });

// "abcd".split("").forEach((char) => {
//   console.log(char);
// });
=======
[1, 2, 3].forEach(number => {
    console.log(number);
})

// function multiply(array, multiplier) {
//     return array.map(number => number * multiplier);
// }
// let myNumbers = [1, 4, 3, 7, 2, 6];

// console.log(multiply(myNumbers, 3));
// console.log(myNumbers);

// function doubleNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = numbers[i] * 2;
//     }
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]


// let produce = {
//     apple: 'Fruit',
//     carrot: 'Vegetable',
//     pear: 'Fruit',
//     broccoli: 'Vegetable'
//   };

//   function selectFruit(object) {
//     let selectedFruits = {};

//     for (const [key, value] of Object.entries(object)) {
//         // console.log(`${key}: ${value}`);
//         if (value === 'Fruit') {
//             selectedFruits[key] = value;
//         }
//       }
//       return selectedFruits;
//   }
  
//   let x = selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
//   console.log(x);
>>>>>>> 13725b111e94d07f185abd95d4f958a254f07b09
