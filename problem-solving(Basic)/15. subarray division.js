function birthday(s, d, m) {
	// Write your code here
	const length = s.length;
	let wayCount = 0;

	for (let i = 0; i < length; i++) {
		let sum = 0;
		for (let k = i; k < i + m; k++) {
			sum += s[k];
		}

		if (sum === d) {
			wayCount++;
			continue;
		}
	}
	return wayCount;
}
