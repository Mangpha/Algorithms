const numbers = require("fs")
	.readFileSync("./dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((el) => Number(el.split("").reverse().join("")));

console.log(Math.max(...numbers));
