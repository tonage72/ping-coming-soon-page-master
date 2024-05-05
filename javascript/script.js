const buttonNotifyMe = document.querySelector('.notify-button');
const inputEmail = document.getElementsByName('input-email')[0];
const errorDisplay = document.querySelector('.error');

buttonNotifyMe.addEventListener('click', e => {

	const inputValueEmail = document.getElementsByName('input-email')[0].value.trim();

	if (inputValueEmail === '') {
		displayError('Whoops! It looks like you forgot to add your email');
	} else if (!isEmail(inputValueEmail)) {
		displayError('Please provide a valid email address');
	} else {
		location.reload();
	}
})

function displayError(errorText) {
	errorDisplay.style.display = 'block';
	errorDisplay.innerText = errorText;
	inputEmail.style.borderColor = 'red';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}