function solve(meal_cost, tip_percent, tax_percent) {
	// Write your code here
	console.log(
		Math.round(
			meal_cost +
				(tip_percent / 100) * meal_cost +
				(tax_percent / 100) * meal_cost
		)
	);
}
