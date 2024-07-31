const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

const queue = Array.from({length: N}, (_, idx) => idx+1)
const result = []
let count = 1

while (queue.length > 0) {
    let val = queue.shift()
    if(count % K === 0) result.push(val)
    else queue.push(val)
    count++
}
console.log(`<${result.join(", ")}>`)