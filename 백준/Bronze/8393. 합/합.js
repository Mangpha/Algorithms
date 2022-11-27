const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let ans = 0;
for(let i=1; i<=input; i++) ans += i;
console.log(ans)