function solution(participant, completion) {
    const map = {}
    for(const person of participant){
        map[person] = (map[person] || 0) + 1
    }
    
    for(const person of completion){
        map[person] = map[person] - 1
    }
    
    for(const val in map){
        if(map[val] === 1) return val
    }

}