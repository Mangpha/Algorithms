const [a, b] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((num) => Number(num));
console.log(a > b ? ">" : a === b ? "==" : "<");
