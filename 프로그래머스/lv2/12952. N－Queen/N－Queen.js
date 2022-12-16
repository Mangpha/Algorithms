function solution(n) {
	let ans = 0;
	const matrix = new Array(n + 1).fill(0);
	const check = (m, r) => {
		for (let i = 1; i < r; i++)
			if (m[i] === m[r] || Math.abs(i - r) === Math.abs(m[i] - m[r]))
				return false;
		return true;
	};
	const dfs = (m, r) => {
		if (check(m, r)) {
			if (r === n) ans++;
			else {
				for (let i = 1; i <= n; i++) {
					m[r + 1] = i;
					dfs(m, r + 1);
				}
			}
		}
	};
	dfs(matrix, 0);
	return ans;
}