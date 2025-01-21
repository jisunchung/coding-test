function solution(num) {
    if(num === 1) return 0;
    
    let answer = 0;
    while(answer < 500 && num !== 1){
        if(num % 2 === 0){
            num /= 2
        }else num = num * 3 + 1
        answer++
    }
    if(answer === 500 && num !== 1) return -1
    return answer;
}