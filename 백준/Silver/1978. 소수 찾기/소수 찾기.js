const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")[1]
	.split(" ")
	.map((el) => Number(el));
const check = (num) => {
	if (num === 2) return true;
	if (num === 1 || num % 2 === 0) return false;
	for (let i = 3; i <= Math.ceil(Math.sqrt(num)); i += 2)
		if (num % i === 0) return false;
	return true;
};
let ans = 0;
for (let num of input) if (check(num)) ans++;
console.log(ans);
