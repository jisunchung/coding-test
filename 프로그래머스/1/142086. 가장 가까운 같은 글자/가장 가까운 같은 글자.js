function solution(s) {
    const check = {}
    const result = []
    for(let i = 0 ; i < s.length; i++){
        if(check[s[i]]) {
            result[i] = i - check[s[i]] 
            check[s[i]] = i
        }else {
            result[i] = -1
            check[s[i]] = i
        }
        console.log(check, result)
    }
    return result
}