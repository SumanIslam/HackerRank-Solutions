function performOperation(secondInteger, secondDecimal, secondString) {
	const firstInteger = 4;
	secondInteger = parseInt(secondInteger);
	console.log(firstInteger + secondInteger);

	const firstDecimal = 4.0;
	secondDecimal = parseFloat(secondDecimal);
	console.log(firstDecimal + secondDecimal);

	const firstString = "HackerRank ";
	console.log(firstString + secondString);
}
