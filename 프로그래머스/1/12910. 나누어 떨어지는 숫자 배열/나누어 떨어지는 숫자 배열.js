function solution(arr, divisor) {
    let answer = arr.filter(i => i % divisor === 0)
    return answer.length === 0 ? [-1] : answer.sort((a,b) => a-b)
}