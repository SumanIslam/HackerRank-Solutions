function breakingRecords(scores) {
	// Write your code here
	const length = scores.length;
	let countMin = 0;
	let countMax = 0;

	let minScore = scores[0];
	let maxScore = scores[0];

	for (let i = 1; i < length; i++) {
		if (scores[i] < minScore) {
			minScore = scores[i];
			countMin++;
			continue;
		}
		if (scores[i] > maxScore) {
			maxScore = scores[i];
			countMax++;
			continue;
		}
	}

	return [countMax, countMin];
}
