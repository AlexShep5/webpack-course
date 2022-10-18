import { DateTime } from "./luxon.js";
import './howler.js';

export function diffDates (firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);

    if (firstDate > secondDate) {
        secondDate = [firstDate, firstDate = secondDate][0];
    }

    return secondDate.diff(firstDate, ['year', 'months', 'day']).toObject();
}

export function diffToHtml (diff) {
    return `
        <span>
            ${diff.years ? 'Лет: ' + diff.years : ''}
            ${diff.months ? 'Месяцев: ' + diff.months : ''}
            ${diff.days ? 'Дней: ' + diff.days : ''}
        </span>
    `
}

/*
    Управление таймером
*/

const timer_01 = {
    timerId: null,
    input: null,
    btnStart: null,
    btnStop: null,
    pMessage: null,
    sound: new Howl({src: ['src/sound.mp3'],}),

    start() {
        if (this.input.value <= 0) {
            this.error('Уставка таймера должно быть больше нуля');
        } else {
            this.pMessage.innerHTML = '';
            this.timerId = setInterval(() => {
                this.input.value--;
                if (this.input.value == 0) {
                    clearInterval(this.timerId);
                    this.btnStop.setAttribute('disabled', false);
                    this.btnStart.removeAttribute('disabled');
                    this.sound.play();
                }
            }, 1000);
            this.btnStart.setAttribute('disabled', false);
            this.btnStop.removeAttribute('disabled');
        }
    },

    stop() {
        clearInterval(this.timerId);
        this.btnStop.setAttribute('disabled', false);
        this.btnStart.removeAttribute('disabled');
    },

    error(mes) {
        this.pMessage.innerHTML = `${mes}`;
    }
}

export function getTimer(inputElm, btnStart, btnStop, pMessage) {
    const timer = {};
    Object.assign(timer, timer_01);
    timer.input = inputElm;
    timer.btnStart = btnStart;
    timer.btnStop = btnStop;
    timer.pMessage = pMessage;
    return timer;
}
