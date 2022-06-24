function bonAppetit(bill, k, b) {
	let totalBill = bill.reduce((previousValue, currentValue) => {
		return previousValue + currentValue;
	});

	const billAnaShouldPay = (totalBill - bill[k]) / 2;

	const overCharged = parseFloat(b - billAnaShouldPay);

	if (b == billAnaShouldPay) {
		console.log("Bon Appetit");
	} else {
		console.log(overCharged);
	}
}
