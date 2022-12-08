function solution(k, dungeons) {
	let ans = 0;
	const perm = (arr = dungeons, num = dungeons.length) => {
		const result = [];
		if (num === 1) return arr.map((el) => [el]);
		arr.forEach((f, i, o) => {
			const r = [...o.slice(0, i), ...o.slice(i + 1)];
			const p = perm(r, num - 1);
			const a = p.map((el) => [f, ...el]);
			result.push(...a);
		});
		return result;
	};
	for (let routes of perm()) {
		let count = 0;
		let h = k;
		for (let route of routes) {
			const [req, use] = route;
			if (h < req) break;
			h -= use;
			count++;
		}
		if (count === dungeons.length) return count;
		ans = Math.max(ans, count);
	}
	return ans;
}