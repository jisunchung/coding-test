function solution(nums) {
    const selected = []
    let answer = 0
    function dfs(depth, start){
        if(depth === 3){
            const num = selected.reduce((a,b) => a+b,0)
            let check= true
            for(let i = 2; i <= Math.sqrt(num); i++){
                if(num % i === 0){
                    check = false
                    return
                }
            }
            if(check) answer++
            return
        }
        for(let i = start; i < nums.length; i++){
            selected.push(nums[i])
            dfs(depth+1, i+1)
            selected.pop()
        }
    }
    dfs(0,0)
    return answer;
}