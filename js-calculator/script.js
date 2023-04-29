let display = document.getElementById('display');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

function appendToDisplay(number) {
  display.value += number;
}

function clearDisplay() {
  display.value = '';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function performOperation(operation) {
  if (currentOperation !== null) {
    calculate();
  }
  firstOperand = display.value;
  currentOperation = operation;
  display.value = '';
}

function calculate() {
  if (currentOperation === null) {
    return;
  }
  secondOperand = display.value;
  if (currentOperation === '/' && secondOperand === '0') {
    alert('Cannot divide by zero');
    clearDisplay();
    return;
  }
  let result = 0;
  switch (currentOperation) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      break;
  }
  display.value = result;
  firstOperand = result;
  secondOperand = '';
  currentOperation = null;
}