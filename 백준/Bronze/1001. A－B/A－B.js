const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map((num) => parseInt(num));
console.log(a - b);
