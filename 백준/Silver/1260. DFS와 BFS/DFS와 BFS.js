const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const [M, N, V] = input[0].split(' ').map(Number);
const MN = input.slice(1).map((el) => el.split(' ').map(Number));
const graph = Array.from({ length: M + 1 }, (_) => Array(M + 1).fill(0));
for (let [i, j] of MN) {
	graph[i][j] = 1;
	graph[j][i] = 1;
}
const ans = [];
const dfs = (node, visited) => {
	if (visited[node]) return;
	visited[node] = true;
	ans.push(node);
	for (let i = 1; i <= M; i++)
		if (!visited[i] && graph[node][i]) dfs(i, visited);
};
const bfs = (start) => {
	const que = [start];
	const visited = Array(M + 1).fill(false);
	const ans = [];
	while (que.length) {
		const node = que.shift();
		if (!visited[node]) {
			visited[node] = true;
			ans.push(node);
			for (let i = 1; i <= M; i++)
				if (!visited[i] && graph[node][i]) que.push(i);
		}
	}
	console.log(ans.join(' '));
};
dfs(V, Array(M + 1).fill(false));
console.log(ans.join(' '));
bfs(V);
