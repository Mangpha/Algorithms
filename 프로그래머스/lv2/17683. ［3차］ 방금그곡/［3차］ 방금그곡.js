function solution(m, musicinfos) {
	const HtoM = (s, e) => e[0] * 60 + Number(e[1]) - (s[0] * 60 + Number(s[1]));
	const convM = (melody) => melody.replace(/(\D)#/g, (_, p) => p.toLowerCase());
	m = convM(m);
	const dict = [];
	musicinfos.map((el) => el.split(',')).forEach((music, idx) => {
			const [start, end, title, mel] = music;
			const time = HtoM(start.split(':'), end.split(':'));
			const melody = convM(mel);
			let cp = '';
			for (let i = 0; i < time; i++) cp += melody[i % melody.length];
			if (cp.includes(m)) dict.push({ time, title, idx });
		});
	return dict.length >= 1
		? dict.sort((a, b) => b.time - a.time || a.idx - b.idx)[0].title
		: '(None)';
}