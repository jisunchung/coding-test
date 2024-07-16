class Queue {
	constructor() {
			this.items = [];
	}
	enqueue(item) {
			this.items.push(item);
	}
	dequeue() {
			return this.items.shift();
	}
	peek() {
			return this.items[0];
	}
	getLength() {
			return this.items.length;
	}
}

//미방문 -1, 빨강 0, 파랑 1
function bfs(x, graph, visited){
	queue = new Queue()
	queue.enqueue(x)
	visited[x] = 0 //처음 노드는 빨간색으로 칠하기
	while(queue.getLength() !== 0){
		x = queue.dequeue()
		for(let y of graph[x]){
			if(visited[y] === -1){
				visited[y] = 1 - visited[x]//빨강 <-> 파랑
				queue.enqueue(y)
			}
		}
	}
}

function isBipartite(graph, visited){
	// 모든 노드에 대하여 인접 노드와 색상이 다른지 여부를 판별하기
	for(let x = 1; x < visited.length; x++){ 
		for(let y of graph[x]) if(visited[x] === visited[y]) return false
	}
	return true
}

const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let testCases = Number(n)
let line = 0
while(testCases--){
	let [v, e] = input[line].split(" ").map(Number)
	let graph = []
	for(let i = 1; i <= v; i++) graph[i] = []
	for(let i = 1; i <= e; i++){
		let [u, v] = input[line+i].split(" ").map(Number)
		graph[u].push(v)
		graph[v].push(u)
	}
	let visited = new Array(v+1).fill(-1)
	for(let i = 1 ; i <= v; i++){
		if(visited[i] === -1) bfs(i, graph, visited)
	}
	line += e + 1
	if(isBipartite(graph, visited)) console.log("YES")
	else console.log("NO")
}