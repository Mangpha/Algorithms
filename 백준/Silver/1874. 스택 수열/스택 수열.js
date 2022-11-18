const array = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1)
	.map(Number);
const stack = [];
let idx = 1;
let str = [];
for (let i = 0; i < array.length; i++) {
	let target = array[i];
	while (idx <= target) {
		stack.push(idx);
		str.push("+");
		idx++;
	}
	str.push("-");
	if (stack.pop() !== target) {
		str = "NO";
		break;
	}
}
console.log(typeof str === "string" ? str : str.join("\n"));