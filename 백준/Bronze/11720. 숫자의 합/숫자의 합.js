const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split('').map((num) => Number(num));
console.log(numbers.reduce((prev, i) => prev + i, 0));