const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

let result = []
let answer = ""

function dfs(depth) {
	if(depth === M) return answer += result.join(" ") + "\n"
	for(let i = 1; i <= N; i++){
		if(depth > 0 && result[depth-1] > i) continue
		result[depth] = i
		dfs(depth+1)
	}
}
dfs(0)
console.log(answer)