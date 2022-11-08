const length = parseInt(
	require("fs").readFileSync("/dev/stdin").toString().trim()
);
let tmp = 2;
while (true) {
	if (length === 1 || length === 2) {
		console.log(length);
		break;
	} else {
		tmp = tmp * 2;
		if (tmp >= length) {
			console.log((length - tmp / 2) * 2);
			break;
		}
	}
}
