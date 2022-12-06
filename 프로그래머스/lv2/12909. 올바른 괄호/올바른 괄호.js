function solution(s) {
	const stack = [];
	for (let i of s) {
		if (i === '(') stack.push(i);
		else if (stack.pop() !== '(') return false;
	}
	return !stack.length;
}