const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [row, col] = input[0].split(" ").map(Number);
const matrix = input.slice(1);
let min = Number.MAX_SAFE_INTEGER;
const makeStr = (type) => {
	let str = "";
	if (type === "W") for (let i = 0; i < 8; i++) str += i % 2 === 0 ? "W" : "B";
	if (type === "B") for (let i = 0; i < 8; i++) str += i % 2 === 0 ? "B" : "W";
	return str;
};
const Wstr = makeStr("W");
const Bstr = makeStr("B");
const checkC = (bR, bC) => {
	let newW = 0;
	let newB = 0;
	for (let i = bR; i < bR + 8; i++) {
		const el = matrix[i].slice(bC, bC + 8);
		const checkW = el.split("").filter((j, idx) => j !== Wstr[idx]).length;
		const checkB = el.split("").filter((j, idx) => j !== Bstr[idx]).length;
		newW += i % 2 === 0 ? checkW : checkB;
		newB += i % 2 === 0 ? checkB : checkW;
	}
	return Math.min(newW, newB);
};
for (let i = 0; i <= row - 8; i++)
	for (let j = 0; j <= col - 8; j++) min = Math.min(min, checkC(i, j));
console.log(min);
