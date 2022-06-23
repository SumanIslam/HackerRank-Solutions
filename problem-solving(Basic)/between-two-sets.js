function GCD(n1, n2) {
	if (n2 == 0) return n1;

	return GCD(n2, n1 % n2);
}

function LCM(n1, n2) {
	if (n1 == 0 || n2 == 0) return 0;
	else {
		let gcd = GCD(n1, n2);
		return Math.abs(n1 * n2) / gcd;
	}
}

function getTotalX(a, b) {
	// Write your code here
	let i;

	let result = 0;
	let multiple = 0;

	let lcm = a[0];
	let gcd = b[0];

	for (i = 0; i < a.length; i++) {
		lcm = LCM(lcm, a[i]);
	}

	for (i = 1; i < b.length; i++) {
		gcd = GCD(gcd, b[i]);
	}

	while (multiple <= gcd) {
		multiple += lcm;

		if (gcd % multiple == 0) {
			result++;
		}
	}

	return result;
}
