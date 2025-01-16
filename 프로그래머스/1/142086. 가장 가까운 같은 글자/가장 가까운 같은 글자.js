function solution(s) {
    const check = {}
    const result = Array(s.length).fill(-1);
    for(let i = 0 ; i < s.length; i++){
        // if(check[s[i]]) {
        //     result[i] = i - check[s[i]] 
        //     check[s[i]] = i
        // }else {
        //     result[i] = -1
        //     check[s[i]] = i
        // }
        if (check[s[i]] !== undefined) {
            result[i] = i - check[s[i]];
        }
        check[s[i]] = i;
    }
    return result
}