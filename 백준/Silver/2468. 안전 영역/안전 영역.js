const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const N = Number(input.shift());
const board = input.map((val) => val.split(" ").map(Number));
let min = 100;
let max = 1;
let maxResult = 0

for (let col of board) {
	max = Math.max(max, ...col);
}

for(let target = 0; target <= max; target++){
	const area = Array.from(Array(N), () => new Array(N).fill(0))
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (board[i][j] > target) {
				area[i][j] = 1;
			}
		}
	}


	function bfs(col, row){
		let q = [[col, row]]
		area[col][row] = 0
		while(q.length !== 0){
			let [a,b] = q.shift()
			for(let [dirC, dirR] of [[-1,0],[1,0],[0,-1],[0,1]]){
				let nextCol = a + dirC
				let nextRow = b + dirR
				if(nextCol < 0 || nextCol >= N || nextRow < 0 || nextRow >= N) continue
				if(area[nextCol][nextRow]){
					q.push([nextCol, nextRow])
					area[nextCol][nextRow] = 0
				}

			}
		}
	}

	let count = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if ((area[i][j] === 1)) {
				bfs(i, j);
				count++;
			}
		}
	}
	maxResult = Math.max(maxResult, count)
}

console.log(maxResult)