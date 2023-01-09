function solution(today, terms, privacies) {
	const trans = (date) => {
		date = date.split('.').map(Number);
		return date[2] + date[1] * 28 + date[0] * 12 * 28;
	};
	const dict = {};
	const ans = [];
	terms = terms
		.map((term) => term.split(' '))
		.forEach((term) => (dict[term[0]] = term[1] * 28));
	privacies = privacies.map((p) => p.split(' '));
	const check = (p, idx) =>
		trans(today) >= trans(p[0]) + dict[p[1]] && ans.push(idx + 1);
	privacies.map(check);
	return ans;
}