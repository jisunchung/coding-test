const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop()
const arr = input.map(v => v.split(" ").map(Number))
let result = []
let answer = ""

function dfs(start, arr){
	if(result.length === 6){
		answer += result.join(" ") + "\n"
		return
	}
	for(let i = start ; i < arr.length ; i++){
			result.push(arr[i])
			dfs(i+1, arr)
			result.pop()
	}
}
for(let i = 0 ; i < arr.length ; i++){
	arr[i].shift()
	dfs(0, arr[i])
	answer += "\n"
}
console.log(answer)