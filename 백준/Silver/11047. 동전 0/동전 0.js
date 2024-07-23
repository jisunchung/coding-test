const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const [N, K] = input.shift().split(" ").map(Number)
const arr = input.map(Number)

let count = 0
let target = K

for(let i = arr.length; i > -1; i--){
	if(arr[i] <= target){
		let tmp = Math.floor(target/arr[i])
		count += tmp
		target -= (tmp * arr[i])
	}
}

console.log(count)