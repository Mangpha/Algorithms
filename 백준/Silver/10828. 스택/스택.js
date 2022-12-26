const cmds = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.slice(1);
const stack = [];
let ans = [];
const run = (cmd) => {
	switch (cmd) {
		case 'pop':
			ans.push(stack.length ? stack.pop() : -1);
			break;
		case 'size':
			ans.push(stack.length);
			break;
		case 'empty':
			ans.push(stack.length ? 0 : 1);
			break;
		case 'top':
			ans.push(stack.length ? stack[stack.length - 1] : -1);
			break;
		default:
			const push = cmd.split(' ');
			stack.push(Number(push[1]));
			break;
	}
};
cmds.forEach(run);
console.log(ans.join('\n'));
