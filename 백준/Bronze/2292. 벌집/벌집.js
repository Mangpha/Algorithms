const number = Number(
	require("fs").readFileSync("/dev/stdin").toString().trim()
);
let a = 0,
	n = 1;
while (6 * a + 1 < number) {
	a += n;
	n += 1;
}
console.log(n);
