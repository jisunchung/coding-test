const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const grid = input.slice(1).map(row => row.split("").map(Number));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array(2).fill(0)));
const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; 

const queue = [[0, 0, 0]]; 
visited[0][0][0] = 1; 

function bfs() {
    let front = 0
    while (front < queue.length) {
        const [x, y, wallBroken] = queue[front++]

        if (x === M - 1 && y === N - 1) {
          return visited[y][x][wallBroken]; 
        }

        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;

          if (nx >= 0 && nx < M && ny >= 0 && ny < N) { 
            if (grid[ny][nx] === 0 && visited[ny][nx][wallBroken] === 0) { 
              visited[ny][nx][wallBroken] = visited[y][x][wallBroken] + 1;
              queue.push([nx, ny, wallBroken]);
            } else if (grid[ny][nx] === 1 && wallBroken === 0 && visited[ny][nx][1] === 0) {
              visited[ny][nx][1] = visited[y][x][wallBroken] + 1;
              queue.push([nx, ny, 1]);
            }
          }
        }
      }
    return -1;
}

console.log(bfs());
