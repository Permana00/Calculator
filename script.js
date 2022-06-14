function clearValue() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  let number = document.getElementById("result").value;
  let resultValue = eval(number);
  document.getElementById("result").value = resultValue;
}
