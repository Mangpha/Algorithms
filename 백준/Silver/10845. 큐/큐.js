const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.slice(1);
const queue = [];
const ans = [];
input.forEach((cmd) => {
	switch (cmd) {
		case 'pop':
			ans.push(queue.length ? queue.shift() : -1);
			break;
		case 'size':
			ans.push(queue.length);
			break;
		case 'empty':
			ans.push(queue.length ? 0 : 1);
			break;
		case 'front':
			ans.push(queue.length ? queue[0] : -1);
			break;
		case 'back':
			ans.push(queue.length ? queue[queue.length - 1] : -1);
			break;
		default:
			queue.push(+cmd.split(' ')[1]);
			break;
	}
});
console.log(ans.join('\n'));
