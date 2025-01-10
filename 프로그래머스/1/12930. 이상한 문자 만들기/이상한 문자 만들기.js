//~50
function solution(s) {
    //짝수 대문자 홀수 소문자
    let words = s.split(" ")
    words.forEach((word, idx) => {
        let tmp = ""
        for(let i = 0; i <word.length; i++){
            // tmp += i % 2 === 0 ? word[i].toUpperCase(): word[i].toLowerCase()
            if(i % 2 === 0) tmp+= word[i].toUpperCase()
            else tmp+= word[i].toLowerCase()
        }
        
        words[idx] = tmp
    })
    return words.join(" ");
}