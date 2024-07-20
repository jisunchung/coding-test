const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let virusPositions = [];
let emptyPositions = []
const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];
const board = input.map((row, i) => row.split(" ").map((col, j) => {
	const tmp = Number(col)
	if (tmp === 2) virusPositions.push([i, j]);
	if (tmp === 0) emptyPositions.push([i, j]);
	return tmp
}));

let maxResult = 0;

function bfs(arr) {
	let q = [...virusPositions];
	let front = 0;

	while (front < q.length) {
		const [r, c] = q[front++];
		for (let [dr, dc] of directions) {
			const nr = dr + r;
			const nc = dc + c;
			if (nr >= 0 && nr < N && nc >= 0 && nc < M && arr[nr][nc] === 0) {
				arr[nr][nc] = 2;
				q.push([nr, nc]);
			}
		}
	}
	let count = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (arr[i][j] === 0) count++;
		}
	}
	return count;
}

function dfs(count, start) {
	if (count === 3) {
		let wallArr = board.map((v) => [...v]);
		maxResult = Math.max(maxResult, bfs(wallArr));
		return;
	}
	for(let i = start; i < emptyPositions.length; i++){
		const [r, c] = emptyPositions[i];
		board[r][c] = 1;
		dfs(count + 1, i+1);
		board[r][c] = 0;
	}
}
dfs(0 , 0);
console.log(maxResult);
