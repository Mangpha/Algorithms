const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const len = parseInt(input[0]);
const numbers = input
	.slice(1)
	.map((el) => Number(el))
	.sort((a, b) => a - b);
const ans = [];
ans.push(Math.round(numbers.reduce((p, i) => p + i, 0) / len));
ans.push(numbers[Math.floor((numbers.length - 1) / 2)]);
const dict = numbers.reduce((acc, cur) => {
	acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
	return acc;
}, {});
const mode = Object.keys(dict).reduce((acc, cur) =>
	dict[acc] > dict[cur] ? acc : cur
);
const maxKey = [];
for (key in dict) if (dict[key] === dict[mode]) maxKey.push(parseInt(key));
maxKey.sort((a, b) => a - b);
ans.push(maxKey.length < 2 ? maxKey[0] : maxKey[1]);
ans.push(Math.abs(Math.max(...numbers) - Math.min(...numbers)));
console.log(ans.join("\n"));
