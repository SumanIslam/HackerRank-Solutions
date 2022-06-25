function pageCount(n, p) {
	// Write your code here
	let count1 = Math.floor(p / 2);
	let count2;

	if (n % 2 == 0) {
		count2 = Math.ceil((n - p) / 2);
	} else {
		count2 = Math.floor((n - p) / 2);
	}

	return count1 > count2 ? count2 : count1;
}
