const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/)

const n = Number(input[0])
const dis = input[1].split(" ").map(Number)
const price = input[2].split(" ").map(Number)

let result = dis[0]*price[0]
let minPrice = price[0]

for(let i = 1; i < n-1; i++){
	if(price[i] < minPrice) minPrice = price[i]
	result += minPrice*dis[i]
}
console.log(result)