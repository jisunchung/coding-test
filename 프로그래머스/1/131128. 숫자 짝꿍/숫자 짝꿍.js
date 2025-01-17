function solution(X, Y) {
    const result = []
    let map = {}
    for(let c of X){
        map[c] = ( map[c] || 0) + 1
    }
    for(let c of Y){
        if(!map[c]) continue
        result.push(c)
        map[c]--
    }
    if(!result.length) return "-1"
    if(result.every(i => i==="0")) return "0"
    return result.sort((a,b) => b-a).join("")
}