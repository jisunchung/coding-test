const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number);

arr.sort((a,b) => a-b)

let result = 0
let sum = 0
for(let i = 0 ; i < n; i++){
	result += arr[i]
	sum += result
}

console.log(sum)


