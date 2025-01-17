function solution(keymap, targets) {
    var answer = [];
    const alpha = Array(26).fill(Infinity)
    keymap.forEach(key => {
        for(let i = 0 ; i < key.length; i++){
            // console.log(key[i],alpha[key[i].charCodeAt() - 65])
            if(alpha[key[i].charCodeAt() - 65] > i){
                alpha[key[i].charCodeAt() - 65] = i
            }
        }
    })
    // console.log(alpha)
    return targets.map(str => {
        let count = 0
        for(c of str){
            if(alpha[c.charCodeAt() - 65] === Infinity) return -1
            count += alpha[c.charCodeAt() - 65]+1
        }
        return count
    })
    
}