const num = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
console.log(`${num[0] / num[1]}\n${num[0] % num[1]}`);