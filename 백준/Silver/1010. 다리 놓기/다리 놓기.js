const input = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.slice(1)
	.map((el) => el.split(' ').map(Number));

input.forEach((c) => {
	const [r, n] = c;
	let count = 1;
	for (let k = 0; k < (n - r > r ? r : n - r); k++) {
		count *= n - k;
		count /= k + 1;
	}
	console.log(count);
});