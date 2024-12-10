/* ESERCIZIO 1 */

const yourName = document.getElementById('name');
const btnSave = document.getElementById('save');
const btnCancel = document.getElementById('cancel');
const hello = document.getElementById('hello');


btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    const name1 = yourName.value;
    localStorage.setItem('user', name1);
    localStorage.getItem(name1);
    hello.innerText = `Ciao, ${name1}!`
    const nameForm = document.getElementById('nameForm');
    nameForm.reset();
})

btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear();
    hello.innerText = '';
})

/* ESERCIZIO 2 */
const counter = document.getElementById('counter');
let timer = 0
timer = parseInt(sessionStorage.getItem('timer'), 10) || 0;

setInterval(() => {
    timer ++; 
    counter.innerText = `${timer}`;
    sessionStorage.setItem('timer', timer);
}, 1000)
