function solution(priorities, location) {
    let res = 0;
    
    const q = priorities.map((val,idx) => [idx, val])
    
    while(q.length){
        const curr = q.shift()
        
        if(q.some(val => val[1] > curr[1])) q.push(curr)
        else{
            res++
            if(location === curr[0]) return res
        }
    }
}