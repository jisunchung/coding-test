function solution(s, n) {
    const alpha1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alpha2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return [...s].map(i => {
        if(i === " ") return i
        else if("a" <= i && i <= "z") return alpha1[(alpha1.indexOf(i) + n)%26]
        else if("A" <= i && i <= "Z") return alpha2[(alpha2.indexOf(i) + n)%26]
    }).join("")
}