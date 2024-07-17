const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, K] = input.shift().split(" ").map(Number)
const [S, X, Y] = input.pop().split(" ").map(Number)
let q = []
const board = input.map((col, i) => col.split(" ").map((row, j) => {
	row = Number(row)
	if(row !== 0) q.push([i,j, 0, row])
	return row
}))
q.sort((a,b) => a[3] - b[3])

while(q.length !== 0){
	let [row, col, count, virus] = q.shift()
	if(count === S) break
	for(let [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1]]){
		let next_row = row + dx
		let next_col = col + dy
		if(next_row < 0 || next_row >= N || next_col < 0 || next_col >= N) continue
		if(board[next_row][next_col] === 0){
			board[next_row][next_col] = virus
			q.push([next_row, next_col, count+1, board[next_row][next_col]])
		}
	}
}
console.log(board[X-1][Y-1])
