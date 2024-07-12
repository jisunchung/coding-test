const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const K = Number(input[0].split(" ")[0])
const N = Number(input[0].split(" ")[1])
let arr = []
for(let i = 1; i<= K; i++) arr.push(Number(input[i]))

let start = 1
let end = Math.max(...arr)

let result = 0
while(start <= end){
	let mid = parseInt((start + end) / 2)
	let sum = 0
	arr.forEach(i => {
		sum += parseInt(i/mid)
	})
	if(sum < N) end = mid -1
	else{
		result = mid
		start = mid +1
	}
}
console.log(result)
