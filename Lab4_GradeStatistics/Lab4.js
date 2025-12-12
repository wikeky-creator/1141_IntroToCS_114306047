let count = 0;

const mathInput = document.getElementById("math");
const englishInput = document.getElementById("english");
const submitBtn = document.getElementById("submit");
const tbody = document.getElementById("tbody");

const avgMathEl = document.getElementById("avgMath");
const avgEnglishEl = document.getElementById("avgEnglish");
const avgAllEl = document.getElementById("avgAll");

function updateAverage() {
  const rows = tbody.querySelectorAll("tr");
  let sumMath = 0, sumEnglish = 0;

  rows.forEach(row => {
    sumMath += Number(row.children[1].textContent);
    sumEnglish += Number(row.children[2].textContent);
  });

  if (rows.length === 0) return;

  const avgMath = sumMath / rows.length;
  const avgEnglish = sumEnglish / rows.length;
  const avgAll = (avgMath + avgEnglish) / 2;

  avgMathEl.textContent = avgMath.toFixed(2);
  avgEnglishEl.textContent = avgEnglish.toFixed(2);
  avgAllEl.textContent = avgAll.toFixed(2);
}

submitBtn.addEventListener("click", function () {
  const math = Number(mathInput.value);
  const english = Number(englishInput.value);

  if (math < 0 || math > 100 || english < 0 || english > 100) {
    alert("Score must be between 0 and 100");
    return;
  }

  count++;

  const avg = (math + english) / 2;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${count}</td>
    <td>${math}</td>
    <td>${english}</td>
    <td>${avg.toFixed(2)}</td>
  `;

  tbody.appendChild(tr);
  updateAverage();

  mathInput.value = "";
  englishInput.value = "";
});