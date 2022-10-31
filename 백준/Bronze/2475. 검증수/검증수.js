const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(input.reduce((prev, i) => prev + i**2, 0) % 10)