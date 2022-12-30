const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.slice(1)[0]
	.split(' ');
let tmp = input[0];
for (let i = 1; i < input.length; i++) tmp ^= input[i];
console.log(tmp === 0 ? 'cubelover' : 'koosaga');
