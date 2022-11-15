const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1)
	.map(Number)
    .sort((a, b) => a - b);
console.log(input.join('\n'))