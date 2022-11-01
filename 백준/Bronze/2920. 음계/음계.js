const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");

let ascending = true;
let descending = true;
let mixed = true;

for (let i = 1; i <= 8; i++)
	if (input[i - 1] !== i.toString()) ascending = false;
for (let i = 8; i >= 1; i--)
	if (input[8 - i] !== i.toString() || ascending) descending = false;
if (descending || ascending) mixed = false;
console.log(
	(ascending && "ascending") ||
		(descending && "descending") ||
		(mixed && "mixed")
);
