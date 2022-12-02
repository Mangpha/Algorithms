function solution(cacheSize, cities) {
	const cache = Array(cacheSize);
	let ans = 0;
	cities
		.map((el) => el.toLowerCase())
		.forEach((city) => {
			let check = false;
			if (cache.includes(city)) check = true;
			if (check) {
				for (let i = cache.indexOf(city); i >= 1; i--) cache[i] = cache[i - 1];
				cache[0] = city;
				ans++;
			} else {
				cache.unshift(city);
				cache.pop();
				ans += 5;
			}
		});
	return ans;
}