let S = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

let sum = 0
let current = 0
while(sum <= S){
	current++
	sum += current
}
console.log(current-1)