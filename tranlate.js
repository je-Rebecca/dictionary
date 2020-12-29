const eBtn = document.querySelector('.eng'),
  kBtn = document.querySelector('.kor');

eBtn.addEventListener('click', () => {
  location.search('eng.html');
});
kBtn.addEventListener('click', () => {
  location.search('kor.html');
});

// const url = '/';
// history.pushstate('', '', url);
// const state = { sitename: 'webisfree' };
