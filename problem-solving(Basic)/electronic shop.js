function getMoneySpent(keyboards, drives, b) {
	/*
	 * Write your code here.
	 */
	let i, j;
	const length1 = keyboards.length;
	const length2 = drives.length;
	let moneSpent = 0;

	for (i = 0; i < length1; i++) {
		for (j = 0; j < length2; j++) {
			let cost = keyboards[i] + drives[j];
			if (cost <= b) {
				if (cost > moneSpent) {
					moneSpent = cost;
				}
			}
		}
	}
	return moneSpent ? moneSpent : -1;
}
