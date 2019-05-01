var nameOutput = document.querySelector('#dog__name');
var nameInput = document.querySelector('#name__input');
var btn = document.querySelector('#btn__submit');

btn.addEventListener('click',nameUpdate)

function nameUpdate(e) {
  e.preventDefault();
    nameInput.value ? nameOutput.innerText=nameInput.value : null;
}
