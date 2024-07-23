const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

let [N, K] = input.shift().split(" ").map(Number)
const arr = input.map(Number)
let count = 0

for(let i = arr.length-1; i > -1; i--){
	count += Math.floor(K/arr[i])
	K %= arr[i]
}
console.log(count)