const body = document.querySelector('body');

const IMG_NUM = 5;

function random() {
  const num = Math.floor(Math.random() * IMG_NUM);
  return num;
}
function printImage(imgNum) {
  const image = new Image();
  image.src = `imgs/${imgNum + 1}.jpg`;
  image.classList.add('bgImage');
  body.prepend(image);
}

function init() {
  const ran_num = random();
  printImage(ran_num);
}

init();
