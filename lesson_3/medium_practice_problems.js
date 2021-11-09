// // Question 1
// let space = " ";
// for (let i = 0; i < 10; i++) {
//   console.log(space + "The Flintstones Rock!");
//   space += " ";
// }
//
// Question 2
// let munstersDescription = "The Munsters are creepy and spooky.";
// // Return a new string that swaps the case of all of the letters:
//
// let munstersArr = munstersDescription.split('');
//
// for (let i = 0; i < munstersArr.length; i++) {
//   if (munstersArr[i] === munstersArr[i].toUpperCase()) {
//     munstersArr[i] = munstersArr[i].toLowerCase();
//   } else munstersArr[i] = munstersArr[i].toUpperCase();
// }
//
// console.log(munstersArr);
// let finalStr = munstersArr.join('');
// console.log(finalStr);
// console.log(munstersDescription);
//
// // Question 3
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }
//
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// // Question 4
// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }
//
// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// concat creates a new array, push mutates the caller
//
// // Question 5
// 0.9
// // 0.8999999999999999
// // false

//
// // Question 7
// 34

// Question 8
// got it wrong. objects pass by reference. so it does mutate the caller.

// // Question 9
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// console.log(rps());
// rps(), "rock"
// rps("rock", "paper"), rps("rock", "scissors")
// // "paper" // "rock"
// // returns "paper"
//
// // Question 10
// function foo(param = "no") {
//   return "yes";
// }
//
// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }
//
// bar(foo());
// // foo returns "yes"
// bar("yes")
// param !== "no"
// returns "no"
