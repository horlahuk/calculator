function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    return "You can't divide by zero!";
  }
  return a / b;
}

let currentOperator = "";
let firstNum = "";
let secondNum = "";
let displayValue = "";

function operate(op, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return mul(a, b);
    case "/":
      return div(a, b);
    default:
      return "Invalid operator!";
  }
}

let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");

function updateDisplay() {
  display.value = displayValue;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "clear") {
      displayValue = "";
      firstNum = "";
      secondNum = "";
      currentOperator = "";
    } else if (value === "=") {
      if (firstNum && currentOperator && displayValue) {
        secondNum = displayValue;
        displayValue = operate(currentOperator, firstNum, secondNum);
        firstNum = displayValue;
        secondNum = "";
        currentOperator = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (firstNum && currentOperator && displayValue) {
        secondNum = displayValue;
        displayValue = operate(currentOperator, firstNum, secondNum);
        firstNum = displayValue;
        secondNum = "";
      } else {
        firstNum = displayValue;
      }
      currentOperator = value;
      displayValue = "";
    } else {
      displayValue += value;
    }

    updateDisplay();
  });
});
