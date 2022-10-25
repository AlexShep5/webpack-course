import { diffDates, diffToHtml, getTimer } from './datecalc.js';
import { formatError } from './utils.js';
import { changeSection } from './switch.js';
import "../scss/style.scss";

const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc_result');

dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate) ;
        dateCalcResult.innerHTML = diffToHtml(diff)
    } else {
        dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля');
    }
}

/*
    Таймер
*/

const timeInp = document.getElementById('timeInp');
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const pMessage = document.getElementById('timer_message');

btnStart.addEventListener('click', handleTimerStart);
btnStop.addEventListener('click', handleTimerStop);

const timer = getTimer(timeInp, btnStart, btnStop, pMessage);
console.log(timer);

function handleTimerStart(event) {
    timer.start();
}

function handleTimerStop(event) {
    timer.stop();
}

/*
    Управление разделами
*/
const calcBtn = document.querySelector('.calcBtn');
const timerBtn = document.querySelector('.timerBtn');
const calcDiv = document.querySelector('.calc');
const timerDiv = document.querySelector('.timer');

calcBtn.addEventListener('click', () => {

    changeSection(0, [calcDiv, timerDiv], [calcBtn, timerBtn])
});

timerBtn.addEventListener('click', () => {

    changeSection(1, [calcDiv, timerDiv], [calcBtn, timerBtn])
});
