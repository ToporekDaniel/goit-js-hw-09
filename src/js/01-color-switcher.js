function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let colorChange;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  colorChange = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  clearInterval(colorChange);
});
