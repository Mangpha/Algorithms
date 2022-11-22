function solution(food) {
	let ans = "";
	for (let i = 1; i < food.length; i++) {
		if (food[i] <= 1) continue;
		ans += String(i).repeat(Math.floor(food[i] / 2));
	}
	return ans + "0" + ans.split("").reverse().join("");
}