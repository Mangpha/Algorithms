function solution(k, m, score) {
	let list = score.sort((a, b) => b - a);
	const arr = [];
	for (let i = 0; i < list.length; i += m) arr.push(list.slice(i, i + m));
	console.log(arr);
	return arr.reduce(
		(total, cur) =>
			cur.length === m ? (total += cur[cur.length - 1] * m) : total,
		0
	);
}