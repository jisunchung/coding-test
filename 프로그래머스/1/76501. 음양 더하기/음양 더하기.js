function solution(absolutes, signs) {
    let answer = 0
    absolutes.forEach((n, idx) => answer += signs[idx] ? n : -n)
    return answer 
}