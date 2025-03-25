function resetGamefield() {
  console.log("Reset game");
  currentPlayer = 1;
  counter = 1;
  resultElement.style.display = "none";
  document.querySelector(".tictactoe__turn strong").textContent =
    players[currentPlayer - 1]["name"];
  for (const field of gamefields) {
    field.classList.remove("active");
    field.textContent = "";
  }
  for (const element of gameField) {
    for (let index = 0; index < 3; index++) {
      element[index] = 0;
    }
  }
  console.log(gameField);
  return;
}

function startGame() {
  console.log("Game start");
  document.querySelector(".tictactoe").style.display = "block";
  resetGamefield();
}

function switchPlayer() {
  if (+currentPlayer == 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  document.querySelector(".tictactoe__turn strong").textContent =
    players[currentPlayer - 1]["name"];
}

function checkForWinner() {
  // Rows winner?
  console.log("Game checks for winner");
  for (let i = 0; i < 3; i++) {
    if (
      !gameField[i][0] == 0 &&
      gameField[i][0] == gameField[i][1] &&
      gameField[i][1] == gameField[i][2]
    ) {
      console.log("row winner");
      return currentPlayer;
    }
  }
  // Cols winner?
  for (let i = 0; i < 3; i++) {
    if (
      !gameField[0][i] == 0 &&
      gameField[0][i] == gameField[1][i] &&
      gameField[1][i] == gameField[2][i]
    ) {
      console.log("col winner");
      return currentPlayer;
    }
  }

  if (
    !gameField[1][1] == 0 &&
    gameField[0][0] == gameField[1][1] &&
    gameField[1][1] == gameField[2][2]
  ) {
    console.log("Winner diagonal");
    return currentPlayer;
  }
  if (
    !gameField[1][1] == 0 &&
    gameField[2][0] == gameField[1][1] &&
    gameField[1][1] == gameField[0][2]
  ) {
    console.log("Winner diagonal");
    return currentPlayer;
  }

  if (counter == 9) {
    return -1;
  }
  return;
}

function gameLogic(event) {
  var target = event.target;
  if (!target.tagName === "LI" || target.textContent != "" || gameover) {
    console.log("Please chose diffrent field");
    return;
  }
  target.classList.add("active");
  target.textContent = players[currentPlayer - 1]["symbol"];
  var col = target.dataset.col;
  var row = target.dataset.row;
  gameField[row - 1][col - 1] = currentPlayer;
  var winner = checkForWinner();
  console.log(winner);
  if (winner < 0) {
    resultElement.querySelector("h2").innerText = "It's a draw!";
    resultElement.style.display = "block";
    gameover = true;
    return;
  }
  if (winner > 0) {
    resultElement.style.display = "block";
    resultElement.querySelector("h2").innerHTML =
      "You won, <span>" + players[currentPlayer - 1]["name"] + "</span>!";
    gameover = true;
    return;
  }
  switchPlayer();
  if (__debug) {
    // console.log(gameField);
  }
  counter++;
}
