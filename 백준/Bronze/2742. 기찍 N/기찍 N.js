const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let str = '';
for(let i=input; i>=1; i--) str += `${i}\n`;
console.log(str)