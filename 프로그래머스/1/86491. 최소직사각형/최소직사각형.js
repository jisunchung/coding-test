function solution(sizes) {
    //가장 작은 지갑의 크기를 return
    //[w,h]중에서 큰 값이 앞에오게 정렬
    const tmp = sizes.map( i => i.sort((a,b) => a-b))
    console.log(tmp)
    let maxWith = 0, maxHeight = 0
    for(const [w,h] of tmp){
        maxWith = Math.max(maxWith, w)
        maxHeight = Math.max(maxHeight, h)
    }
    return maxWith * maxHeight
}