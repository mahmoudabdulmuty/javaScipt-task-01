// Selecting Elements
const sum = document.getElementById('sum');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const h1 = document.createElement('h1');
const clear = document.getElementById('clear');

// Sum onClick event
sum.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const sum = value1 + value2;
	document.body.appendChild(h1);
	h1.textContent = 'Result is ' + sum;
};

// minus onClick event
minus.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const minus = value1 - value2;
	document.body.appendChild(h1);
	h1.textContent = 'Result is ' + minus;
};

// multiply onClick event
multiply.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const multiply = value1 * value2;
	document.body.appendChild(h1);
	h1.textContent = 'Result is ' + multiply;
};

// divide onClick event
divide.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const divide = value1 / value2;
	document.body.appendChild(h1);
	if (Number.isNaN(divide)) {
		h1.textContent = 'Result is undefined';
	} else {
		h1.textContent = 'Result is ' + divide;
	}
};

// clear onClick event
clear.onclick = function () {
	document.getElementById('value1').value = '';
	document.getElementById('value2').value = '';
	h1.textContent = '';
};
