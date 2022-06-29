function loops(n) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${n} x ${i} = ${n * i}`);
	}
}

function main() {
	const n = parseInt(readLine().trim(), 10);
	loops(n);
}