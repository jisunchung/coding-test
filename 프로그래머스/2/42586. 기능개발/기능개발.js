function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((val, idx) => Math.ceil((100-val) / speeds[idx]))
    let release = days[0]
    let num = 0
    for(let i = 0 ; i < days.length; i++){
        if(days[i] <= release){
            num++
        }else{
            answer.push(num)
            num = 1
            release = days[i]
        }  
    }
    answer.push(num)
    return answer;
}