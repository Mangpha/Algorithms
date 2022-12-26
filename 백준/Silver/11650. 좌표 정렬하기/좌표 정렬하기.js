const coords = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.slice(1)
	.map((coord) => coord.split(' ').map(Number));
console.log(
	coords
		.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
		.map((el) => el.join(' '))
		.join('\n')
);
