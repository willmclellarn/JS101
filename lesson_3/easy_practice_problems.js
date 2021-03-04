// Question 1
// let numbers = [1, 2, 3];
// numbers[6] = 5;

// no error
// empty entries in an array initialize to....<3 empty items>
// freaking js! so confusing
// return value of an 'empty' index is undefined, but it's not truly undefined,
// it's empty - map() would return empty as well

// // Question 2
//
// function endsWithExclamation(str) {
//   return(str.slice(-1) === "!");
// }
//
// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false
//
// console.log(endsWithExclamation(str1));
// console.log(endsWithExclamation(str2));

// // Question 3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
//
// console.log((Object.keys(ages).includes('Spot')));
// better: ages.hasOwnProperty("Spot");

// // Question 4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
//
// let lowerCaseMunsters = munstersDescription.toLowerCase();
// let capitalizedAnswer = lowerCaseMunsters.charAt(0).toUpperCase() + lowerCaseMunsters.slice(1);
//
// console.log(capitalizedAnswer);

// Question 5
// answer = true / false

// // Question 6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// const merged = Object.assign(ages, additionalAges);
//
// console.log(merged);

// // Question 7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
//
// str1.includes('Dino');
// str2.includes('Dino');

// Question 8
// flintstones.push("Dino");

// Question 9
// use commas
//
// // Question 10
// let advice = "Few things in life are as important as house training your pet dinosaur.";
//
// // Expected return value:
// // => 'Few things in life are as important as '
//
// console.log(advice.slice(0, advice.indexOf('house')));
//
// // Question 1
// let advice = "Few things in life are as important as house training your pet dinosaur.";
// advice.replaceAll('important', 'urgent');

// Question 2
//
// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
//
// numbers.slice().reverse();
//
// numbers = [1, 2, 3, 4, 5];
// numbers.sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
//
// numbers.sort(...numbers); // wrong
//
// [...numbers].sort((num1, num2) => num2 - num1);

// // Question 3
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
//
// let number1 = 8;  // false
// let number2 = 95; // true
//
// numbers.includes(number1);

// // Question 4
// let famousWords = "seven years ago...";
// let str2 = "four score and ";
//
// console.log(str2 + famousWords);
// console.log(str2.concat(famousWords));

// Question 5
// Given an array of numbers [1, 2, 3, 4, 5], mutate the array
// by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let arr = [1, 2, 3, 4, 5]
// arr.splice(2,1);
// console.log(arr);
//
// // Question 6
// let arr = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
//
// console.log(arr.flat());

// Question 7
// Consider the following object:
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
//
// for (const [key, value] of Object.entries(flintstones)) {
//   if (key == 'Barney') {
//     return [key, value];
//   }
// }
//
// Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

study syntax::statement1.split('').filter(char => char === 't').length;
