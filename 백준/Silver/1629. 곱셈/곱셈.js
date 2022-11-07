const [a, b, c] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map(BigInt);
const pow = (A, b) => {
	if (b == 0) return BigInt(1);
	let tmp = pow(A, BigInt(parseInt(b / BigInt(2))));
	if (b % BigInt(2) == 0) return (tmp * tmp) % c;
	else return (tmp * tmp * A) % c;
};
console.log(parseInt(pow(a, b)));
