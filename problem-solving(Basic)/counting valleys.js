function countingValleys(steps, path) {
	// Write your code here
	let valleys = 0;
	let alt = 0;

	for (let i = 0; i < steps; i++) {
		if (path[i] == "U") {
			alt++;
			if (alt == 0) {
				valleys++;
			}
		} else {
			alt--;
		}
	}
	return valleys;
}