const [N, ...input] = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const dp = input.map((el) => el.split(' ').map(Number));
for (let i = 1; i < N; i++) {
	for (let j = 0; j < dp[i].length; j++) {
		if (j === 0 || j === dp[i].length - 1)
			dp[i][j] += dp[i - 1][j] || 0 + dp[i - 1][j - 1] || 0;
		else dp[i][j] += Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
	}
}
console.log(Math.max(...dp[dp.length - 1]));
