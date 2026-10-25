let count = 0;

const numberEl = document.getElementById("number");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const resetBtn = document.getElementById("resetBtn");

plusBtn.addEventListener("click", function () {
  count = count + 1;
  numberEl.textContent = count;
});

minusBtn.addEventListener("click", function () {
  count = count - 1;
  numberEl.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  numberEl.textContent = count;
});
