window.addEventListener("load", function () {
  const inputField = document.getElementById("name");

  const maxlength = inputField.getAttribute("maxlength");
  document.getElementById("countername").textContent = maxlength;
  // console.log(site);
  function inputCounter(event) {
    console.log(event.target.value);
    const currentLength = inputField.value.length;
    const counter = document.getElementById("countername");
    const count = maxlength - currentLength;
    counter.textContent = count;
    if (count < maxlength * 0.25) {
      counter.style.color = "orange";
    }
    if (count < maxlength * 0.1) {
      counter.style.color = "red";
    }
  }
  inputField.addEventListener("input", inputCounter);
});
