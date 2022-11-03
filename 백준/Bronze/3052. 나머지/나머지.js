const set = new Set();
require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((el) => Number(el))
	.map((num) => set.add(num % 42));
console.log(set.size);
