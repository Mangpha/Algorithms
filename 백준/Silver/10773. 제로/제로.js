const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const tmp = [];
for (let i of input.slice(1)) {
	if (i === '0') tmp.pop();
	else tmp.push(+i);
}
console.log(tmp.reduce((a, c) => a + c, 0));
