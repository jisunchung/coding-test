const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim())

let answer = 0
let queens = []

function possible(row, col){
	for(let [a,b] of queens){
		if(a === row || b === col) return false
		if(Math.abs(a-row) === Math.abs(b-col)) return false
	}
	return true
}

function dfs(depth){
	if(depth === N) answer++
	for(let i = 0; i<N ; i++){
		if(!possible(depth, i)) continue
			queens.push([depth, i])
			dfs(depth+1)
			queens.pop()
	}
}
dfs(0)
console.log(answer)