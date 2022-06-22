function factorial(n) {
	// let sum = n;
	// while(n>1) {
	//     sum *= n-1;
	//     n--;
	// }

	// return sum;
  
	if (n == 1 || n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
