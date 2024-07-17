const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

const [N, M, K, X] = input.shift().split(" ").map(Number)
const arr = input.map(val => val.split(" ").map(Number))
const graph = Array.from(Array(N+1), () => [])
const visited = new Set()
let result = []
let q = []

for(let [a,b] of arr){
	graph[a].push(b)
} 

q.push([X, 0])
visited.add(X)
while(q.length !== 0){
	const [v, dist] = q.shift()
	if(dist === K) {
		result.push(v)
		continue
	}
	if(dist > K) break
	for(let i of graph[v]){
		if(visited.has(i)) continue
		visited.add(i)
		q.push([i, dist+1])
	}
}
if(result.length === 0) console.log(-1)
else{
	result.sort((a,b)=> a-b)
	console.log(result.join("\n"))
}