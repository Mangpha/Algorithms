const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split('');
const convert = (alphabet) => BigInt(alphabet.charCodeAt() - 96);
let ans = BigInt(0);
let r = BigInt(1);
for(let i=0; i<input.length; i++) {
    ans += (convert(input[i]) * r) 
    ans %= BigInt(1234567891)
    r *= BigInt(31) 
    r %= BigInt(1234567891);
}
console.log(parseInt(ans))