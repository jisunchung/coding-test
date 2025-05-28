function solution(numbers, target) {

    const dfs = (i, acc) => {
        if(i === numbers.length){
            return acc === target ? 1 : 0
        }
        
        return dfs(i+1, acc + numbers[i]) + dfs(i+1, acc - numbers[i])
    }
    return dfs(0, 0)

}