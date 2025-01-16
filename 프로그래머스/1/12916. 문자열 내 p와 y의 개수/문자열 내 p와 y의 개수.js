function solution(s){
    let num1 = 0
    let num2 = 0 
    for(c of s){
        if(c === 'p' || c ==='P') num1++
        else if(c === 'y' || c=== 'Y') num2++
    }
    console.log(num1, num2)

    return num1 === num2;
}