const numbers = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1);
numbers.forEach((number) => {
	const [a, b] = number.split(" ").map((num) => Number(num));
	console.log(a + b);
});