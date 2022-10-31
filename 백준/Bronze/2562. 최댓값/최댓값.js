const inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split("\n")
	.map((num) => Number(num));
console.log(Math.max(...inputs))
console.log(inputs.indexOf(Math.max(...inputs)) + 1);
