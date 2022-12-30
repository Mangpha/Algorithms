const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
const cToPos = (position) => {
	const pos = position.split('');
	return [8 - +pos[1], pos[0].charCodeAt() - 65];
};
const PosToc = (position) =>
	String.fromCharCode(position[1] + 65) + (8 - position[0]);
const [king, stone, N] = input[0].split(' ');
let pK = cToPos(king);
let pS = cToPos(stone);
const commands = input.slice(1);
const cmd = {
	R: [0, 1],
	L: [0, -1],
	B: [1, 0],
	T: [-1, 0],
	RT: [-1, 1],
	LT: [-1, -1],
	RB: [1, 1],
	LB: [1, -1],
};
for (let c of commands) {
	let nx = cmd[c][0] + pK[0];
	let ny = cmd[c][1] + pK[1];
	if (nx < 0 || nx > 7 || ny < 0 || ny > 7) continue;
	if (nx === pS[0] && ny === pS[1]) {
		let px = cmd[c][0] + pS[0];
		let py = cmd[c][1] + pS[1];
		if (px < 0 || px > 7 || py < 0 || py > 7) continue;
		pS = [px, py];
	}
	pK = [nx, ny];
}
console.log(PosToc(pK));
console.log(PosToc(pS));
