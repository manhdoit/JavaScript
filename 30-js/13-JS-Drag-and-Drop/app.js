const king = document.querySelector('.chess-piece');
const squares = document.querySelectorAll('.square');
const infoDisplay = document.querySelector('#info');

king.addEventListener('drag', dragging);
king.addEventListener('dragstart', dragStart);

squares.forEach(square => {
	square.addEventListener('dragover', dragOver);
	square.addEventListener('dragenter', dragEnter);
	square.addEventListener('dragleave', dragLeave);
	square.addEventListener('drop', dragDrop);
	square.addEventListener('dragend', dragEnd);
})

let beingDragged

function dragStart(e) {
	beingDragged = e.target;
	console.log('dragging has started on' + beingDragged.id);
}

function dragging(e) {
	console.log(beingDragged.id + "is being dragged");
	infoDisplay.textContent = "You are dragging a " + beingDragged.id;
}


function dragOver() {
	console.log("You are dragging something " + e.target.classList)
}

function dragOver() {
	console.log("You are dragging something " + e.target.classList)
}

function dragOver() {
	console.log("You are dragging something " + e.target.classList)
}

function dragOver() {
	console.log("You are dragging something " + e.target.classList)
}

function dragOver() {
	console.log("You are dragging something " + e.target.classList)
}