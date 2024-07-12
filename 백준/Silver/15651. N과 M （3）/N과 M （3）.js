const [N, M] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

let result = []
let answer = ""

function dfs(depth) {
	if(depth === M) return answer += result.join(" ")+ "\n"
    for(let i = 1; i <= N; i++){
		result.push(i)
		dfs(depth+1)
		result.pop()
	}
}

dfs(0)
console.log(answer)