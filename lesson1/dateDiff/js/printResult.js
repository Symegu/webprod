const result = document.getElementById('datecalc__result');

export const printError = (errorText) => {
  result.innerText = errorText; 
}

export const printResult = (date) => {
  result.innerText = date;
}