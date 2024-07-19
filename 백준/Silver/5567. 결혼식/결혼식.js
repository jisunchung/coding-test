const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const n = +input.shift()
const m = +input.shift()
const graph = Array.from(Array(n+1), () => [])
const visited = new Array(n+1).fill(false)
visited[0] = true
visited[1] = true

for(let i = 0 ; i < m ; i++){
	let [a,b] = input[i].split(" ").map(Number)
	graph[a].push(b)
	graph[b].push(a)
}

let result = 0
let q = []
let front = 0
q.push([1,0]) //start, count
while(front < q.length){
	let [now, count] = q[front++]
	if(count === 2) break
	for(let next of graph[now]){
		if(!visited[next]){ //친구의 친구인 경우까지만 
			visited[next] = true
			q.push([next, count+1])
			result++
		}
	}
}

console.log(result)