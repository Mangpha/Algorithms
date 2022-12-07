const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let ans = [];
for (let i = 1; i <= input[0]; i++) {
    ans.push(`Case #${i}: ${input[i].split('').map(Number).reduce((a, b) => a + b, 0)}`)
}
console.log(ans.join('\n'));