const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toLocaleUpperCase().split("");
const dict = {};
input.forEach((chr) => (dict[chr] = dict[chr] === undefined ? 1 : dict[chr] + 1));
let max = 0,
    sol = "";
for (chr in dict) {
    let prevNum = max;
    if (max < dict[chr]) {
        max = dict[chr];
        sol = chr;
    }
    sol = prevNum === dict[chr] ? "?" : sol;
}
console.log(sol);
