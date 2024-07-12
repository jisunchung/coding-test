const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

let visited = new Array(N).fill(false)
let selected = []
let answer = ""

function dfs(depth){
	if(depth === N){
		answer += selected.join(" ") + "\n"
		return
	}
	for(let i = 0; i<N; i++){
		if(visited[i]) continue
		visited[i] = true
		selected.push(i+1)
		dfs(depth+1)
		visited[i] = false
		selected.pop()
	}
}

dfs(0)
console.log(answer)