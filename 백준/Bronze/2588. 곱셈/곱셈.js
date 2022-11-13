const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const num2 = numbers[1].split('').map(Number);
let str = '';
str += numbers[0] * num2[2] + "\n"
str += numbers[0] * num2[1] + "\n"
str += numbers[0] * num2[0] + "\n"
str += numbers[0] * numbers[1]
console.log(str)