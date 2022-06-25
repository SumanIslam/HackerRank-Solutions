function main() {
	var i = 4;
	var d = 4.0;
	var s = "HackerRank ";
	// Declare second integer, double, and String variables.
	var a, b, c;

	// Read and save an integer, double, and String to your variables.
	a = readLine();
	b = readLine();
	c = readLine();
	// Print the sum of both integer variables on a new line.
	console.log(i + parseInt(a));
	// Print the sum of the double variables on a new line.
	console.log((d + parseFloat(b)).toFixed(1));
	// Concatenate and print the String variables on a new line
	// The 's' variable above should be printed first.
	console.log(s + c);
}
