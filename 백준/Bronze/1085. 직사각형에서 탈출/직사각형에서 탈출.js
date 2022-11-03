const position = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((el) => Number(el));

console.log(
	Math.min(
		Math.min(position[2] - position[0], Math.abs(0 - position[0])),
		Math.min(position[3] - position[1], Math.abs(0 - position[1]))
	)
);
