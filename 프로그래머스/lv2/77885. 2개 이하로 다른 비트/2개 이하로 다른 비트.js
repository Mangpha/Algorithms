function solution(number) {
	const solve = (num) => {
		if (num % 2 === 0) return num + 1;
		else {
			let cv = [...num.toString(2).split('').reverse(), '0'];
			const idx = cv.indexOf('0');
			cv[idx] = '1';
			cv[idx - 1] = '0';
			return parseInt(cv.reverse().join(''), 2);
		}
	};
	return number.map(solve);
}