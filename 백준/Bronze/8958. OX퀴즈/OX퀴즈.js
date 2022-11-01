const inputs = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1);
inputs.forEach((tc) => {
	let idx = 0;
	let ans = 0;
	let con = 0;
	while (idx < tc.length) {
		if (tc[idx] === "X") {
			con = 0;
			idx++;
			continue;
		}
		con++;
		idx++;
		ans += con;
	}
	console.log(ans);
});
