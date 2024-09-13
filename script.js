"use strict";

//selecting elements
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let currentScore0El = document.getElementById("current--0");
let currentScore1El = document.getElementById("current--1");
let diceEl = document.querySelector(".dice");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");
let btnNew = document.querySelector(".btn--new");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//rolling dice functionality
btnRoll.addEventListener("click", function () {
  //1-generating random dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  //2-display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceRoll}.png`;
  //3-check for rolled 1 : if true switch player
  if (diceRoll !== 1) {
    //add dice score to current score
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
