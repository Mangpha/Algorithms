const [NM, deck] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
const [N, M] = NM.split(" ").map(Number);
const cards = deck.split(" ").map(Number);
const getComb = (arr, num) => {
	const result = [];
	if (num === 1) return arr.map((el) => [el]);
	arr.forEach((fixed, index, origin) => {
		const rest = origin.slice(index + 1);
		const comb = getComb(rest, num - 1);
		const atch = comb.map((el) => [fixed, ...el]);
		result.push(...atch);
	});
	return result;
};
let max = 0;
const combs = getComb(cards, 3);
combs.forEach((comb) => {
	let sum = comb.reduce((acc, cur) => acc + cur, 0);
	if (sum > max && sum <= M) max = sum;
});
console.log(max);
