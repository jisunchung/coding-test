const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const board = input.map(line => line.split(" ").map(Number));
const diag1 = new Array(2 * N).fill(false); // \ 대각선 사용 여부
const diag2 = new Array(2 * N).fill(false); // / 대각선 사용 여부

function placeBishops(board, diag1, diag2, row, color) {
	//채스판은 0~N-1까지의 index를 가짐. N이면 끝난것이기 때문에 추가된 비숍없음!
	if (row === N) return 0

	let result = 0;
	for (let col = (row + color) % 2; col < N; col += 2) {
			if (board[row][col] && !diag1[col - row + N] && !diag2[col + row]) {
					diag1[col - row + N] = diag2[col + row] = true;
				//현재 위치에 비숍을 배치하는 경우
					result = Math.max(result, placeBishops(board, diag1, diag2, row, color, N) + 1);
					diag1[col - row + N] = diag2[col + row] = false;
			}
	}
	//현재 위치에 비숍을 배치하지 않는경우
	return Math.max(result, placeBishops(board, diag1, diag2, row + 1, color));
}

const blackResult = placeBishops(board, diag1, diag2, 0, 0); 
const whiteResult = placeBishops(board, diag1, diag2, 0, 1); 
console.log(blackResult + whiteResult);

