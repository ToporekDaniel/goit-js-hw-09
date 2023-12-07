import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const bigDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
      Notiflix.Notify.success('You can start ;-)');
    }

    startBtn.addEventListener('click', () => {
      const interval = setInterval(() => {
        const dateToCount = selectedDates[0].getTime() - new Date();
        console.log(dateToCount);
        console.log(convertMs(dateToCount));
        const { days, hours, minutes, seconds } = convertMs(dateToCount);
        daysTimer.innerHTML = addLeadingZero(days);
        hoursTimer.innerHTML = addLeadingZero(hours);
        minutesTimer.innerHTML = addLeadingZero(minutes);
        secondsTimer.innerHTML = addLeadingZero(seconds);
        if (dateToCount <= 0) {
          clearInterval(interval);
          daysTimer.innerHTML = '00';
          hoursTimer.innerHTML = '00';
          minutesTimer.innerHTML = '00';
          secondsTimer.innerHTML = '00';
          Notiflix.Notify.success('Your time is up.');
        }
      }, 1000);
      startBtn.setAttribute('disabled', 'true');
    });
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
