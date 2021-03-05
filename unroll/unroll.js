function unroll(squareArray) {
	// find dimensions of array: colums and rows will be the same which is array.length
	let m, n;
	m = n = squareArray.length;

	// we will need to move in 4 different directions (right, left, down, up), so lets use numbers to denote them; start at 0 to move to the right, 1, will move down, 2 will move left, 3 will move up
	let direction = 0;

	// we have four extremes- top row, bottom row, left column, and right column. These are just defined by the size of the array

	let top = 0; // top row is first row so zero
	let bottom = m - 1; //bottom row is full length -1 (its an array index)
	let left = 0; // left column is first column so zero
	let right = n - 1; //right column is full length -1 (its an array index);

	// define new result array
	const result = [];

	// loop logic to push into new array in correct order, and then make sure we don't revisit any numbers. We will increment top and left after we finish those rows/columns respectively, and decrementing bottom and right. This way they will eventually meet in the middle and then pass each other, at which point we will have no more elements.

	while (left <= right && top <= bottom) {
		// what elements we select will depend on our direction
		// starting at top left moving to the right:
		if (direction === 0) {
			// for loop for total number of elements in row/column based on its current 'position' in the squre
			for (let i = left; i <= right; i++) {
				result.push(squareArray[top][i]);
			}
			top++;
		} else if (direction == 1) {
			for (let i = top; i <= bottom; i++) {
				result.push(squareArray[i][right]);
			}
			right--;
		} else if (direction == 2) {
			for (let i = right; i >= left; i--) {
				result.push(squareArray[bottom][i]);
			}
			bottom--;
		} else if (direction === 3) {
			for (let i = bottom; i >= top; i--) {
				result.push(squareArray[i][left]);
			}
			left++;
		}
		// update direction by adding 1 to it (so its 1-4 which is the number of directions we have) and doing mod 4 (which will make it 1, 2 3, or 0)
		direction = (direction + 1) % 4;
	}

	// return new array
	return result;
}

module.exports = unroll;
