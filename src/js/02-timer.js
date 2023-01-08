import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const element = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const daysCounter = document.querySelector('.timer [data-days]');
const hoursCounter = document.querySelector('.timer [data-hours]');
const minutesCounter = document.querySelector('.timer [data-minutes]');
const secondsCounter = document.querySelector('.timer [data-seconds]');

let selectedMS = 0;
let intervalId = null;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedMS = selectedDates[0].getTime();
        let nowMS = Date.now();

        startBtn.disabled = selectedMS < nowMS;

        if (selectedMS < nowMS) {
            Notify.failure('Please choose a date in the future')
        }
    }
};

startBtn.addEventListener('click', () => {
    startBtn.disabled = true

    if (selectedMS <= Date.now()) {
        Notify.failure('Please choose a date in the future')

        return;
    }

    element.disabled = true;

    tickTimer();
    intervalId = setInterval(tickTimer, 1000)
})

flatpickr(element, options)

function tickTimer() {
    if (selectedMS <= Date.now()) {
        clearInterval(intervalId);

        element.disabled = false;
        startBtn.disabled = false;

        return;
    }

    const counterData = convertMs(selectedMS - Date.now());

    daysCounter.textContent = addLeadingZero(counterData.days);
    hoursCounter.textContent = addLeadingZero(counterData.hours);
    minutesCounter.textContent = addLeadingZero(counterData.minutes);
    secondsCounter.textContent = addLeadingZero(counterData.seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0')
}

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
