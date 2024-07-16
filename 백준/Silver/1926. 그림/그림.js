const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [n, m] = input.shift().split(" ").map(Number)
const board = input.map(val => val.split(" ").map(Number))

const visited = Array.from(Array(n), () => new Array(m).fill(false))
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function possible(row, col){
	if(row < 0 || row >= n || col < 0 || col >= m) return false
	return true
}

function bfs(row, col){
	let q = [[row,col]]
	let size = 1
	while(q.length !== 0){
		let [curRow,curCol] = q.shift()
		for(let [dirRow, dirCol] of directions){
			const nextRow = dirRow + curRow
			const nextCol = dirCol + curCol
			if(possible(nextRow, nextCol) && board[nextRow][nextCol] === 1 && !visited[nextRow][nextCol]){
				visited[nextRow][nextCol] = true
				q.push([nextRow, nextCol])
				size++
			}
		}
	}
	return size
}

let count = 0
let max = 0
for(let i = 0 ; i < n; i++){
	for(let j = 0 ; j < m; j++){
		if(board[i][j] === 1 && !visited[i][j]){
			visited[i][j] = true
			let area = bfs(i, j)
			max = Math.max(max, area)
			count++
		}
		
	}
}

console.log(count)
console.log(max)