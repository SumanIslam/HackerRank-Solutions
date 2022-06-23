function getSecondLargest(nums) {
	// Complete the function
	const newArray = [...new Set(nums)];
	newArray.sort((a, b) => {
		return b - a;
	});

	return newArray[1];
}
