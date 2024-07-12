const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const k = Number(input[0])
const arr = input[1].split(" ")
let visited = new Array(10).fill(false)
let result = []
let min = ""
let max = ""

function dfs(depth){
	if(depth === k+1){
		let check = true
		arr.forEach((sign,idx) => {
			if(sign === "<"){
				if(result[idx] > result[idx+1]) check = false
			}else if(sign === ">"){
				if(result[idx] < result[idx+1]) check = false
			}
		})
		if(check){
			if(min === "") min = result.join("")
			max = result.join("")
		}
		return
	}
	for(let i = 0 ; i <= 9; i++){
		if(visited[i]) continue
		visited[i] = true
		result.push(i)
		dfs(depth+1)
		visited[i] = false
		result.pop()
	}
}
dfs(0, 0)
console.log(max+"\n"+min)