const inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
inputs.forEach((input) => {
	const [repeat, string] = input.split(" ");
	if (!string) return;
	let str = "";
	string.split("").forEach((chr) => (str += chr.repeat(repeat)));
	console.log(str);
});
