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