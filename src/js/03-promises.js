import Notiflix from 'notiflix';

const form = document.querySelector('form');
const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return new Promise((Fulfill, Reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Fulfill({ position, delay });
      } else {
        Reject({ position, delay });
      }
    }, delay);
  });
}
form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(firstDelay.value, delayStep.value, amount.value);

  const firstDelayValue = parseInt(firstDelay.value);
  const delayStepValue = parseInt(delayStep.value);
  const amountValue = parseInt(amount.value);

  for (let i = 0; i < amountValue; i++) {
    const realDelay = firstDelayValue + i * delayStepValue;
    createPromise(i + 1, realDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
