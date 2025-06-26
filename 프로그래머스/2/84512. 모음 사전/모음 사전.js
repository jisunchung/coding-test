function solution(word) {
    let answer = 0;
    const vowels = [ 'A', 'E', 'I', 'O', 'U']
    let found = false

    const dfs = (current) => {
        if (found) return;

        if (current.length > 0) {
          answer++;
          if (current === word) {
            found = true;
            return;
          }
        }

        if (current.length === 5) return;

        for (let i = 0; i < vowels.length; i++) {
          dfs(current + vowels[i]);
        }

    }
    
    dfs("")
    return answer
    

}