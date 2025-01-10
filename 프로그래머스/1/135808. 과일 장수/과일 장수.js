//~4
//k 최상품 점수, P 최하품 점수 , 한상자의 가격은 p * m(m 개씩 포장) 
function solution(k, m, score) {
    let answer = 0;
    score.sort()

    while(score.length >= m){
       answer += Math.min(...score.splice(-m)) * m
    }
    return answer;
}