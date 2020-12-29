const clockContainer = document.querySelector('.js-clock');
const clockTitle = document.querySelector('h1');

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  //setInterval : repeatedly calls a function or
  //executes a code snippet, with a fixed time delay
  //시간 계속 갱신하려면 setInterval.
}
init();
