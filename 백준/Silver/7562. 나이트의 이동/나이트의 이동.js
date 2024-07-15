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

let input = require('fs').readFileSync("/dev/stdin").toString().split('\n');

// 이동할 여덟 가지 방향 정의
const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;

while (testCases--) {
		let l = Number(input[line]);
		let [x, y] = input[line + 1].split(' ').map(Number); // 현재 위치
		let [targetX, targetY] = input[line + 2].split(' ').map(Number); // 목표 위치

		// 방문 체크 배열 초기화
		let visited = Array.from({ length: l }, () => Array(l).fill(0));
		let queue = [];

		queue.push([x, y]);
		visited[x][y] = 1;

		while (queue.length !== 0) {
				let cur = queue.shift();
				let [curX, curY] = cur;

				if (curX === targetX && curY === targetY) {
						break;
				}

				for (let i = 0; i < 8; i++) {
						let nx = curX + dx[i];
						let ny = curY + dy[i];

						if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;

						if (visited[nx][ny] === 0) {
								visited[nx][ny] = visited[curX][curY] + 1;
								queue.push([nx, ny]);
						}
				}
		}

		line += 3; // 다음 테스트 케이스로 이동
		console.log(visited[targetX][targetY] - 1); // 항상 도달 가능
}
