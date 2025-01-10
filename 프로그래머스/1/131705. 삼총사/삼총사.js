function solution(number) {
    const n = number.length
    const selected = []
        var answer = 0;
    function dfs(depth, start){
        if(depth === 3){
            const sum  =selected.reduce((acc, curr)=> acc+curr, 0)
            if(sum === 0) answer++
            return 
        }
        for(let i = start ; i < n; i++){
            selected.push(number[i])
            dfs(depth + 1, i+1)
            selected.pop()

        }
    }
    dfs(0,0)
    return answer;
}