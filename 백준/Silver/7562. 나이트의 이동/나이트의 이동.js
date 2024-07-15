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

const [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
const position = [[-1,-2],[-2,-1],[-2,1],[-1,2],[1,-2],[2,-1],[2,1],[1,2]]


function dfs(n, start, end){
	const N = Number(n)
	const visited = Array.from({length: N}, () => new Array(N).fill(0))
	let queue = new Queue()
	queue.enqueue(start)
	while(queue.getLength() !== 0){
		let curr = queue.dequeue()
		const [curr_row, curr_col] = curr.split(" ").map(Number)
		if(curr === end) return visited[curr_row][curr_col] 
		for(let pos of position){
			const next_row = curr_row+pos[0]
			const next_col = curr_col+pos[1]
			if(next_row < 0 || next_row >= N || next_col < 0 || next_col>= N) continue
			if(visited[next_row][next_col] === 0){
				visited[next_row][next_col] = visited[curr_row][curr_col]+1
				queue.enqueue(`${next_row} ${next_col}`)
			}
		}
	}
}

while(input.length !== 0){
	console.log(dfs(input.shift(),input.shift(),input.shift()))
}