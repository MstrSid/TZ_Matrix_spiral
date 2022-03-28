const w = +prompt('Input width matrix:');
const h = +prompt('Input height matrix:');

function getMatrix(w, h) {
	let matrix = new Array(h).fill().map(() => new Array(w).fill(0));
	let counter = 1;
	let startCol = 0,
		endCol = w - 1,
		startRow = 0,
		endRow = h - 1;

	while (startCol <= endCol && startRow <= endRow) {
		for (let i = startCol; i <= endCol; i++) {
			matrix[startRow][i] = counter;
			counter++;
		}
		startRow++;
		for (let i = startRow; i <= endRow; i++) {
			matrix[i][endCol] = counter;
			counter++;
		}
		endCol--;
		for (let i = endCol; i >= startCol; i--) {
			matrix[endRow][i] = counter;
			counter++;
		}
		endRow--;
		for (let i = endRow; i >= startRow; i--) {
			matrix[i][startCol] = counter;
			counter++;
		}
		startCol++;
		
	}
	return matrix;
}

console.log(getMatrix(w, h));