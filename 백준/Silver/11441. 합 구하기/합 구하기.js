const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input.shift())
const arr = input.shift().split(" ").map(Number)
const M = Number(input.shift())
const testCase = input.map((val) => val.split(" ").map(Number));

let preFixSum = [0]
let sumVal = 0
for(let i of arr){
	sumVal += i
	preFixSum.push(sumVal)
}
let result = ""
for(let [i,j] of testCase){
	result += (preFixSum[j] - preFixSum[i-1]) + "\n"
}
console.log(result)
