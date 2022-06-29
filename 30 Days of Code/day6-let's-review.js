function processData(input) {
	let array = input.split("\n");
	// console.log(array)
	let i, j;
	let n = parseInt(array[0]);

	for (i = 1; i <= n; i++) {
		let length = array[i].length;
		let evenString = "";
		let oddString = "";

		for (j = 0; j < length; j++) {
			if (j % 2 == 0) {
				evenString += array[i][j];
			} else {
				oddString += array[i][j];
			}
		}
		console.log(`${evenString} ${oddString}`);
	}
}
