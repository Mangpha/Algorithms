let input = Number(require('fs').readFileSync('./dev/stdin').toString());
const solve = (n) => {
	let ans = 0;
	while (n > 0) {
		if (n % 5 === 0) return ans + n / 5;
		n -= 3;
		ans++;
		if (n === 0) return ans;
	}
	return -1;
};
console.log(solve(input));