const readline = require('readline-sync');

console.log("What's the principal (aka amount) of your loan?");
let principal = validateNumber(Number(readline.question()));
console.log(`Your principal is $${Intl.NumberFormat().format(principal)}`);

console.log("What's the APR of your loan? (enter 5 for 5%)");
let annualInterestRate = validateNumber(Number(readline.question()));
let x = 1 + (annualInterestRate / 100);
let y = (x ** (1 / 12));
let z = y - 1;
let monthlyInterestRate = z;
console.log(`Your Annual Interest Rate is ${annualInterestRate}%`);


console.log("What's your loan duration, in years?");
let loanDurationYears = validateNumber(Number(readline.question()));
let loanDuration = loanDurationYears * 12;
console.log(`Your Loan Duration is ${loanDurationYears} years.`);

function validateNumber(num) {
  while (isNaN(num)) {
    console.log("Sorry, that's not a number. Please try again!");
    num = Number(readline.question());
  }
  return num;
}

let monthlyPayment = principal * (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));

console.log(`Your monthly payment is $${Intl.NumberFormat().format(monthlyPayment)}`);
