function openEditOverlay(event) {
  overlay.style.display = "block";
  backdrop.style.display = "block";
  playerEditID = +event.target.parentElement.dataset.playerid;
  if (__debug) {
    console.log("openEditOverlay Function: PlayerID", playerEditID);
  }
}

function closeEditOverlay() {
  overlay.style.display = "none";
  backdrop.style.display = "none";
}

function changePlayername(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("name").trim();
  if (__debug) {
    console.log(enteredPlayername);
  }
  if (enteredPlayername) {
    document.querySelector(".players__playername" + playerEditID).textContent =
      enteredPlayername;
    document.querySelector("input").value = "";
    document.querySelector(".name-validation").style.display = "none";
    players[playerEditID - 1]["name"] = enteredPlayername;
    if (__debug) {
      console.log("Debug playersName change: ", players[playerEditID - 1]);
    }
    closeEditOverlay();
  } else {
    document.querySelector(".name-validation").style.display = "block";
  }
}
