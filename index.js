const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

let displayValue = "",
  firstValue = null,
  secondValue = null,
  result = null,
  operator = null;

const operate = function (operator, a, b) {
  let firstValue = parseInt(a);
  let secondValue = parseInt(b);
  if (operator === "+") {
    return add(firstValue, secondValue);
  } else if (operator === "−") {
    return subtract(firstValue, secondValue);
  } else if (operator === "×") {
    return multiply(firstValue, secondValue);
  } else if (operator === "÷") {
    if (secondValue === 0) {
      return "Error";
    }
    return divide(firstValue, secondValue);
  } else return "Error";
};

const display = document.getElementById("display");

const updateDisplay = function () {
  display.textContent = displayValue;
};

const displayResult = function () {
  display.textContent = result;
};

const numberBtnNodeList = document.querySelectorAll(".btn");
const numberBtnArray = Array.from(numberBtnNodeList);

numberBtnArray.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    console.log(buttonValue);
    if (buttonValue === "AC") {
      displayValue = "";
      firstValue = null;
      secondValue = null;
      operator = null;
      updateDisplay();
    } else if (
      buttonValue === "+" ||
      buttonValue === "−" ||
      buttonValue === "×" ||
      buttonValue === "÷"
    ) {
      updateDisplay();
    } else if (!isNaN(buttonValue) || buttonValue === ".") {
      displayValue += buttonValue;
      updateDisplay();
    } else if (buttonValue === "=") {
    }
  });
});
