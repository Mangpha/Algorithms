const dic = Array.from(Array(26)).map((e) => -1);
const str = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("");
str.forEach(
	(el, i) => !str.slice(0, i).includes(el) && (dic[el.charCodeAt() - 97] = i)
);
console.log(dic.join(' '));
