const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const range = Number(input[0].split(' ')[1]);
const nums = input[1].split(' ').map(Number);
console.log(nums.filter((num) => num < range).join(' '))