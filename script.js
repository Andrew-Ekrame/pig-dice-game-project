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
let scores, currentScore, activePlayer, playing;

//starting conditions
const resetGame = function () {
  diceEl.classList.add("hidden");
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
resetGame();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //1- add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2- check if current player score >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      //3- switch player
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", resetGame);
