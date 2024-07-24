let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())
let answer =0

while(N > 0){
	if(N % 5 === 0){
		N-=5
	}else N-=3
	answer+=1
}
console.log(N === 0 ? answer : -1)