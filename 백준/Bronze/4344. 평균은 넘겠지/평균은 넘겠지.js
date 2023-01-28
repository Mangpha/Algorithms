const [C, ...input] = require('fs')
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n');
const std = input.map((el) => el.split('\n'));
console.log(
	std
		.map((el) => {
			const [N, ...i] = el[0].split(' ').map(Number);
			const avg = i.reduce((acc, cur) => acc + cur, 0) / N;
			return ((i.filter((e) => e > avg).length / N) * 100).toFixed(3) + '%';
		})
		.join('\n')
);
