const yearDisplay = document.querySelector('.calendar-year');
const monthDisplay = document.querySelector('.calendar-month');
const dayDisplay = document.querySelector('.calendar-day');
const dayNumberDisplay = document.querySelector('.calendar-day-number');


const date  = new Date();

monthDisplay.innerText = date.toLocaleString(undefined, {month: 'long'})
dayDisplay.innerText = date.toLocaleString(undefined, {weekday: 'long'})
dayNumberDisplay.innerText = date.getDate();
yearDisplay.innerText = date.getFullYear();

