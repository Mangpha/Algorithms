const [NM, Hs] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [n, m] = NM.split(" ").map(Number);
const trees = Hs.split(" ")
	.map(Number)
	.sort((a, b) => a - b);
let ans = 0;
let start = 0;
let end = trees[trees.length - 1];
const c = (target) =>
	trees.reduce((acc, cur) => (cur >= target ? (acc += cur - target) : acc), 0);
while (start <= end) {
	let mid = Math.floor((start + end) / 2);
	const target = c(mid);
	if (target >= m) {
		if (mid > ans) ans = mid;
		start = mid + 1;
	} else end = mid - 1;
}
console.log(ans);