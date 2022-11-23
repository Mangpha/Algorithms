function solution(n, k) {
	let num = n
		.toString(k)
		.split('0')
		.filter((el) => el !== '')
		.map(Number);
	const check = (i) => {
		if ((i % 2 === 0 && i !== 2) || i === 1) return false;
		for (let j = 3; j <= Math.sqrt(i); j += 2) if (i % j === 0) return false;
		return true;
	};
	return num.filter((el) => check(el)).length;
}