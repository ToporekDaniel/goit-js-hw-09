import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const bigDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const interval = setInterval(() => {
      const dateToCount = selectedDates[0].getTime() - new Date();
      console.log(dateToCount);
      console.log(convertMs(dateToCount));
      const { days, hours, minutes, seconds } = convertMs(dateToCount);
      daysTimer.innerHTML = days;
      hoursTimer.innerHTML = hours;
      minutesTimer.innerHTML = minutes;
      secondsTimer.innerHTML = seconds;
      if (dateToCount <= 0) {
        clearInterval(interval);
      }
    }, 1000);
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
