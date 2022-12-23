const input = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')[1]
	.split(' ')
	.map(Number);
const arr = [...new Set(input.slice().sort((a, b) => a - b))];
const findNum = (n) => {
	let start = 0;
	let end = arr.length - 1;
	let mid;
	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (arr[mid] === n) return mid;
		if (n < arr[mid]) end = mid - 1;
		else start = mid + 1;
	}
};
console.log(input.map(findNum).join(' '));