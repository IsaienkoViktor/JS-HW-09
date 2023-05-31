import Notiflix from 'notiflix';
// Завдання 3 - генератор промісів
// Виконуй це завдання у файлах 03 - promises.html і 03 - promises.js. 
// Подивися демо - відео роботи генератора промісів.

// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку 
// в мілісекундах, крок збільшення затримки для кожного промісу після першого 
// і кількість промісів, яку необхідно створити.


// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) 
// стільки разів, скільки ввели в поле amount.
// Під час кожного виклику передай їй номер промісу(position), що створюється,
//   і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).



// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//   який виконується або відхиляється через delay часу.Значенням промісу повинен бути об'єкт, 
//   в якому будуть властивості position і delay зі значеннями однойменних параметрів.
//   Використовуй початковий код функції для вибору того, що потрібно зробити з промісом -
//   виконати або відхилити.



// Бібліотека повідомлень
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.

// Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix.


const pageForm = document.querySelector('.form')


const onBtnclick = (event) => {
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);
  let position = 0;
  console.log(delay);
  console.log(step);
  console.log(amount);  

  for (let i = 1; i <= amount; i += 1) {
    position = i;       
    createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
  
}  

pageForm.addEventListener('submit', onBtnclick);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    console.log(position);
    console.log(delay);
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay }) // Fulfill
      } else {
        reject({ position, delay }) // Reject
      }
    }, delay)      
  })
  
    



}


