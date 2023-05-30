// Завдання 1 - перемикач кольорів
// Виконуй це завдання у файлах 01-color-switcher.html і 01-color-switcher.js. Подивися демо-відео роботи перемикача.

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let currentInterval = null;

const onStartBtnClick = () => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    currentInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000); 
    
}

const onStopBtnClick = () => {
    clearInterval(currentInterval);
    btnStart.disabled = false;
    btnStop.disabled = true;    
}

btnStart.addEventListener('click', onStartBtnClick);
btnStop.addEventListener('click', onStopBtnClick);

