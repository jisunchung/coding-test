class Queue {
	constructor(){
		this.items = {}
		this.headIdx = 0
		this.tailIdx = 0
	}
	enqueue(item){
		this.items[this.tailIdx] = item
		this.tailIdx++
	}
	dequeue(){
		const item = this.items[this.headIdx]
		delete this.items[this.headIdx]
		this.headIdx++
		return item
	}
	peek() {
		return this.items[this.headIdx]
	}
	getLength() {
		return this.tailIdx - this.headIdx
	}
}

const [N, K] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)
const MAX = 100001
const visited = new Array(MAX).fill(0) //각 위치까지의 최단 시간

function bfs(){
	let queue = new Queue()
	queue.enqueue(N)
	while(queue.getLength() !== 0){
		let curr = queue.dequeue()
		if(curr === K) return visited[curr]
		for(let next of [curr-1, curr+1, curr*2]){ //인접한 위치 확인
			if(next < 0 || next >= MAX) continue //공간을 벗어난 경우 무시
			if(visited[next] === 0){ 	//아직 방문하지 않은 위치라면
				visited[next] = visited[curr] + 1 
				queue.enqueue(next)
			}
		}
	}
	
}
console.log(bfs())

