import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const formEl = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stateInput = document.querySelector('input[name="state"]');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = Number(delayInput.value);
    const state = event.target.elements.state.value;
    
    const promise = new Promise((resolve, reject) => {
        console.log(state);
        if (state === 'fulfilled') {
            setTimeout(() => { resolve(delay) }, delay);
        } else {
            setTimeout(() => { reject(delay) }, delay);
        }
    });

    promise
    .then(delay => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
            backgroundColor: 'green',
            theme: 'dark',
            color: 'green',
            position: 'topRight'
        });
    })
    .catch(delay => {
        iziToast.error({
            title: 'Error',
            message: `❌ Rejected promise in ${delay}ms`,
            backgroundColor: 'red',
            theme: 'dark',
            color: 'red',
            position: 'topRight'
        });
    });

    delayInput.value = '';
    stateInput.checked = false;
 
})








