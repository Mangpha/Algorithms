const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array(N + 1)
	.fill(0)
	.map((_) => Array(N + 1).fill(0));
for (let [i, j] of input.slice(1).map((el) => el.split(' ').map(Number))) {
	graph[i][j] = 1;
	graph[j][i] = 1;
}
const user = Array(N).fill(0);
const bfs = (start) => {
	let count = 0,
		ans = 0;
	const que = [[start, count]];
	const visited = Array(N + 1).fill(false);
	visited[start] = true;
	while (que.length) {
		const [next, d] = que.shift();
		for (let i = 1; i <= N; i++) {
			if (!visited[i] && graph[next][i]) {
				que.push([i, d + 1]);
				visited[i] = true;
				ans += d + 1;
			}
		}
	}
	return ans;
};
for (let i = 1; i <= N; i++) user[i - 1] = bfs(i);
console.log(user.indexOf(Math.min(...user)) + 1);
