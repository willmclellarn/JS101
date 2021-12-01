// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= 17
// 6. If dealer busts, player wins.
// 7. Compare cards and declare winner.

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
}
function displayPlayerCards(playersCards) {
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

function calculateScore(cards) {
  return 12;
}

let deck = initializeDeck();
console.log(deck);
let playersCards = [];
let dealersCards = [];
initialDeal(deck, playersCards, dealersCards);

displayDealersCards(dealersCards);
console.log("");
displayPlayerCards(playersCards);
