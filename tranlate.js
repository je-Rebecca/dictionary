const eBtn = document.querySelector('.eng'),
  kBtn = document.querySelector('.kor');

eBtn.addEventListener('click', gotoEng());
kBtn.addEventListener('click', gotoKor);

function gotoEng() {
  Location.href = 'https://je-rebecca.github.io/dictionary/eng';
}
function gotoKor() {
  Location.href = 'https://www.naver.com/';
}
