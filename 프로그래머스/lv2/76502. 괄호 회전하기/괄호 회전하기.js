function solution(s) {
	let count = 0;
	const input = (str, i) => str.slice(i) + str.slice(0, i);
	const check = (str) => {
		const dict = { '{': '}', '[': ']', '(': ')' };
		const tmp = [];
		for (let i = 0; i < str.length; i++) {
			if (Object.keys(dict).includes(str[i])) tmp.push(str[i]);
			else if (dict[tmp.pop()] !== str[i]) return false;
		}
		return !tmp.length && true;
	};
	for (let i = 0; i < s.length; i++) if (check(input(s, i))) count++;
	return count;
}