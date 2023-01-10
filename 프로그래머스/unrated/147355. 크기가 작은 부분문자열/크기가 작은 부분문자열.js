function solution(t, p) {
	let ans = 0;
	for (let i = 0; i <= t.length - p.length; i++)
		if (+t.slice(i, i + p.length) <= +p) ans++;
	return ans;
}