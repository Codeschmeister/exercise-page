// function setPlayerName() {
//   let names = [];
//   let playerx = document.querySelector(
//     "#playerx .players__playername"
//   ).textContent;
//   let playero = document.querySelector(
//     "#playero .players__playername"
//   ).textContent;
//   if (playerx === "PLAYER NAME") {
//     playerx = document.querySelector("#playerx p").textContent;
//   }
//   if (playero === "PLAYER NAME") {
//     playero = document.querySelector("#playero p").textContent;
//   }
//   names.push(playerx, playero);
//   return names;
// }

// function styleChange(element, playerSign) {
//   element.textContent = playerSign;
//   element.classList.add("active");
// }

// function result(turn, fields) {
//   const winPossiblities = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
//   ];

//   for (const possibility of winPossiblities) {
//     if (possibility.every((value) => fields.includes(value))) {
//       if (__debug) {
//         console.log("We have a winner");
//       }
//       return "winner";
//     }
//   }
//   if (turn === 9) {
//     if (__debug) {
//       console.log("its a draw");
//     }
//     return "draw";
//   }
// }

// //degbug variable
// const __debug = true;

// // Toogles the class is-hidden with the css property display=none
// function toogleClass(element, selector) {
//   if (__debug) {
//     console.log(selector);
//   }
//   element.classList.toggle(selector);
// }
// const hideShowElement = "is-hidden";
// const stopScrolling = "stop-scrolling";

// // sets the name of the player if name is confirmed
// function setName(id, name) {
//   let selector = "#" + id + " .players__playername";
//   document.querySelector(selector).textContent = name;
//   if (__debug) {
//     console.log("Function setName: ", selector, name);
//   }
// }

// // Click Event for each edit button, once clicked the overlay opens
// const editButtons = document.querySelectorAll(".players__player-edit");
// const editOverlay = document.getElementById("overlay-edit");
// for (const editButton of editButtons) {
//   if (__debug) {
//     console.log("Edit Button: " + editButton);
//   }
//   editButton.addEventListener("click", function () {
//     const id = this.getAttribute("id");
//     document.querySelector("input").setAttribute("id", id);
//     toogleClass(editOverlay, hideShowElement);
//   });
// }
// // Confirmation of Player Name, if confirmend and player-name is plausible, the name is set
// const confirmEdit = document.getElementById("confirmEdit");
// confirmEdit.addEventListener("click", function () {
//   const inputField = document.querySelector("input").value;
//   const id = document.querySelector("input").getAttribute("id");
//   if (inputField && id) {
//     setName(id, inputField);
//     if (__debug) {
//       console.log(id);
//     }
//     toogleClass(editOverlay, hideShowElement);
//   }
// });

// // If cancle is clicked the overlay gets closed
// const cancleEdit = document.getElementById("cancleEdit");
// cancleEdit.addEventListener("click", function () {
//   toogleClass(editOverlay, hideShowElement);
// });

// // start- button Tic tac Toe
// const startButton = document.getElementById("start-button");
// startButton.addEventListener("click", function () {
//   document.querySelector(".tictactoe").classList.remove("is-hidden");
//   document.querySelector(".tictactoe__result").classList.add("is-hidden");

//   if (__debug) {
//     console.log("Game started");
//   }

//   // Get Player Names
//   var names = setPlayerName();
//   var playerxName = names[0];
//   var playeroName = names[1];

//   // set turn to 1 and set seleced Fields for each player
//   var turn = 1;
//   var playerxFields = [];
//   var playeroFields = [];

//   // to remove click event all other functions need to be injected here
//   function onlytoAdd() {
//     //remove eventlistener from clicked Element
//     this.removeEventListener("click", onlytoAdd);
//     const index = Array.from(singleGamefields).indexOf(this) + 1;
//     var results;
//     var currentPlayer;
//     const resultElement = document.querySelector(".tictactoe__result");
//     if (turn % 2 !== 0) {
//       styleChange(this, "X");
//       document.querySelector(".tictactoe__turn strong").textContent =
//         playeroName;
//       playerxFields.push(index);
//       results = result(turn, playerxFields);
//       currentPlayer = playerxName;
//     }
//     if (turn % 2 === 0) {
//       styleChange(this, "O");
//       document.querySelector(".tictactoe__turn strong").textContent =
//         playerxName;
//       playeroFields.push(index);
//       results = result(turn, playeroFields);
//       currentPlayer = playeroName;
//     }
//     if (results === "winner") {
//       resultElement.innerHTML =
//         "You are the winner, <span>" + currentPlayer + "</span>!";
//       resultElement.classList.remove(hideShowElement);
//     }
//     if (results === "draw") {
//       resultElement.innerHTML = "It's a draw!";
//       resultElement.classList.remove(hideShowElement);
//     }
//     if (__debug) {
//       console.log(turn);
//       console.log(index);
//       console.log(playerxFields, playeroFields);
//     }
//     turn++;
//   }
//   // get all single fields to give them click event and start click event
//   const singleGamefields = document.querySelectorAll(".tictactoe__singlefield");
//   for (const singleGamefield of singleGamefields) {
//     singleGamefield.textContent = "";
//     singleGamefield.classList.remove("active");
//     singleGamefield.addEventListener("click", onlytoAdd);
//   }
// });
