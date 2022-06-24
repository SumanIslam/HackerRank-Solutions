function dayOfProgrammer(year) {
	let month;
	let daysInFebruary = 0;

	// calculating daysInFebruary in a particular year depending on Leap Year
	if (year >= 1700 && year <= 1917) {
		// for Julian calendar
		if (year % 4 == 0) {
			daysInFebruary = "29";
		} else {
			daysInFebruary = "28";
		}
	} else {
		// for Gregorian calendar
		if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
			daysInFebruary = 29;
		} else {
			daysInFebruary = 28;
		}
	}

	// calculating the sum of all months of that particular year
	let sumOfMonths = 31 + parseInt(daysInFebruary) + 31 + 30 + 31 + 30 + 31 + 31;
	// calculating difference
	let difference = 256 - sumOfMonths;

	if (year >= 1700 && year <= 1917) {
		if (daysInFebruary == "28") {
			return `13.09.${year}`;
		} else {
			return `12.09.${year}`;
		}

		return result;
	} else if (year === 1918) {
		return `26.09.${year}`;
	} else {
		return `${difference}.09.${year}`;
	}
}
