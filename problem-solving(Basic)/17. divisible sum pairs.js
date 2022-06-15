function divisibleSumPairs(n, k, ar) {
	// Write your code here
	let count = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let sum = ar[i] + ar[j];
			if (i < j && sum % k == 0) {
				count++;
			}
		}
	}
	return count;
}
