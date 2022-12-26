const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const M = input[1].split(' ').map(Number);
const N = input[3].split(' ').map(Number);
const dict = {};
M.forEach((num) => (dict[num] ? dict[num]++ : (dict[num] = 1)));
console.log(N.map((num) => dict[num] || 0).join(' '));
