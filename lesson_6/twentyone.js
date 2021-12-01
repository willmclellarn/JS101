// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.
const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let deck = [];
  let faces = ["Hearts", "Diamonds", "Clubs", "Spades"];
  let cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  faces.forEach((face) => {
    cards.forEach((card) => {
      deck.push([card, face]);
    });
  });
  // console.log(deck);
  return deck;
}

function initialDeal(deck, playersCards, dealersCards) {
  while (playersCards.length !== 2 && dealersCards.length !== 2) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let currentCard = deck.splice(randomIndex, 1)[0];
    playersCards.push(currentCard);

    randomIndex = Math.floor(Math.random() * deck.length);
    currentCard = deck.splice(randomIndex, 1)[0];
    dealersCards.push(currentCard);
  }
  console.log(playersCards);
}

function dealCard(deck, hand) {
  randomIndex = Math.floor(Math.random() * deck.length);
  currentCard = deck.splice(randomIndex, 1)[0];
  hand.push(currentCard);
}
function displayPlayerCards(playersCards) {
  // console.clear();
  let displayString = "Player has: ";
  // console.log("Player has: ");
  playersCards.forEach((card, index) => {
    if (index !== playersCards.length - 1) {
      displayString += `${card[0]} of ${card[1]} and `;
    } else displayString += `${card[0]} of ${card[1]}.`;
  });
  console.log(displayString);
}
function displayDealersCards(dealersCards) {
  if (dealersCards.length === 2) {
    console.log(
      `Dealer has: ${dealersCards[0][0]} of ${dealersCards[0][1]} and an unknown card.`
    );
  }
}

function playerTurn(deck, playersCards) {
  console.log("time for the playa to play");
  console.log(`player, your current score is ${calculateScore(playersCards)}`);
  while (true) {
    prompt("Would you like to hit or stay?");
    answer = readline.question().trim();
    if (answer === "stay" || calculateScore(playersCards) > 21) break;
    dealCard(deck, playersCards);
    displayPlayerCards(playersCards);
  }
}

function calculateScore(cards) {
  let score = 0;
  let royals = ["Jack", "Queen", "King"];
  let numAces = 0;
  cards.forEach((card) => {
    if (typeof card[0] === "number") {
      score += card[0];
    } else if (royals.includes(card[0])) {
      score += 10;
    } else if (card[0] === "Ace") {
      numAces += 1;
      score += 11;
    }
  });
  if (score > 21 && numAces > 0) {
    for (let i = 0; i < numAces; i++) {
      score -= 10;
      if (score <= 21) {
        break;
      }
    }
    // try to convert aces from being worth 11 to being worth 1, one by one
    // see if that brings the total equal or under 21
  }
  // console.log(`score is ${score}`);
  return score;
}

let deck = initializeDeck();
let playersCards = [];
let dealersCards = [];
initialDeal(deck, playersCards, dealersCards);

displayDealersCards(dealersCards);
console.log("");
displayPlayerCards(playersCards);
console.log("");
playerTurn(deck, playersCards);

// let dummyCards = [
//   ["Queen", "Clubs"],
//   [8, "Diamonds"],
//   [8, "Diamonds"],
//   ["Ace", "Diamonds"],
// ];

// calculateScore(dummyCards);
