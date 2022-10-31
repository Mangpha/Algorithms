const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let str = ''
for(let i=1; i<=input; i++) str += i + '\n';
console.log(str)