const [T, ...str] = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const valid = (l) => {
	const regex = new RegExp(/^(100+1+|01)+$/g);
	return regex.test(l);
};
console.log(str.map((el) => (valid(el) ? 'YES' : 'NO')).join('\n'));
