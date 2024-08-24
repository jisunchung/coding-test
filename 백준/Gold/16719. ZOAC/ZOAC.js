const input = require("fs").readFileSync("/dev/stdin").toString().trim()
const N = input.length
const visited = new Array(N).fill(false)

function backtracking(start, end){
	if(start === end) return

	let target = String.fromCharCode(123)
	let idx = 0

	for(let i = start ; i < end; i++){
		if(input[i] < target){
				target = input[i]
			idx = i
		}
	}
	visited[idx] = true;

	let result = '';
	for (let i = 0; i < N; i++) {
			if (visited[i]) result += input[i];
	}
	console.log(result);

	backtracking(idx + 1, end);
	backtracking(start, idx);
	
}

backtracking(0, N);