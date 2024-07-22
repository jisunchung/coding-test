const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(/\n/);

const n = Number(input[0]) //보드 크기
const k = Number(input[1]) //사과의 개수
let data = Array.from(Array(n+1), () => Array(n+1).fill(0)) 
for(let i = 2; i <= k+1; i++){
	let [a, b] = input[i].split(" ").map(Number)
	data[a][b] = 1 //사과가 있는 곳은 1로 표시
}

const l = Number(input[k+2]) //뱀의 방향 변환 횟수
let info = []
for(let i = k+3; i < k+3+l; i++){
	let [x, c] = input[i].split(" ")
	info.push([Number(x), c])
}

//처음에는 오른쪽을 보고 있으므로 (동,남,서,북 순서)
const dir = [[0,1], [1,0], [0,-1],[-1,0]]
function turn(direction, c) {
	if(c === "L"){ //왼쪽
		direction = (direction + 3) % 4
	}else{ //오른쪽
		direction = (direction + 1) % 4
	}
	return direction
}

let [x, y] = [1, 1] //뱀의 머리 위치
data[x][y] = 2 //뱀이 있는 곳은 2로 표시
let direction = 0 //뱀이 오른쪽을 보고 있음
let time = 0 //시작한 뒤에 지난 '초' 시간
let index = 0 //다음에 회전할 정보
let q = [[x,y]] //뱀이 차지하고 있는 위치 정보 (꼬리가 앞쪽에 있음 머리정보가 push로 들어가니까)
while(true){
	let [nx, ny] = [x+dir[direction][0], y+dir[direction][1]]
	//맵 범위 안에 있고, 뱀의 몸통이 없는경우 한칸 머리를 이동시킬것이다
	if(1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] !== 2){
		if(data[nx][ny] === 0) { //사과가 없다면 이동 후에 꼬리 제거
			data[nx][ny] = 2
			q.push([nx,ny])
			let [px, py] = q.shift()
			data[px][py] = 0
		}
		if(data[nx][ny] === 1){ //사과가 있다면 이동 후에 꼬리 그대로 두기
			data[nx][ny] = 2
			q.push([nx,ny])	
		}
	}else{ //벽이나 뱀의 몸통과 부딪힌 경우
		time++
		break
	}
	[x, y] = [nx, ny] //다음 위치로 머리를 이동
	time++
	if(index < l && time === info[index][0]) { //회전할 시간인 경우 회전
		direction = turn(direction, info[index][1])
		index++
	}
}
console.log(time)