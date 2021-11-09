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