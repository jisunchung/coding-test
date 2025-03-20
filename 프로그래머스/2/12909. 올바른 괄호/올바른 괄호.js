function solution(s){
    const stack = []
    for(const target of s){
        if(target === "(") stack.push(target)
        else{
            const v = stack.pop()
            if(v !== "(") return false
        }
    }
    return stack.length === 0 ? true : false
}