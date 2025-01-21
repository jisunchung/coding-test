function solution(sizes) {
    let max_w = 0
    let max_h = 0
    for([w,h] of sizes){
        max_w = Math.max(max_w, Math.max(w,h))
        max_h = Math.max(max_h, Math.min(w,h))
    }
    return max_w * max_h
}