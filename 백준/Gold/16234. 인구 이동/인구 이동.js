const [input, ...arr] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(/\n/);

const [N, L, R] = input.split(" ").map(Number);
const area = arr.map((val) => val.split(" ").map(Number));
const directions = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];
let totalCount = 0

function bfs(r, c, index, union){
	let united = [[r, c]] //r,c 위치와 연결된 나라(연합)정보를 담는 리스트
	let q = [[r, c]] //너비우선 탐색을 위한 큐
	let front = 0
	union[r][c] = index //현재 연합의 번호 할당
	let summary = area[r][c] //현재 연합의 전체 인구수
	let count = 1 //현재 연합의 국가 수
	while(front < q.length){
		let [cr, cc] = q[front++]
		for(let [dr, dc] of directions){
			let nr = cr + dr
			let nc = cc + dc
			//인접한 나라 확인
			if(nr < 0 || nr >= N || nc < 0 || nc >= N) continue
			if(union[nr][nc] === -1){
				let diff = Math.abs(area[nr][nc] - area[cr][cc])
				if(L <= diff && diff <= R){
					q.push([nr, nc])
					union[nr][nc] = index //연합에 추가하기
					summary+= area[nr][nc]
					count+= 1
					united.push([nr, nc])
				}
			}
		}
	}
	for(let unit of united){//연합 국가끼리 인구 분배
		let [i, j] = unit
		area[i][j] = Math.floor(summary/count)
	}
}

while(true){
	let union = Array.from(Array(N), () => Array(N).fill(-1))
	let index = 0
	for(let i = 0; i < N; i++){
		for(let j = 0; j < N; j++){
			if(union[i][j] === -1){ //해당 나라가 아직 처리되지 않았다면
				bfs(i, j , index, union)
				index+= 1
			}
		}
	}
	//각자 자신만을 연합으로 가진경우 -> 모든 인구이동 마무리
	if(index === N*N) break
	totalCount+= 1
}
console.log(totalCount)
