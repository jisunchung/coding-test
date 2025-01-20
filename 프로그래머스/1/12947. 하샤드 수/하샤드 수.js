function solution(x) {
    let sum = 0
    let num = x
    while(num > 0){
        sum += num % 10
        num = parseInt(num/10)
    }
    return x % sum === 0
}