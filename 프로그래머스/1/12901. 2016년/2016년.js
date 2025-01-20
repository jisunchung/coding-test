function solution(a, b) {
    let answer = '';
    let sum = 0
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    for(let i = 0; i < a-1; i++) sum+= month[i]
    return day[(sum+b-1)%7];
}