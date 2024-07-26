const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const arrow = new Array(1000001).fill(0);
let result = 0;

for (let x of arr) {
	if (arrow[x] > 0) {
		arrow[x] -= 1;
		arrow[x - 1] += 1;
	} else {
		arrow[x - 1] += 1;
		result++;
	}
}
console.log(result);
