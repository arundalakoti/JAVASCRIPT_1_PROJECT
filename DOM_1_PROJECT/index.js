let val = 0;

function changeInputValue(val) {
  inputValue.setAttribute("value", val);
}

const inputValue = document.getElementById("input");
inputValue.setAttribute("value", val);

const decButton = document.getElementById("dec-button");
function decrement() {
  val--;
  changeInputValue(val);
}

const incButton = document.getElementById("inc-button");
function increment() {
  val++;
  changeInputValue(val);
}

function reset() {
  val = 0;
  changeInputValue(val);
}
