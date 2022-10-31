const number = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.reduce((prev, i) => prev * i, 1)
	.toString()
	.split("");
for (let i = 0; i < 10; i++)
	console.log(number.filter((num) => num === i.toString()).length);
