function solution(s, skip, index) {
    const alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
                   'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                   'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                   'y', 'z'].filter(c => !skip.includes(c))
    
    return [...s].map(target => alpha[(alpha.indexOf(target)+index)%alpha.length]).join("")
    
}