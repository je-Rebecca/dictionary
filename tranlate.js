const eBtn = document.querySelector('.eng'),
  kBtn = document.querySelector('.kor');

eBtn.addEventListener('click', () => {
  history.pushState('', '', '/eng');
  // location.href = 'http://127.0.0.1:5501/eng.html';
});
kBtn.addEventListener('click', () => {
  location.href = 'http://127.0.0.1:5501/kor.html';
});

// const url = '/';
// history.pushstate('', '', url);
// const state = { sitename: 'webisfree' };
