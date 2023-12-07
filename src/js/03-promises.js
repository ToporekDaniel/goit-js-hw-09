import Notiflix from 'notiflix';

const form = document.querySelector('form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="step"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(delay.value, step.value, amount.value);
});
