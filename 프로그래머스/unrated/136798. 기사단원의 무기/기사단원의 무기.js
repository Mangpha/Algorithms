function solution(number, limit, power) {
	const sum = (num) => {
		let res = 0;
		for (let i = 1; i * i <= num; i++) {
			if (i * i === num) res++;
			else if (num % i === 0) res += 2;
		}
		return res;
	};
	return Array.from({ length: number }, (el, i) => i + 1)
		.map((el) => (sum(el) > limit ? power : sum(el)))
		.reduce((acc, cur) => acc + cur, 0);
}