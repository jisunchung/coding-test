const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")


const [N, M] = input.shift().split(" ").map(Number)
const nums = input.shift().split(" ").map(Number).sort((a,b) => a-b)
const result = []
let answer = ""

function dfs(depth){
	if(depth === M) return answer += result.join(" ") + "\n"
	for(let i = 0; i < N; i++){
		result.push(nums[i])
		dfs(depth+1)
		result.pop()
	}
}

dfs(0)
console.log(answer)