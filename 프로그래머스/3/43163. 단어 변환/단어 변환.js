function solution(begin, target, words) {
    //만약 words에 target이 없으면 return 0, 변환할 수 없으면 0
    //한번에 한개의 알파벳만 바꿀 수 잇음
    if(!words.includes(target)) return 0
    
    //bfs
    const q = [[begin, 0]]

    const check = (w1, w2) => {
        let diff = 0
        for(let i = 0; i < w1.length ;i++){
            if(w1[i] !== w2[i]) diff++
            if(diff > 1) return false
        }
        return diff === 1
    }
    while(q.length){
        const [curr, step] = q.shift()
        if(curr === target) return step
        for(let i = 0; i < words.length ;i++){
            if(check(curr, words[i])){
                q.push([words[i], step+1])
                words[i] = "" //방문처리
            }
        }
    }
    
    return 0;
}