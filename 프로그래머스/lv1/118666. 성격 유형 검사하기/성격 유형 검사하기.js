function solution(survey, choices) {
	const dict = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
	const select = (a, b) => {
		return dict[a] >= dict[b] ? a : b;
	};
	survey.forEach((op, idx) => {
		if (choices[idx] < 4) dict[op[0]] += 4 - choices[idx];
		if (choices[idx] > 4) dict[op[1]] += choices[idx] - 4;
	});
	return (
		select("R", "T") + select("C", "F") + select("J", "M") + select("A", "N")
	);
}