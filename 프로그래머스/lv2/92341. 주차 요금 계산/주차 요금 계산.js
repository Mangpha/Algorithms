function solution(fees, records) {
	const [defaultTime, defaultPrice, unitTime, unitPrice] = fees;
	const logs = records.map((record) => record.split(" "));
	const maxTime = 23 * 60 + 59;
	const cars = {};
	const ans = {};
	for (let i = 0; i < logs.length; i++) {
		const time = logs[i][0].split(":").map(Number);
		logs[i][0] = time[0] * 60 + time[1];
		cars[logs[i][1]]
			? cars[logs[i][1]].push(logs[i][0])
			: (cars[logs[i][1]] = [logs[i][0]]);
	}
	for (let i in cars)
		for (let j = 0; j < cars[i].length; j++) {
			let tmp = (cars[i][j + 1] || maxTime) - cars[i][j];
			ans[i] ? (ans[i] += tmp) : (ans[i] = tmp);
			j++;
		}
	return Object.keys(ans)
		.sort((a, b) => a - b)
		.map((el) =>
			ans[el] < defaultTime
				? defaultPrice
				: defaultPrice +
				  Math.ceil((ans[el] - defaultTime) / unitTime) * unitPrice
		);
}