const resolutionBox = document.querySelector('.resolutionBox');
const form = document.querySelector('.js-form');
const input = form.querySelector('input');

const currentVal = 'currentVal';
const SHOW = 'showing';
const hide = 'hidden';

function saveName(text) {
  localStorage.setItem(currentVal, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.classList.remove(SHOW);
  printResolution(value);
  saveName(value);
  console.log('handleSubmit');
}
function askResoultion() {
  input.classList.add(SHOW);
  form.addEventListener('submit', handleSubmit);
  console.log('askForName');
}
function printResolution(text) {
  resolutionBox.textContent = text;
  resolutionBox.innerText = `${text}`;
  form.classList.add(hide);
  console.log('printResolution');
}
function loadResolution() {
  const currentValue = localStorage.getItem(currentVal);
  if (currentValue === null) {
    askResoultion();
    console.log('loadResolution_1');
  } else {
    printResolution(currentValue);
    console.log('loadResolution_2');
  }
}
loadResolution();
