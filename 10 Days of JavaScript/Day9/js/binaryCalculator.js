const result = document.querySelector('#res');
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btnClear = document.querySelector('#btnClr');
const btnEqual = document.querySelector('#btnEql');
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMul = document.querySelector("#btnMul");
const btnDiv = document.querySelector("#btnDiv");

btn0.addEventListener('click', (e) => {
	result.textContent += e.target.textContent;
});
btn1.addEventListener('click', (e) => {
	result.textContent += e.target.textContent;
});

btnSum.addEventListener('click', (e) => {
	result.textContent += e.target.textContent;
});
btnSub.addEventListener('click', (e) => {
	result.textContent += e.target.textContent;
});
btnMul.addEventListener('click', (e) => {
	result.textContent += e.target.textContent;
});
btnDiv.addEventListener('click', (e) => {
	result.textContent += e.target.textContent;
});

btnClr.addEventListener('click', () => {
	result.textContent = '';
})

btnEqual.addEventListener('click', () => {
	const s = result.textContent;
	let ans
	if (s.indexOf("+") != -1) {
		let array = s.split("+");
		console.log(array);
		let x = parseInt(array[0], 2);
		let y = parseInt(array[1], 2);
		
		let sum = x + y;
		ans = sum.toString(2);
		result.textContent = ans;
	} else if (s.indexOf("-") != -1) {
		let array = s.split("-");
		let x = parseInt(array[0], 2);
		let y = parseInt(array[1], 2);
		let sum = x - y;
		ans = sum.toString(2);
		result.textContent = ans;
	} else if (s.indexOf("*") != -1) {
		let array = s.split("*");
		let x = parseInt(array[0], 2);
		let y = parseInt(array[1], 2);
		let sum = x * y;
		ans = sum.toString(2);
		result.textContent = ans;
	} else if (s.indexOf("/") != -1) {
		let array = s.split("/");
		// let x = parseInt(array[0], 2);
		// let y = parseInt(array[2], 2);
		let x = Number(array[0]);
		let y = Number(array[1]);
		let sum = x / y;
		// ans = sum.toString(2);
		ans = "" + sum;
		result.textContent = ans;
	}
})