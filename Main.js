var nameOutput = document.querySelector('#dog__name');
var nameInput = document.querySelector('#name__input');
var btn = document.querySelector('#btn__submit');
var btnDog = document.querySelector(".btn__dogs")

btn.addEventListener('click',nameUpdate)
btnDog.addEventListener('click',toggleDisplayDog)

function nameUpdate(e) {
  e.preventDefault();
  nameInput.value ? nameOutput.innerText=nameInput.value :"";
  nameInput.value =""
}

function toggleDisplayDog(e) {
  e.preventDefault(); 
  btnDog ?e.target.parentNode.style.visibility="hidden":e.target.parentNode.style.visibility ="visible"
  console.log("yo")
}