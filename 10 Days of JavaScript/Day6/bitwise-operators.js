function getMaxLessThanK(n, k) {
	let maxValue = 0;
	let i, j;

	let arr = [];

	for (i = 1; i <= n; i++) {
		arr.push(i);
	}

	for (i = 0; i < n; i++) {
		for (j = i + 1; j < n; j++) {
			let bitWiseValue = arr[i] & arr[j];
			// console.log(bitWiseValue);
			if (bitWiseValue < k && bitWiseValue >= maxValue) {
				maxValue = bitWiseValue;
			}
		}
	}
	return maxValue;
}
