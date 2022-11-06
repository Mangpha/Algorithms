const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const A = input[1]
	.split(" ")
	.map((el) => Number(el))
	.sort((a, b) => a - b);
const M = input[3].split(" ").map((el) => Number(el));
let ans = [];
const binarySearch = (target, start, end) => {
	let mid = 0;
	while (start <= end) {
		mid = Math.floor((start + end) / 2);
		if (A[mid] === target) return 1;
		if (A[mid] < target) start = mid + 1;
		if (A[mid] > target) end = mid - 1;
	}
	return 0;
};
M.forEach((m) => ans.push(binarySearch(m, 0, A.length - 1)));
console.log(ans.join("\n"));
