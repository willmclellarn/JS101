// 1. Display the initial empty 3x3 board.
// 2. Ask the user to mark a square.
// 3. Computer marks a square.
// 4. Display the updated board state.
// 5. If it's a winning board, display the winner.
// 6. If the board is full, display tie.
// 7. If neither player won and the board is not full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. Goodbye!
const readline = require("readline-sync");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(string) {
  console.log(string);
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop

  // valid square choices are those `board` keys whose values are spaces
  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");

  while (true) {
    prompt(`Choose a square (${emptySquares.join(", ")}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares.includes(square)) {
      break; // break if it's a valid square
    } else {
      prompt("Sorry, that's not a valid choice.");
    }
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  prompt("Computer is playing...");
  let emptySquares = Object.keys(board).filter((key) => {
    return board[key] === INITIAL_MARKER;
  });

  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares[randomIndex];
  board[square] = COMPUTER_MARKER;
}

// function validateChoice(square, board) {
//   console.log("validating");
//   let validChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   if (validChoices.includes(parseInt(square)) === false) {
//     return false;
//   } else if (board[square] !== " ") {
//     console.log("That place in the board has already been played.");
//     displayBoard(board);
//     return false;
//   }
//   return true;
// }

function checkForWinner(board) {
  return false;
}

let playing = true;

while (playing === true) {
  let board = initializeBoard();
  displayBoard(board);
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);
  checkForWinner(board);
  // break;
  playerChoosesSquare(board);
  computerChoosesSquare(board);
  displayBoard(board);
  checkForWinner(board);
  break;
}
