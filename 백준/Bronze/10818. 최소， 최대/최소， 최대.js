const numbers = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1)[0]
	.split(" ")
	.map((num) => Number(num));
console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`);
