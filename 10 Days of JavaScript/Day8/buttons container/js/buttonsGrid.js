let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
// let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let value1 = document.getElementById("btn1").textContent;
let value2 = document.getElementById("btn2").textContent;
let value3 = document.getElementById("btn3").textContent;
let value4 = document.getElementById("btn4").textContent;
let value6 = document.getElementById("btn6").textContent;
let value7 = document.getElementById("btn7").textContent;
let value8 = document.getElementById("btn8").textContent;
let value9 = document.getElementById("btn9").textContent;

let clickButton = document.getElementById("btn5");

let btnArray = [value1, value2, value3, value6, value9, value8, value7, value4];
console.log(btnArray);

const rotate = (arr) => {
	const n = arr.length;
	let x = arr[n - 1];
	for (let i = n - 1; i >= 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = x;
	return arr;
};

clickButton.onclick = function () {
	rotate(btnArray);
	console.log(btnArray);
	btn1.textContent = btnArray[0];
	btn2.textContent = btnArray[1];
	btn3.textContent = btnArray[2];
	btn6.textContent = btnArray[3];
	btn9.textContent = btnArray[4];
	btn8.textContent = btnArray[5];
	btn7.textContent = btnArray[6];
	btn4.textContent = btnArray[7];
};
