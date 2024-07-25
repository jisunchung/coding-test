let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

let count = 0
let j = 1
while(N >= 0){
	N -= j
	j++
	count++
}

console.log(N === 0 ? count : count-1)