function solution(queue1, queue2) {
	const sum = (que) => que.reduce((acc, cur) => acc + cur, 0);
	let sum1 = sum(queue1);
	let sum2 = sum(queue2);
	let count = 0;
	const que1 = [...queue1, ...queue2];
	const que2 = [...queue2, ...queue1];
	let i = 0,
		j = 0;
	while (i < que1.length && j < que2.length) {
		if (sum1 === sum2) return count;
		else if (sum1 > sum2) {
			sum1 -= que1[i];
			sum2 += que1[i];
			i++;
		} else if (sum1 < sum2) {
			sum1 += que2[j];
			sum2 -= que2[j];
			j++;
		}
		count++;
	}
	return -1;
}