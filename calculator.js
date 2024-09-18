let display, value;

function updateDisplay() {
  display = document.getElementById("screen");
  value = parseFloat(display.value);
}

function expressAdd(itm){
  updateDisplay();
  display.value = display.value + itm;
  document.getElementById("screen").innerHTML = display.value;
}

// Unified function to evaluate and display the result
function evaluateExpression() {
  updateDisplay();
  try {
    let result = eval(display.value);
    display.value = result;
    document.getElementById("exp").innerHTML = result;
  } catch (e) {
    display.value = "Error";
    document.getElementById("exp").innerHTML = "Error";
  }
}

function clearError() {
  setTimeout(() => {
    let display = document.getElementById("screen"); // Get the display element
    display.value = "";
    document.getElementById("exp").innerHTML = "";
  }, 300); // 0.3 seconds
}

// Use evaluateExpression() for both functions
function answer() {
  evaluateExpression();
}

function calResult() {
  evaluateExpression();
}


let isRad = false;
function toggleRadDeg() {
  isRad = !isRad;
  alert(isRad ? "Switched to Radians" : "Switched to Degrees");
}

// Toggle between standard and inverse functions
function toggleInverse() {
  if (isInverse) {
    isInverse = false;
    alert("Switched to Standard Functions");
  } else {
    isInverse = true;
    alert("Switched to Inverse Functions");
  }
}

// First-Row function 
function calculateFac() {
  updateDisplay();

  if (!Number.isInteger(value) || isNaN(value) || value < 0) {
    alert("Invalid input for factorial. Please enter a non-negative integer.");
    return;
  }

  display.value = factorial(value);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Second-Row function
function calculateSin() {
  updateDisplay();

  let radians = isRad ? value : value * (Math.PI / 180);
  display.value = Math.sin(radians).toFixed(6);
}

function calculateLn() {
  if (display.value <= 0) {
    alert("Logarithm is only defined for positive numbers.");
    return;
  } else {
    updateDisplay();
    display.value = Math.log(value).toFixed(6);
  }
}

// Third-Row function
function constantPi() {
  let display = document.getElementById("screen");
  if (!isNaN(display.value[display.value.length - 1])) {
    display.value += '*' + Math.PI.toFixed(6);
  } else {
    display.value += Math.PI.toFixed(6);
  }
}

function calculateCos() {
  updateDisplay();
  let radians = isRad ? value : value * (Math.PI / 180);
  display.value = Math.cos(radians).toFixed(6);
}

function calculateLog() {
  if (display.value <= 0) {
    alert("Logarithm is only defined for positive numbers.");
    return;
  } else {
    updateDisplay();
    display.value = Math.log10(value).toFixed(6);
  }
}

// Fourth-Row function

function constantE() {
  updateDisplay();
  display.value += Math.E.toFixed(6);
}

function calculateTan() {
  updateDisplay();
  let radians = isRad ? value : value * (Math.PI / 180);
  display.value = Math.tan(radians).toFixed(6);
}

function calculateSqrt() {
  updateDisplay();

  if (!isNaN(value) && value >= 0) {
    display.value = Math.sqrt(value).toFixed(6);
  } else {
    alert("Invalid input for square root");
  }
}


// Fifth-Row function 

function calculateExp() {
  updateDisplay();

  if (!isNaN(value)) {
    display.value = Math.exp(value).toFixed(6);
  } else {
    alert("Invalid input for exponential");
  }
}

function calculatePower() {
  updateDisplay();
  let input = display.value.split('^');
  let base = parseFloat(input[0]);
  let exponent = parseFloat(input[1]);

  if (!isNaN(base) && !isNaN(exponent)) {
    display.value = math.pow(base, exponent).toFixed(6);
  } else {
    alert("Invalid input for power calculation");
  }
}


function clearScreen() {
display.value = "";
document.getElementById("exp").innerHTML = "";
}