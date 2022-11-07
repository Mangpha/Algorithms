const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((el) => Number(el));
const ans = [];
const check = (num) => {
	if (num === 2) return true;
	if (num % 2 === 0 || num === 1) return false;
	for (let j = 3; j <= Math.ceil(Math.sqrt(num)); j += 2)
		if (num % j === 0) return false;
	return true;
};
for (let i = input[0]; i <= input[1]; i++) if (check(i)) ans.push(i);
console.log(ans.join("\n"));
