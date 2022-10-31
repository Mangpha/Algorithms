const inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")[1]
	.split(" ");
const max = Math.max(...inputs);
const numbers = inputs
	.map((num) => (num / max) * 100)
	.reduce((prev, i) => prev + i, 0);
console.log(numbers / inputs.length);
