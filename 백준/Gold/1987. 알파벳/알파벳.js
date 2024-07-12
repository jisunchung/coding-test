const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [R, C] = n.split(" ").map(Number)
const board = input.map(val => val.split(""))
const visited = new Array(26).fill(false)
let max = 0
const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function possible(row, col) {
		if (row < 0 || row >= R || col < 0 || col >= C) return false
		if (visited[board[row][col].charCodeAt(0) - 'A'.charCodeAt(0)]) return false
		return true
}

function dfs(row, col, length) {
		max = Math.max(max, length)
		if (max === 26) return 

		for (let i = 0; i < direction.length; i++) {
				const [dir_r, dir_c] = direction[i]
				const nextRow = row + dir_r
				const nextCol = col + dir_c
				if (possible(nextRow, nextCol)) {
						visited[board[nextRow][nextCol].charCodeAt(0) - 'A'.charCodeAt(0)] = true
						dfs(nextRow, nextCol, length + 1)
						visited[board[nextRow][nextCol].charCodeAt(0) - 'A'.charCodeAt(0)] = false
				}
		}
}

visited[board[0][0].charCodeAt(0) - 'A'.charCodeAt(0)] = true
dfs(0, 0, 1)
console.log(max)
