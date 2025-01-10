//~35
function solution(a, b, n) {
    // 빈병 a 개당 b개의 콜라 현재 n개
    // n +=  n % 3 (2)
    // answer +=  n /3 
    let answer = 0;
    while(n >= a){
        let res = n % a  // 2
        let curr = Math.floor(n / a )*b
        n = curr+res
        answer += curr
    }
    return answer;
}