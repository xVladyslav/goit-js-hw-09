import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false
});

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault();

  const { amount, delay, step } = e.target.elements;
  
  const amountValue = parseInt(amount.value);
  const delayValue = parseInt(delay.value);
  const stepValue = parseInt(step.value);

  if (amountValue <= 0) {
    Notify.warning('Amount has to be bigger than 0');

    return;
  }

  for (let i = 0; i < amountValue; i++) {
    const calculatedDelay = delayValue + i * stepValue;

    createPromise(i, calculatedDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`)
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  })
}
