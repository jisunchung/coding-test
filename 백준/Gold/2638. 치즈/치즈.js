const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const board = input.map((val) => val.split(" ").map(Number));
const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

function removeCheese() {
	let changed = false;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (board[i][j] >= 3) {
				board[i][j] = 0;
				changed = true;
			}
			if (board[i][j] === 2) {
				board[i][j] = 1;
			}
		}
	}
	return changed;
}

function bfs() {
	const visited = Array.from({ length: n }, () => Array(m).fill(false));
	const q = [[0, 0]];
	let front = 0
	visited[0][0] = true;

	while (front < q.length) {
		const [x, y] = q[front++]

		for (let [dr, dc] of directions) {
			const nx = x + dr;
			const ny = y + dc;

			if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
			if (visited[nx][ny]) continue;

			if (board[nx][ny] >= 1) {
				board[nx][ny]++;
			} else {
				q.push([nx, ny]);
				visited[nx][ny] = true;
			}
		}
	}
}

let count = 0;
while (true) {
	bfs();
	if (!removeCheese()) {
		console.log(count);
		break;
	}
	count++;
}
