const container = document.querySelector('main');
const divMaker = num => {
	const grid = num * num;
	for (let i = 0; i < grid; i++) {
		let div = document.createElement('div');
		container.appendChild(div);
	}
};
divMaker(16);

const cells = document.querySelectorAll('main div');

cells.forEach( (cell) => {
	cell.addEventListener('mouseenter', () => {
		cell.classList.add('colored');
	});
});






