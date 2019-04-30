//target eleemnts on page in js
//target input elements 
//target DOM elements
//assign DOM element to input element 

var inputBox = document.querySelector(".inputbox");
var outputBox = document.querySelector(".changedoggo");
var button = document.querySelector(".dogname");
// querySelectors are used for targeting elememnts on the DOM in JavaScript

button.addEventListener("click", changeName);
// adding an event to element on the DOM 
// event listeners add an element

function changeName(event) {
	event.preventDefault();
	console.log(inputBox.value);
	console.log(outputBox.innerText);
	if (inputBox.value) {
	    outputBox.innerText = inputBox.value
	} else {
		return
	}
}

//preventDefault pustops the page from refreshing 
// assigning inputBox.value to  outputBox.inner 