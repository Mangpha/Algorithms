const num = +require('fs').readFileSync('/dev/stdin').toString().trim();
let i = 1;
const conv = (n) =>
	n +
	n
		.toString()
		.split('')
		.map(Number)
		.reduce((a, b) => a + b, 0);
while (i < num) {
	if (conv(i) === num) break;
	i++;
}
console.log(conv(i) === num ? i : 0);
