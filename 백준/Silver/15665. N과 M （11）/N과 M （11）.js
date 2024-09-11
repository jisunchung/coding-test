const [N, M, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(Number)

arr.sort((a,b) => a-b)
const result = []
let answer = ""

function dfs(depth){
	if(depth === M) return answer+= result.join(" ") + "\n"


	let before = 0
	for(let i = 0; i < N; i++){
		if(arr[i] === before) continue
		result.push(arr[i])
		before = arr[i]
		dfs(depth+1)
		result.pop()
	}
}

dfs(0)
console.log(answer)

