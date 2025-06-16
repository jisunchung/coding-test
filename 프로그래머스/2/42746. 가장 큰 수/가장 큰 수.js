function solution(numbers) {
    //붙였을 때 더 큰 순서로 정렬
    const sorted = numbers.map(String).sort((a,b) => (b+a) - (a+b))
    
    if(sorted[0] === '0') return '0'
    
    return sorted.join('')
}