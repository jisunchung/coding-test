const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

const board = input.map(val => val.split(" ").map(Number))

function checkWinner(board, x, y, color) {
	const directions = [
			{dx: 0, dy: 1},  // →
			{dx: 1, dy: 0},  // ↓
			{dx: 1, dy: 1},  // ↘
			{dx: -1, dy: 1}  // ↗
	];

	for (let dir of directions) {
			let count = 1;
			for (let i = 1; i < 5; i++) {
					const nx = x + dir.dx * i;
					const ny = y + dir.dy * i;
					if (nx >= 0 && nx < 19 && ny >= 0 && ny < 19 && board[nx][ny] === color) {
							count++;
					} else {
							break;
					}
			}
			if (count === 5) {
					if (x - dir.dx >= 0 && x - dir.dx < 19 && y - dir.dy >= 0 && y - dir.dy < 19 && board[x - dir.dx][y - dir.dy] === color) continue;
					if (x + dir.dx * 5 >= 0 && x + dir.dx * 5 < 19 && y + dir.dy * 5 >= 0 && y + dir.dy * 5 < 19 && board[x + dir.dx * 5][y + dir.dy * 5] === color) continue;
					return true;
			}
	}
	return false;
}

function main() {


	for (let x = 0; x < 19; x++) {
			for (let y = 0; y < 19; y++) {
					if (board[x][y] !== 0) {
							if (checkWinner(board, x, y, board[x][y])) {
									console.log(board[x][y]);
									console.log((x + 1) + ' ' + (y + 1));
									return;
							}
					}
			}
	}
	console.log(0);
}

main()

