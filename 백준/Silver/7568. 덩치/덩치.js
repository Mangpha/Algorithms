const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const dif = (m1, m2) => m1[0] < m2[0] && m1[1] < m2[1];
const ans = [];
const p = input.slice(1).map((el) => el.split(' ').map(Number));
for (let i = 0; i < input[0]; i++) {
	let tmp = 0;
	for (let j = 0; j < input[0]; j++) {
		if (i === j) continue;
		if (dif(p[i], p[j])) tmp++;
	}
	ans.push(tmp);
}
console.log(ans.map((el) => ++el).join(' '));
