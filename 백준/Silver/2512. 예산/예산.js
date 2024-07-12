const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n')

const N = Number(input[0])
let arr = input[1].split(' ').map(Number)
const M = Number(input[2])

let start = 1
let end = arr.reduce((a,b) => Math.max(a,b))

let result = 0
while(start <= end){
	let mid = parseInt((start+end)/2)
	let total = 0
	for(x of arr){
		total += Math.min(mid, x)
	}
	if(total <= M){
		result = mid
		start = mid +1
	}else{
		end = mid -1
	}
}
console.log(result)




