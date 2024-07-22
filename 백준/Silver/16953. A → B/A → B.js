const [a, b] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(/\s/)
	.map(Number);

const visited = new Set();
let found = false;
let q = [[a, 0]];
let front = 0;

while (front < q.length) {
	let [curr, count] = q[front++];
	if (curr > 1e9) continue;
	if (curr === b) {
		found = true;
		console.log(count + 1);
		break;
	}
	for (let sign of ["*", "+"]) {
		let next = curr;
		if (sign === "*") next *= 2;
		else if (sign === "+") {
			next *= 10;
			next += 1;
		}
		if (!visited.has(next)) {
			visited.add(next);
			q.push([next, count + 1]);
		}
	}
}

if (!found) {
	console.log(-1);
}
