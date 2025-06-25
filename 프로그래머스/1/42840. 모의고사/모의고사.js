function solution(answers) {
    let answer = [];
    const correct = [[1,0],[2,0],[3,0]]
    const p1 = [1, 2, 3, 4, 5]
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    for(let i = 0; i < answers.length; i++){
        console.log(answers[i], p3[i] , i)
        if(answers[i] === p1[i % p1.length]) correct[0][1]++
        if(answers[i] === p2[i % p2.length]) correct[1][1]++
        if(answers[i] === p3[i % p3.length]) correct[2][1]++
    }
    console.log(correct)
    let max = 0
    const tmp = correct.sort((a,b) => b[1] - a[1])
    max = tmp[0][1]
    for(const [id, num] of tmp){
        if(num >= max) answer.push(id)
    }
    
    return answer;
}