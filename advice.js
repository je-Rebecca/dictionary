const advice = document.querySelector('.advice_js');

function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      advice.innerText = data.slip.advice;
    })
    .catch((err) => console.log(err));
}
getAdvice();
