import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import timer from "./timer.js"
import "./switcher.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  
  let { firstDate, secondDate } = event.target.elements;
  firstDate = firstDate.value, secondDate = secondDate.value;
  
  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const timerInput = document.getElementById("minute");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    const timerMinute = parseInt(timerInput.value) * 60
    timer(timerMinute);
});

stopBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('stop')
    clearInterval(timer);
});