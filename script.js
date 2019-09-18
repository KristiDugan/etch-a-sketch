const etchASketch = document.querySelector('main');
const etchScreen = document.querySelector('#etch-screen');
const divMaker = num => {
	const grid = num * num;
	for (let i = 0; i < grid; i++) {
		let div = document.createElement('div');
		etchScreen.appendChild(div);
	}
};
divMaker(16); // Create default grid

let cells;

const cellFinder = () => {
	cells = document.querySelectorAll('#etch-screen div');
};

const cellListener = () => {
	cellFinder();
	cells.forEach( (cell) => {
		cell.addEventListener('mouseenter', () => {
			cell.classList.add('colored');
		});
	});
};

cellListener(); // Run for the first time

const erase = () => {
	etchASketch.classList.add('shake');
	cells.forEach( (cell) => {
		cell.classList.remove('colored');
	});
};

const resize = () => {
	let gridSize = prompt('What size grid this time?');
	etchScreen.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;

	// Empty old cells before making the new ones
	while (etchScreen.hasChildNodes()) {
		etchScreen.removeChild(etchScreen.firstChild);
	}

	divMaker(gridSize);
	cellListener(); // Find all new cells and listen for mouse
};

const resizeButton = document.querySelector('button#resize');
resizeButton.addEventListener('click', resize);

const eraseButton = document.querySelector('button#erase');
eraseButton.addEventListener('click', erase);

// Remove 'shake' animation class after it finishes
function removeAnimation(event) {
	this.classList.remove('shake'); // this refers to object where called, so 'etchASketch'
}
etchASketch.addEventListener('animationend', removeAnimation);
