function solution(line) {
	let [minX, minY, maxX, maxY] = [
		Number.MAX_SAFE_INTEGER,
		Number.MAX_SAFE_INTEGER,
		Number.MIN_SAFE_INTEGER,
		Number.MIN_SAFE_INTEGER,
	];
	const nodes = [];
	line.slice(0, line.length - 1).forEach((i, idx) => {
		line.slice(idx + 1).forEach((j) => {
			const [a, b, e] = i;
			const [c, d, f] = j;
			const m = a * d - b * c;
			if (m === 0) return;
			const [x, y] = [b * f - e * d, e * c - a * f];
			if (x % m || y % m) return;
			nodes.push([x / m, y / m]);
			[minX, minY, maxX, maxY] = [
				Math.min(minX, x / m),
				Math.min(minY, y / m),
				Math.max(maxX, x / m),
				Math.max(maxY, y / m),
			];
		});
	});
	const matrix = Array.from({ length: maxY - minY + 1 }, () =>
		Array.from({ length: maxX - minX + 1 }, () => '.')
	);
	nodes.forEach(([x, y]) => (matrix[maxY - y][x - minX] = '*'));
	return matrix.map((el) => el.join(''));
}