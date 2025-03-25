// __debug== true for debuging js
const __debug = true;

// Variables needed for edit player name
const playerEditButtons = document.getElementsByClassName(
  "players__player-edit"
);
const overlay = document.getElementById("overlay-edit");
const backdrop = document.getElementById("backdrop");
const cancleButton = document.getElementById("cancleEdit");
const formElement = document.querySelector("form");
var playerEditID = "";
const players = [
  { name: "Player 1", symbol: "X" },
  { name: "Player 2", symbol: "O" },
];

// Game Start
const startButton = document.querySelector("#start-button");
const gamefields = document.querySelectorAll("li");
const resultElement = document.querySelector(".tictactoe__result");
var currentPlayer = 1;
var counter;
var gameover = false;
// var counter = 1;
const gameField = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

if (__debug) {
  console.log(
    "Debug 1: playerEditButtons: ",
    playerEditButtons,
    " Overlay: ",
    overlay,
    "Backdrop: ",
    backdrop
  );
}

//Events Edit
for (const editButton of playerEditButtons) {
  editButton.addEventListener("click", openEditOverlay);
}
cancleButton.addEventListener("click", closeEditOverlay);
backdrop.addEventListener("click", closeEditOverlay);
formElement.addEventListener("submit", changePlayername);
startButton.addEventListener("click", startGame);
for (const field of gamefields) {
  field.addEventListener("click", gameLogic);
}
