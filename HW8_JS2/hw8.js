const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const btn = document.getElementById("calcBtn");
const result = document.getElementById("result");

function calculate() {
  const a = Number(num1.value);
  const b = Number(num2.value);
  let ans = 0;

  if (op.value === "+") ans = a + b;
  else if (op.value === "-") ans = a - b;
  else if (op.value === "*") ans = a * b;
  else if (op.value === "/") {
    if (b === 0) {
      alert("Cannot divide by zero");
      return;
    }
    ans = a / b;
  }

  result.textContent = "Result = " + ans.toFixed(2);
}

btn.addEventListener("click", calculate);