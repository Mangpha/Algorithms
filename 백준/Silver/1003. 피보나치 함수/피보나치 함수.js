const inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1);
const dict = {
	0: [1, 0],
	1: [0, 1],
	2: [1, 1],
};
const fib = (a, memo) => {
	if (a <= 2) return memo[a];
	if (!memo[a])
		memo[a] = [
			fib(a - 2, memo)[0] + fib(a - 1, memo)[0],
			fib(a - 2, memo)[1] + fib(a - 1, memo)[1],
		];
	return memo[a];
};
inputs.forEach((input) => {
	const ans = fib(input, dict);
	console.log(`${ans[0]} ${ans[1]}`);
});
