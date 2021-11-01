console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your form has been submitted.');
}

function complimentUserKitten(evt) {
	evt.preventDefault()
	alert("Great job mousing over kitten! You are good at exploring.")
}


let form = document.querySelector('form#contact');
let catImage = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
catImage.addEventListener('mouseover', complimentUserKitten)