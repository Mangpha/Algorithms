function solution(maps) {
	const que = [[0, 0, 1]];
	maps[0][0] = 0;
	const cmd = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	while (que.length) {
		const [r, c, count] = que.shift();
		if (r === maps.length - 1 && c === maps[0].length - 1) return count;
		for (let i of cmd) {
			const n = [r + i[0], c + i[1], count + 1];
			if (
				n[0] >= 0 &&
				n[0] < maps.length &&
				n[1] >= 0 &&
				n[1] < maps[0].length &&
				maps[n[0]][n[1]] === 1
			) {
				maps[n[0]][n[1]] = 0;
				que.push(n);
			}
		}
	}
	return -1;
}