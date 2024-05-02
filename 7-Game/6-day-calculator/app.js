const container = document.querySelector('.calculator');

document.addEventListener('click', function (e) {
	console.log(e.target.getAttribute('data-value'));
})