function solution(s) {
    let numList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = s
    for(let i = 0; i < numList.length; i++){
       let arr =  answer.split(numList[i])
       answer = arr.join(i)
    }
    return Number(answer)
}