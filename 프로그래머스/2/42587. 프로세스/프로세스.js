function solution(priorities, location) {
    const q = []
    let count = 0
    for(let i = 0; i < priorities.length; i++){
        q.push([i, priorities[i]])
    }
    while(q.length > 0){
        const curr = q.shift()
        
        if(q.some(task => task[1] > curr[1])){
            q.push(curr)
        }else{
            count++
            if(curr[0] === location) return count
        }
    }
}