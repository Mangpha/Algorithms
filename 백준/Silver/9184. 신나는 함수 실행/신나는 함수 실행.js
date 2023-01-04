const inputs = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));
const memo = Array(21)
	.fill()
	.map(() =>
		Array(21)
			.fill()
			.map(() => Array(21).fill(0))
	);
const w = ([a, b, c]) => {
	if (a <= 0 || b <= 0 || c <= 0) return 1;
	if (a > 20 || b > 20 || c > 20) return w([20, 20, 20]);
	if (memo[a][b][c] !== 0) return memo[a][b][c];
	else if (a < b && b < c)
		memo[a][b][c] = w([a, b, c - 1]) + w([a, b - 1, c - 1]) - w([a, b - 1, c]);
	else
		memo[a][b][c] =
			w([a - 1, b, c]) +
			w([a - 1, b - 1, c]) +
			w([a - 1, b, c - 1]) -
			w([a - 1, b - 1, c - 1]);
	return memo[a][b][c];
};
const ans = [];
for (let input of inputs) {
	if (input[0] === -1 && input[1] === -1 && input[2] === -1) continue;
	ans.push(w(input));
}
ans.forEach((el, idx) => {
	console.log(
		`w(${inputs[idx][0]}, ${inputs[idx][1]}, ${inputs[idx][2]}) = ${el}`
	);
});
