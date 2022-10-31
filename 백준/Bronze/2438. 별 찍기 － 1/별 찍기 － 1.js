const input = require("fs").readFileSync("/dev/stdin").toString();
for (let i = 0; i < input; i++) {
	let str = "";
	for (let j = 0; j <= i; j++) str += "*";
	console.log(str);
}
