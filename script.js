const container = document.querySelector('main');
const divMaker = num => {
	const grid = num * num;
	for (let i = 0; i < grid; i++) {
		let div = document.createElement('div');
		container.appendChild(div);
	}
};
divMaker(16); // Create default grid

const etchPad = document.querySelector('main');
let cells;

const cellFinder = () => {
	cells = document.querySelectorAll('main div');
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
	cells.forEach( (cell) => {
		cell.classList.remove('colored');
	});
};

const resize = () => {
	let gridSize = prompt('What size grid this time?');
	etchPad.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`;

	// Empty old cells before making the new ones
	while (etchPad.hasChildNodes()) {
		etchPad.removeChild(etchPad.firstChild);
	}

	divMaker(gridSize);
	cellListener(); // Find all new cells and listen for mouse
};

const resizeButton = document.querySelector('button#resize');
resizeButton.addEventListener('click', resize);

const eraseButton = document.querySelector('button#erase');
eraseButton.addEventListener('click', erase);

