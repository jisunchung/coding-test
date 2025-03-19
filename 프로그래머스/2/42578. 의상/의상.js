function solution(clothes) {
    const map = {}
    for(const [clothe, option] of clothes){
        map[option] = (map[option] || 0 ) +1
    } 
    return Object.values(map).reduce((acc, curr) => acc *(curr+1),1) -1
}