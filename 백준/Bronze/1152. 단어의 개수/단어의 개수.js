console.log(
	require("fs")
		.readFileSync("/dev/stdin")
		.toString()
		.trim()
		.split(" ")
		.filter((str) => str !== "").length
);
