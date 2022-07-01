function reverseArray(arr) {
	const reverseArray = arr.reverse();
	let output = "";

	reverseArray.forEach((el) => {
		output += el + " ";
	});

	console.log(output);
}

function main() {
	const n = parseInt(readLine().trim(), 10);

	const arr = readLine()
		.replace(/\s+$/g, "")
		.split(" ")
		.map((arrTemp) => parseInt(arrTemp, 10));
	reverseArray(arr);
}
