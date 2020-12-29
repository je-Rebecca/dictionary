const wordForm = document.querySelector('.js-word');
const wordList = document.querySelector('.js-wordList');
const wordinput = wordForm.querySelector('input');
const totalNum = wordForm.querySelector('.num');

const WORD_LS = 'words';
let wordArray = [];

function total() {
  const sumWord = wordList.childElementCount;
  totalNum.innerText = `${sumWord}`;
}
function saveWords() {
  localStorage.setItem(WORD_LS, JSON.stringify(wordArray));
  total();
}

function printValue(eng, kor) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'id';
  checkbox.addEventListener('click', () => {
    div.classList.toggle('checked');
  });
  const div = document.createElement('div');
  div.id = 'spanBox';
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const delBtn = document.createElement('button');
  delBtn.id = 'trashCan';
  const newId = wordArray.length + 1;

  delBtn.addEventListener('click', deleteWord);
  span1.innerText = eng;
  span2.innerText = kor;
  delBtn.innerText = '❌';
  li.appendChild(checkbox);
  li.appendChild(div);
  div.appendChild(span1);
  div.appendChild(span2);
  li.appendChild(delBtn);
  li.id = newId;
  wordList.appendChild(li);
  const wordObj = {
    english: eng,
    Korean: kor,
    id: newId,
  };
  wordArray.push(wordObj);
  saveWords();
}
// function lineOnWord(event){
//   const check = event.;
//   const span =check.n
// }

function deleteWord(event) {
  const btn = event.target;
  const li = btn.parentNode;
  wordList.removeChild(li);
  const cleanWords = wordArray.filter(function (word) {
    return wordArray.id !== parseInt(li.id);
  });
  wordArray = cleanWords;
  saveWords();
}

function handleSubmit(text) {
  // event.preventDefault();
  const currentVal = wordinput.value;
  let data = [];
  data = currentVal.split(':');
  let eng = data[0];
  let kor = data[1];
  printValue(eng, kor);
  clear();
}
function clear() {
  wordinput.value = '';
  // document.getElementById('textBox').value = '';
}

function loadWordList() {
  const wordsPair = localStorage.getItem(WORD_LS);
  if (wordsPair !== null) {
    const parsedWords = JSON.parse(wordsPair);
    parsedWords.forEach(function (wordArray) {
      printValue(wordArray.english, wordArray.Korean);
    });
  }
}
function inputCheck(event) {
  event.preventDefault();
  if (wordinput.value.includes(':')) {
    handleSubmit();
  } else {
    return alert(
      ': is nesccery \n ex) New York : a city in the northeastern US that is an important centre for finance '
    );
  }
  // console.log(wordinput.value.includes(':'));
  // if(wordinput.include =':';)
}

function init() {
  loadWordList();
  wordForm.addEventListener('submit', inputCheck);
  // wordForm.addEventListener('submit', handleSubmit);
}

init();
