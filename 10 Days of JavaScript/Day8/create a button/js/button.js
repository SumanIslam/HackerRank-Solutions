let count = 0;

let clickableButton = document.createElement("button");
clickableButton.id = "btn";
clickableButton.innerHTML = count;
document.body.appendChild(clickableButton);

let btn = document.getElementById("btn");

btn.onclick = function () {
	count++;
	btn.innerHTML = count;
};
