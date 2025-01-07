function solution(left, right) {
    let answer = 0;

    //약수의 개수 구하는 방법
    for(let i = left; i <= right; i++){
        //i의 약수의 개수
        let num = 0
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i % j === 0) num+=2
            if(i/j === j) num -=1
            
        }
        if( num % 2 === 0){
            answer += i
        }else answer -= i
    }

    return answer;
}