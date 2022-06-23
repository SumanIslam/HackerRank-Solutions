function modifyArray(nums) {
	const newArray = nums.map((num) => {
		if (num % 2 === 0) {
			return num * 2;
		} else {
			return num * 3;
		}
	});

	return newArray;
}
