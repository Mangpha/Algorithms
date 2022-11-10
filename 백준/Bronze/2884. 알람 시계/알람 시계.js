let [h, m] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(Number);
if (m - 45 < 0) {
	if (h - 1 < 0) h = 24;
	h -= 1;
	m = m + 15;
} else m -= 45;
console.log(h, m);
