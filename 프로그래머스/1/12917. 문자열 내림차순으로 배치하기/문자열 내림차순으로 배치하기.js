function solution(s) {

   return [...s].map(i => i.charCodeAt()).sort((a,b)=> b-a).map(j => String.fromCharCode(j)).join("")
    
    
}