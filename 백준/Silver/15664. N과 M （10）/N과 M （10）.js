const [N, M, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)

arr.sort((a,b) => a-b)
const visited = new Array(N).fill(false)
const result = []
let answer = ""

function dfs(depth, start){
	if(depth === M) return answer+= result.join(" ") + "\n"


	let before = 0
	for(let i = start; i < N; i++){
		if(visited[i] || arr[i] === before) continue
		result.push(arr[i])
		visited[i] = true
		before = arr[i]
		dfs(depth+1, i+1)
		result.pop()
		visited[i] = false
	}
}

dfs(0, 0)
console.log(answer)

