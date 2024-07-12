const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

let result = []
let answer = ""

function dfs(depth, start){
	if(depth === M) {
		answer += result.join(" ") + "\n"
		return
	}
	for(let i = start ; i < N ; i++){
		result.push(i+1)
		dfs(depth+1, i+1)
		result.pop()
	}
}
dfs(0, 0)
console.log(answer)