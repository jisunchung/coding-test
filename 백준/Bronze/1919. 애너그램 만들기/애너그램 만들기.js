const [a, b] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const tmp = {};

for (let c of a) {
	tmp[c] = (tmp[c] || 0) + 1;
}
for (let c of b) {
	tmp[c] = (tmp[c] || 0) - 1;
}
const result = Object.values(tmp)
	.map((val) => Math.abs(val))
	.reduce((acc, curr) => acc + curr, 0);
console.log(result);
