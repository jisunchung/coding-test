const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(n);
const items = input.map(i => i.split(' ').map(Number))

let result = []
let min = Infinity

function dfs(start, s_sum, b_sum ){
	if(start > 0){
		min = Math.min(min, Math.abs(s_sum - b_sum))
	}
	for(let i = start; i < N; i++){
			result.push(i)
			dfs(i+1, s_sum * items[i][0], b_sum +items[i][1])
			result.pop()
	
	}
}
dfs(0, 1, 0)
console.log(min)