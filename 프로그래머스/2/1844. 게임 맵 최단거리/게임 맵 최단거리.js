function solution(maps) {
    const ROWS = maps.length, COLS = maps[0].length
    const directions = [[0,1],[1,0],[0,-1],[-1,0]]
    const visited = new Set()
    const q = []
    q.push([0,0,1])
    
    let front = 0
    while(front < q.length){
        const [r,c, dis] = q[front++]

        if(r === ROWS -1 && c === COLS -1) return dis
        
        for(const [dr, dc] of directions){
            const [nr, nc] = [r + dr, c + dc]
            const key = `${nr},${nc}`
            if(nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS || visited.has(key) || maps[nr][nc] === 0) continue
            visited.add(key)
            q.push([nr,nc,dis+1])
        }
    }
    return -1
}