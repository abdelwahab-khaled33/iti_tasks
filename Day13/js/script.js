let button = document.querySelector("form button");
let inputs = document.querySelectorAll("form input");

button.addEventListener("click", () => {
  let valid = true;
  for (let input of inputs) {
    if (input.value == "") {
      valid = false;
      alert("fill inputs");
      break;
    }
  }
  if (valid) {
    console.log(`
        Name: ${inputs[0].value}
        Age: ${inputs[1].value}
        Job: ${inputs[2].value}
        }`);
  }
});
