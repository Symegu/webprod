const dateCalApplicationBtn = document.querySelector('.dateCalApplication');
const timerApplication = document.querySelector('.timerApplication');
const dateCalc = document.getElementById('datecalc');
const switchTimer = document.getElementById('timerForm');

dateCalApplicationBtn.addEventListener('click', () => {
    dateCalc.classList.toggle('hidden');
});

timerApplication.addEventListener('click', () => {
    switchTimer.classList.toggle('hidden');
});