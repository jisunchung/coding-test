function solution(n) {
    let answer = '';
    let wm = "수박"
    //짝수 경우
    if(n%2 === 0){
         answer = wm.repeat(n/2)
    }else{
        answer = wm.repeat(Math.floor(n/2)) + "수"
    }
 
   
    return answer;
}