function solution(msg) {
	msg = msg.split('');
	const dict = {};
	const ans = [];
	for (let i = 1; i <= 26; i++) dict[String.fromCharCode(i + 64)] = i;
	let idx = 0;
	while (idx < msg.length) {
		let tmp = 1;
		while (
			dict[msg.slice(idx, idx + tmp + 1).join('')] &&
			tmp + idx < msg.length
		)
			tmp++;
		ans.push(dict[msg.slice(idx, idx + tmp).join('')]);
		if (!dict[msg.slice(idx, idx + tmp + 1).join('')])
			dict[msg.slice(idx, idx + tmp + 1).join('')] =
				Object.keys(dict).length + 1;
		idx += tmp;
	}
	return ans;
}