const [N, M, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)

arr.sort((a,b) => a-b)
const result = []
let answer = ""

function dfs(depth, start){
	if(depth === M) return answer+= result.join(" ") + "\n"

	let before = 0
	for(let i = start; i < N; i++){
		if(arr[i] === before) continue
		result.push(arr[i])
		before = arr[i]
		dfs(depth+1, i)
		result.pop()
	}
}

dfs(0, 0)
console.log(answer)

