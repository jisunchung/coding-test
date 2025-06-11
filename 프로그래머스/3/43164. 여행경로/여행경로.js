function solution(tickets) {

    //알파벳 순서가 앞서는 경로를 먼저 탐색하기 위해
    tickets.sort()
    
    //map사용하기 departure : destinaion list[[des, index]...]
    const map = {}
    
    for(let i = 0; i < tickets.length; i++){ 
        const [dep,des] = tickets[i]
        if(!map[dep]) map[dep] = []
        map[dep].push(des)
    }
    
    //dfs 실행, 방문 여부 확인해야됨
    //모두 사용했는지 어떻게...파악하지?
    let answer = []
    const dfs = (dep) => {
        const des = map[dep]
        while(des && des.length > 0){
            dfs(des.shift())
        }
        answer.push(dep)
    }
    dfs("ICN")
    
    return answer.reverse();
}