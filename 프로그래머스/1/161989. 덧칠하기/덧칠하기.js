function solution(n, m, section) {
    let answer = 0;
    let painted = 0
    for(s of section){
        if(painted < s){
            answer++
            painted = s + m-1
        }
    }
    return answer;
}

