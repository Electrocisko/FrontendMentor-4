const submitBtn = document.querySelector('.submit-card');
const pointersBTns = document.querySelectorAll('.point-button');
const buttonsContainer = document.querySelector('.point-buttons-container');
const iconContainer = document.querySelector('.icon-container');
const titleH2 = document.querySelector('h2');
const paragraph = document.querySelector('p');
const illustrationContainer = document.querySelector('.illustration-container');
const cardContainer = document.querySelector('.card-container');
const selected = document.querySelector('.selected');




function handlerSubmit(e) {
    buttonsContainer.classList.add('hidden');
    submitBtn.classList.add('hidden');
    iconContainer.classList.add('hidden');
    titleH2.innerText = 'Thank you!';
    paragraph.innerText= `  We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!`;
    illustrationContainer.classList.remove('hidden');
    cardContainer.classList.add('text-center');
    selected.classList.remove('hidden');
 
}

function handlerPoint(e) {
    console.log(e.target.value);
}

for (let i = 0; i < pointersBTns.length; i++) {
pointersBTns[i].addEventListener('click', (e) => handlerPoint(e))
}

submitBtn.addEventListener('click', (e) => handlerSubmit(e));

