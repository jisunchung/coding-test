function solution(arr, divisor) {
    var answer = [];
    arr.forEach(i => {
        if(i % divisor === 0) answer.push(i)
    })
    if(answer.length === 0) return [-1]
    answer.sort((a,b) => a-b)
    return answer;
}