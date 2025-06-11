function solution(tickets) {

    //알파벳 순서가 앞서는 경로를 먼저 탐색하기 위해.. sort?
    tickets.sort()
    
    //map사용하기 departure : destinaion list[[des, index]...]
    const map = {}
    const visited = new Array(tickets.length).fill(false)
    
    for(let i = 0; i < tickets.length; i++){ 
        const [dep,des] = tickets[i]
        if(!map[dep]) map[dep] = []
        map[dep].push([des, i])
    }
    
    //dfs 실행, 방문 여부 확인해야됨
    //모두 사용했는지 어떻게...파악하지?
    let answer = []
    const dfs = (dep, res) => {
        //다 방문함
        if(res.length === tickets.length + 1){
            console.log(res)
            answer = [...res]
            return true
        }

        for(const [departure, index] of map[dep] || []){
            console.log(departure, index)
            
            if(visited[index]) continue
            res.push(departure)
            visited[index] = true
        
            if(dfs(departure, res)) return true
            res.pop()
            visited[index] = false
        }
        return false
    }
    dfs("ICN", ["ICN"])
    
    return answer;
}