function solution(places) {
	const cmd = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	const findP = (matrix) => {
		const res = [];
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) if (matrix[i][j] === 'P') res.push([i, j, 0]);
		}
		return res;
	};
	const check = (r, c) => r < 5 && c < 5 && r >= 0 && c >= 0;
	const bfs = (rc, matrix) => {
		const visited = Array.from({ length: 5 }, (_) => Array(5).fill(false));
		const que = [rc];
		while (que.length) {
			const [r, c, d] = que.shift();
			if (!visited[r][c]) {
				visited[r][c] = true;
				if (d && matrix[r][c] === 'P') return false;
				for (let command of cmd) {
					const row = r + command[0];
					const col = c + command[1];
					if (check(row, col) && d < 2 && matrix[row][col] !== 'X')
						que.push([row, col, d + 1]);
				}
			}
		}
		return true;
	};
	return places.map((place) => {
		const p = findP(place);
		return Number(p.map((el) => bfs(el, place)).every((el) => el));
	});
}