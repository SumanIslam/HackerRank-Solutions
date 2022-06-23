function getDayName(dateString) {
	let dayName;
	// Write your code here
	const date = new Date(dateString);
	const day = date.getDay();

	switch (day) {
		case 0:
			dayName = "Sunday";
			break;
		case 1:
			dayName = "Monday";
			break;
		case 2:
			dayName = "Tuesday";
			break;
		case 3:
			dayName = "Wednesday";
			break;
		case 4:
			dayName = "Thursday";
			break;
		case 5:
			dayName = "Friday";
			break;
		case 6:
			dayName = "Saturday";
	}
	return dayName;
}
