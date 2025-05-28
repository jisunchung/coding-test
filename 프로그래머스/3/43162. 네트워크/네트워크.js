function solution(n, computers) {
    //인접리스트 만들기
    const adj = Array.from({length : n}, () => [])
    const edges = []
    const visited = new Array(n).fill(false)
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i !== j && computers[i][j]){
                edges.push([i,j])
            }
        }
    }
    for(const [u,v] of edges){
        adj[u].push(v)
        adj[v].push(u)
    } 
    
    const dfs = (node) =>{
        for(const nei of adj[node]){
            if(!visited[nei]){
                visited[nei] = true
                dfs(nei)
            }
        }
    }
    let res = 0
    for(let node = 0 ; node < n; node++){
        if(!visited[node]){
            visited[node] = true
            //현재 노드와 연결된 모든 노드 방문
            dfs(node)
            //새로운 연결 요소 발견시 카운트 증가
            res++
        }
    }
    return res
    
    
}