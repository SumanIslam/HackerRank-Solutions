function sockMerchant(n, ar) {
	// Write your code here
	let i;
	let pairs = [];

	let taken = [];

	for (i = 0; i < n; i++) {
		let socks = ar[i];

		if (!taken.includes(socks)) {
			let match = ar.filter((it) => {
				return it == socks;
			});

			pairs.push(Math.floor(match.length / 2));
			taken.push(socks);
		}
	}

	const numOfPairs = pairs.reduce((previousValue, currentValue) => {
		return previousValue + currentValue;
	});

	return numOfPairs;
}
