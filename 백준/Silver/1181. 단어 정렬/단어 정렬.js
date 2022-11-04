const dict = Array.from(
	new Set(
		require("fs")
			.readFileSync("/dev/stdin")
			.toString()
			.trim()
			.split("\n")
			.slice(1)
			.sort((a, b) => a.length - b.length || a.localeCompare(b))
	)
).join("\n");

console.log(dict);