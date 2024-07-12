const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(n);
const W = input.map(v => v.split(" ").map(Number));

let min = Infinity;
let visited = Array(N).fill(false);
visited[0] = true; // 0번 도시에서 시작하고, 시작 도시는 이미 방문한 것으로 처리

function dfs(current, depth, cost) {
		if (depth === N - 1) {
				if (W[current][0] !== 0) {
						min = Math.min(min, cost + W[current][0]);
				}
				return;
		}
		for (let i = 0; i < N; i++) {
				if (!visited[i] && W[current][i] !== 0) {
						if(cost + W[current][i] < min){
						visited[i] = true;
						dfs(i, depth + 1, cost + W[current][i]);
						visited[i] = false;
					}
				}
		}
}
dfs(0, 0, 0); // 0번 도시에서 시작
console.log(min);
