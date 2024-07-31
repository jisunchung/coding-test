const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

const queue = Array.from({length: N}, (_, idx) => idx+1)
const result = []
let start = 0

while (queue.length) {
    start += K-1
	if(start >= queue.length) start %= queue.length
	result.push(queue.splice(start,1))
}
console.log(`<${result.join(", ")}>`)