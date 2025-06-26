function solution(word) {
    let answer = 0;
    const vowels = [ 'A', 'E', 'I', 'O', 'U']
    const res =[]
    const dfs = (selected, depth, ans) => {
        if(selected.length <= 5) {
            ans[0]++
            // console.log(selected.join(""))
           if(selected.join("") === word){
               answer = ans[0]
            console.log("찾음",word, answer)
               return 
           }
        }else return 

        for(let i = 0 ; i < vowels.length; i++){
            selected.push(vowels[i])
            dfs(selected, depth+1, ans) 
            selected.pop()
        }
    }
    dfs([],0, [0])
    return answer -1
    

}