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
  let firstValue = parseFloat(a);
  let secondValue = parseFloat(b);
  if (operator === "+") {
    return add(firstValue, secondValue);
  } else if (operator === "−") {
    return subtract(firstValue, secondValue);
  } else if (operator === "×") {
    return multiply(firstValue, secondValue);
  } else if (operator === "÷") {
    if (secondValue === 0) {
      return "Error! Can't divide by 0";
    }
    return divide(firstValue, secondValue);
  } else return "Error";
};

const display = document.getElementById("display");

const updateDisplay = function () {
  display.textContent = displayValue;
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
      removeBackground();
    } else if (
      buttonValue === "+" ||
      buttonValue === "−" ||
      buttonValue === "×" ||
      buttonValue === "÷"
    ) {
      if (firstValue === null) {
        firstValue = displayValue;
        console.log(firstValue + " |  " + secondValue);
        updateDisplay();
      } else if (
        (!isNaN(firstValue) && secondValue === null) ||
        !isNaN(secondValue)
      ) {
        secondValue = displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        firstValue = displayValue;
      }
      updateDisplay();
      displayValue = "";
      operator = buttonValue;
    } else if (!isNaN(buttonValue) || buttonValue === ".") {
      displayValue += buttonValue;
      updateDisplay();
    } else if (buttonValue === "=") {
      if (firstValue !== null && operator && displayValue !== "") {
        secondValue = displayValue;
        displayValue = operate(operator, firstValue, secondValue);
        firstValue = displayValue;
        updateDisplay();
        secondValue = null;
        operator = null;
        displayValue = "";
      }
    }
  });
});

const operation = document.querySelectorAll(".operation");
const operationArray = Array.from(operation);

operationArray.forEach((button) => {
  button.addEventListener("click", () => {
    operationArray.forEach((operator) => {
      operator.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});

const removeBackground = function () {
  const operation = document.querySelectorAll(".operation");
  const operationArray = Array.from(operation);

  operationArray.forEach((operator) => {
    operator.classList.remove("selected");
  });
};

const toggleNegative = () => {
  if (displayValue === "" || displayValue === 0) {
    return;
  }
  displayValue = displayValue * -1;
  updateDisplay();
};

const toggleNegativeBtn = document.querySelector(".toggleNegative");
toggleNegativeBtn.addEventListener("click", toggleNegative);
