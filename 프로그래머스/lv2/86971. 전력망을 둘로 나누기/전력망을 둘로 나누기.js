function solution(n, wires) {
	const matrix = {};
	wires.forEach((wire) => {
		const [i, j] = wire;
		matrix[i] = matrix[i] ? [...matrix[i], j] : [j];
		matrix[j] = matrix[j] ? [...matrix[j], i] : [i];
	});
	const search = (start, excpt) => {
		let count = 0;
		const que = [start];
		const visited = Array(n).fill(false);
		visited[start - 1] = true;
		while (que.length) {
			const curr = que.shift();
			matrix[curr].map((el) => {
				if (el !== excpt && !visited[el - 1]) {
					visited[el - 1] = true;
					que.push(el);
				}
			});
			count++;
		}
		return count;
	};
	let ans = Number.MAX_SAFE_INTEGER;
	wires.forEach((wire) => {
		const [i, j] = wire;
		const l = Math.abs(search(i, j) - search(j, i));
		ans = ans > l ? l : ans;
	});
	return ans;
}