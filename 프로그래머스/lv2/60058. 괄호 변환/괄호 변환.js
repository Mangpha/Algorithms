function solution(p) {
	const bal = (str) => {
		str = str.split('');
		return (
			str.filter((s) => s === '(').length ===
			str.filter((s) => s === ')').length
		);
	};
	const eq = (str) => {
		const tmp = [];
		for (let i of str) {
			if (i === '(') tmp.push(i);
			else {
				if (!tmp.length) return false;
				tmp.pop();
			}
		}
		return true;
	};
	let idx = 0;
	let ans = '';
	if (!p.length) return '';
	while (idx < p.length) {
		if (bal(p.slice(0, idx + 1))) {
			if (eq(p.slice(0, idx + 1)))
				return p.slice(0, idx + 1) + solution(p.slice(idx + 1));
			else {
				ans = `(${solution(p.slice(idx + 1))})`;
				for (let j of p.slice(1, idx)) {
					if (j === '(') ans += ')';
					else ans += '(';
				}
				return ans;
			}
		}
		idx++;
	}
}