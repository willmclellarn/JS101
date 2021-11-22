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
