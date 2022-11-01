const numbers = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
numbers.slice(0, numbers.length - 1).forEach((number) => {
    const [a, b] = number.split(' ').map((num) => Number(num));
    console.log(a + b);
})