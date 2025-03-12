// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const users = ['Max', 'Anna', 'Joel'];

// for (const user of users) {
//   console.log(user);
// }

// const loggedInUser = {
//   name: 'Max',
//   age: 32,
//   isAdmin: true
// };

// for (const propertyName in loggedInUser) {
//   console.log(propertyName);
//   console.log(loggedInUser[propertyName]);
// }

// let isFinished = false;

// while (!isFinished) {
//   isFinished = confirm('Do you want to quit?');
// }

// console.log('Done!');

function calculateSum() {
  const userNumber = document.getElementById("user-number");
  const output = document.querySelector("#calculated-sum");
  let number = 0;
  for (let i = 0; i <= parseInt(userNumber.value); i++) {
    // console.log(i);
    number = number + i;
    // console.log(number);
    output.style.display = "block";
  }

  output.innerText = number;
}

function highlightText() {
  const links = document
    .getElementById("highlight-links")
    .getElementsByTagName("a");

  for (const link of links) {
    // console.log(link);
    link.classList.add("highlight");
  }
}

const userData = {
  name: "Joshua",
  age: 28,
  city: "Böblingen",
};

function listUserData() {
  for (const key in userData) {
    // console.log(userData[key]);
    const output = key + ": " + userData[key];
    const li = document.createElement("li");
    li.innerText = output;
    document.getElementById("output-user-data").appendChild(li);
  }
}

function rollDice() {
  const numberToRoll = parseInt(
    document.getElementById("user-target-number").value
  );
  let roll = false;
  let i = 1;
  while (!roll) {
    let rolledNumber = Math.floor(Math.random() * (7 - 1) + 1);
    if (numberToRoll === rolledNumber || i === 100) {
      roll = true;
    }
    console.log(i + " " + rolledNumber);
    const li = document.createElement("li");
    li.innerHTML =
      "You rolled the number of <strong>" +
      rolledNumber +
      "</strong> in your " +
      i +
      " roll.";
    document.getElementById("dice-rolls").appendChild(li);
    i++;
  }
  document.getElementById("output-total-rolls").innerText = i - 1;
  document.getElementById("output-target-number").innerText = numberToRoll;
}

document
  .querySelector("#calculator button")
  .addEventListener("click", calculateSum);

document
  .querySelector("#highlight-links button")
  .addEventListener("click", highlightText);

document
  .querySelector("#user-data button")
  .addEventListener("click", listUserData);

document
  .querySelector("#statistics button")
  .addEventListener("click", rollDice);
