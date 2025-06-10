function solution(rectangle, characterX, characterY, itemX, itemY) {
    
    const SIZE = 102 //2배 확대된 grid생성
    const grid = Array.from({length : SIZE}, () => Array(SIZE).fill(0))
    
    //사각형의 테두리는 1, 내부는 2
    for(const [x1,y1,x2,y2] of rectangle){
        for(let y = y1 * 2; y <= y2 * 2; y++){
            for(let x = x1 * 2; x <= x2 * 2; x++){
                if(x === x1 * 2 || x === x2 * 2 || y === y1 * 2 || y === y2 * 2){
                    if(grid[y][x] !== 2) grid[y][x] = 1
                }else{
                    grid[y][x] = 2
                }
            }
        }
    }
    
    //BFS
    const visited = Array.from({length : SIZE}, () => Array(SIZE).fill(false))
    const q = []
    const directions = [[1,0],[0,1],[-1,0],[0,-1]]
    characterX *= 2
    characterY *= 2
    itemX *= 2
    itemY *= 2
    
    q.push([characterX,characterY,0])
    visited[characterY][characterX] = true
    let front = 0
    
    while(front < q.length){
        const [x,y,dist] = q[front++]
        
        if(x === itemX && y === itemY){
            return dist / 2
        }
        
        for(const [dx, dy] of directions){
            const [nx, ny] = [x + dx, y + dy]
            
            if(nx >= 0 && nx < SIZE && ny >= 0 && ny < SIZE && !visited[ny][nx] && grid[ny][nx] === 1){
                visited[ny][nx] = true
                q.push([nx,ny,dist+1])
            }
        }
    }
    return 0
}