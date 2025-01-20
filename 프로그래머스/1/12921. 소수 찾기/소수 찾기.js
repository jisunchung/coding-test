function solution(n) {
    let answer = []
    for(let i = 2; i <= n; i++) answer[i] = 1
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(answer[i]){
            for(let j = 2; i*j <=n; j++){
                answer[i*j] = 0
            }
        }
    }
    return answer.filter(ans => ans).length
}