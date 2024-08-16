const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, M] = input.shift().split(" ").map(Number)
const arr = input.splice(0, N).map(val => val.split(" ").map(Number))
const K = Number(input.shift())

let result = ""

for(let val of input){
	const [i, j, x,y] = val.split(" ").map(Number)
	let sum = 0
	for(let row = i; row <= x; row++){
		for(let col = j; col <= y; col++){
			sum += arr[row-1][col-1]
		}
	}
	result += sum + "\n"
}

console.log(result)
