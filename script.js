const submitBtn = document.querySelector('.submit-card');
const pointersBTns = document.querySelectorAll('.point-button');

function handlerSubmit(e) {
    console.log(e.target);
}

function handlerPoint(e) {
    console.log(e.target.value);
}

for (let i = 0; i < pointersBTns.length; i++) {
pointersBTns[i].addEventListener('click', (e) => handlerPoint(e))
}

submitBtn.addEventListener('click', (e) => handlerSubmit(e));

