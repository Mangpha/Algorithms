const inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [k, n] = inputs[0].split(" ").map((el) => Number(el));
const lengths = inputs.slice(1).map((el) => Number(el));

let start = 1;
let end = Math.max(...lengths);

while (start <= end) {
	let mid = Math.floor((start + end) / 2);
	let count = 0;
	for (let i = 0; i < k; i++) count += Math.floor(lengths[i] / mid);
	if (count >= n) {
		start = mid + 1;
	} else end = mid - 1;
}
console.log(end);
