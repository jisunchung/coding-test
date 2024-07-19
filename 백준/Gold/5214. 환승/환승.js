const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, K, M] = input[0].split(" ").map(Number)
let graph = []
for(let i = 1; i <= N+M; i++) graph[i] = []

for(let i = 1; i <= M; i++){
	let arr = input[i].split(" ").map(Number)
	for(let x of arr){
		graph[x].push(N+i) // 노드 -> 하이퍼튜브
		graph[N+i].push(x) // 하이퍼 튜브 -> 노드
	}
}

let visited = new Set([1])
let q = []
let front = 0
q.push([1,1]) // 노드, 거리
let found = false

while(front < q.length){
	let [node, dis] = q[front++]
	if(node === N){
		console.log(Math.floor(dis/2)+1)
		found = true
		break
	}
	for(let next of graph[node]){
		if(!visited.has(next)){
			q.push([next, dis+1])
			visited.add(next)
		}
	}
}
if(!found) console.log(-1)
