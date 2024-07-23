const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\n/)

const n = Number(input[0])
const dis = input[1].split(" ").map(v => BigInt(v))
const price = input[2].split(" ").map(v => BigInt(v))

let result = 0n
let minPrice = price[0]

for(let i = 0; i < n-1; i++){
	result += minPrice * dis[i]
	if(price[i+1] < minPrice) minPrice = price[i+1]
}
console.log(String(result))