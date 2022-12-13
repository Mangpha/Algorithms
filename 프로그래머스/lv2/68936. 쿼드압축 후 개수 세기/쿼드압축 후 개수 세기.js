function solution(arr) {
	const isSame = (m) => {
		m = m.flat();
		return !m.filter((i) => m[0] !== i).length;
	};
	const ans = { 0: 0, 1: 0 };
	const divide = (m) => {
		if (!isSame(m)) {
			divide(m.slice(0, m.length / 2).map((el) => el.slice(0, m.length / 2)));
			divide(
				m.slice(0, m.length / 2).map((el) => el.slice(m.length / 2, m.length))
			);
			divide(
				m.slice(m.length / 2, m.length).map((el) => el.slice(0, m.length / 2))
			);
			divide(
				m
					.slice(m.length / 2, m.length)
					.map((el) => el.slice(m.length / 2, m.length))
			);
		} else ans[m[0][0]]++;
	};
	divide(arr);
	return Object.values(ans);
}