function solution(n) {
	const ans = Array(n)
		.fill()
		.map((_, idx) => Array(idx + 1));
	let idx = 0,
		x = -1,
		y = 0;
	while (n > 0) {
		for (let i = 0; i < n; i++) ans[++x][y] = ++idx;
		for (let i = 0; i < n - 1; i++) ans[x][++y] = ++idx;
		for (let i = 0; i < n - 2; i++) ans[--x][--y] = ++idx;
		n -= 3;
	}
	return ans.flat();
}