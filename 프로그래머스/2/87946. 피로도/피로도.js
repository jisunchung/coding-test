function solution(k, dungeons) {
    const n = dungeons.length
    const visited = Array(n).fill(false)
    let res = 0
    const dfs = (now, depth) => {
        res = Math.max(res, depth)
        
        for(let i = 0; i < n; i++){
            if(visited[i]) continue
            //현재 피로도가 최소값보다 크면 던전 방문
            if(now >= dungeons[i][0]){
                visited[i] = true
                dfs(now - dungeons[i][1], depth+1) 
                visited[i] = false
            }
        }
    }
    dfs(k, 0)
    return res
    
}