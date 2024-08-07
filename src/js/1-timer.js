import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');

flatpickr (inputEl, {
// const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
        startBtn.disabled = true;
        iziToast.show({
            title: 'Error',
            message: 'Please choose a date in the future',
            position: 'topRight',
            backgroundColor: 'red',
            color: 'white',
            titleColor: 'white',
            messageColor: 'white',  
        })
    } else {
      startBtn.disabled = false;
    };
    
    console.log(selectedDates[0]);
    console.log('hello');
  },
});


startBtn.addEventListener('click', () => {
   const id = setInterval(() => {
    const diff = userSelectedDate - new Date();
    const timeObj = convertMs(diff);
     renderTime(timeObj);
     
     if (diff < 1000) {
       clearInterval(id)
     }
  }, 1000);
    startBtn.disabled = true;

  
    
}, );

function renderTime(timeObj) {
    secondsElem.textContent = `${timeObj.seconds}`.padStart(2,"0");
    minutesElem.textContent = `${timeObj.minutes}`.padStart(2,"0");
    hoursElem.textContent = `${timeObj.hours}`.padStart(2,"0");
    daysElem.textContent = `${timeObj.days}`.padStart(2,"0");
}

console.log(startBtn);
let userSelectedDate;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
