const [N, M, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)

arr.sort((a,b) => a-b)
const visited = new Array(N).fill(false)
const result = []
let answer = ""

function dfs(depth){
	if(depth === M) {
		answer+= result.join(" ") + "\n"
		return
	}
	let before = 0
	for(let i = 0; i < N; i++){
		if(visited[i] || arr[i] === before) continue
		result.push(arr[i])
		visited[i] = true
		before = arr[i]
		dfs(depth+1)
		result.pop()
		visited[i] = false
	}
}

dfs(0)
console.log(answer)
